import axios from "axios";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validation } from "./mainCategory.validation";

export const useFetch = (id) => {
	const [data, setData] = useState([]);

	const showData = async () => {
		const category = await axios.get("http://localhost:5000/main-category");

		setData(category.data.data);
	};

	useEffect(() => {
		showData();
	}, []);

	const deleteData = async () => {
		await axios.delete(`http://localhost:5000/main-category/${id}`);

		showData();
	};

	return { data, showData, deleteData };
};

export const useCreate = (setIsCreateModal, showData) => {
	const [isAlert, setIsAlert] = useState(false);

	const storeData = async (values) => {
		await axios.post("http://localhost:5000/main-category", {
			name: values.name,
		});

		setIsCreateModal(false);
		setTimeout(() => {
			formik.resetForm();
			setIsAlert(true);
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
		showData();
	};

	const formik = useFormik({
		initialValues: {
			name: "",
		},
		validationSchema: validation,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	return { formik, isAlert };
};

export const useUpdate = (setIsEditModal, showData, name, id) => {
	const [isAlert, setIsAlert] = useState(false);

	const updateDataMainCategory = async (values) => {
		await axios.patch(`http://localhost:5000/main-category/${id}`, {
			name: values.name,
		});

		setIsEditModal(false);
		setTimeout(() => {
			setIsAlert(true);
			showData();
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const formik = useFormik({
		initialValues: {
			name: name,
		},
		enableReinitialize: true,
		validationSchema: validation,
		onSubmit: (values) => {
			updateDataMainCategory(values);
		},
	});

	return { formik, isAlert };
};
