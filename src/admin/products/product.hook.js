import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validation } from "./product.validation";
import {
	deleteDataApi,
	findDataApi,
	findDataByName,
	storeDataApi,
	updateDataApi,
} from "../../api/product.api";

export const useFetch = (id) => {
	const [data, setData] = useState([]);

	const showData = async () => {
		const dataProduct = await findDataApi();

		setData(dataProduct.data.products);
	};

	useEffect(() => {
		showData();
	}, []);

	const deleteData = async () => {
		await deleteDataApi(id);

		showData();
	};

	const handleSearch = async (search) => {
		const product = await findDataByName(search);
		setData(product.data.data);
	};

	return { data, showData, deleteData, handleSearch };
};

export const useCreate = (setIsCreateModal, showData) => {
	const [isAlert, setIsAlert] = useState(false);

	const categories = [
		{
			value: "coffee",
		},
		{
			value: "cocoa",
		},
		{
			value: "vanilla",
		},
	];

	const storeData = async (values) => {
		await storeDataApi(values.name, values.category);

		setIsCreateModal(false);
		setIsAlert(true);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
		showData();
		setTimeout(() => {
			formik.resetForm();
		}, 200);
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			category: "",
		},
		validationSchema: validation,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	return { formik, isAlert, categories };
};

export const useUpdate = (setIsEditModal, showData, values) => {
	const [isAlert, setIsAlert] = useState(false);

	const categories = [
		{
			value: "coffee",
		},
		{
			value: "cocoa",
		},
		{
			value: "vanilla",
		},
	];

	const updateData = async (value) => {
		await updateDataApi(values.id, value.name, value.category);

		setIsEditModal(false);
		showData();
		setIsAlert(true);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const formik = useFormik({
		initialValues: {
			name: values.name,
			category: values.category,
		},
		enableReinitialize: true,
		validationSchema: validation,
		onSubmit: (value) => {
			updateData(value);
		},
	});

	return { formik, isAlert, categories };
};
