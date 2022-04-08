import axios from "axios";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validation } from "./category.validation";

export const useFetch = (id) => {
	const [data, setData] = useState([]);

	const showData = async () => {
		const category = await axios.get("http://localhost:5000/category");

		setData(category.data.data);
	};

	useEffect(() => {
		showData();
	}, []);

	const deleteData = async () => {
		await axios.delete(`http://localhost:5000/category/${id}`);

		showData();
	};

	return { data, showData, deleteData };
};

export const useCreate = (setIsCreateModal, showData, setIsAlert) => {
	const storeData = async (values) => {
		await axios.post("http://localhost:5000/category", {
			name: values.name,
		});

		setIsCreateModal(false);
		setTimeout(() => {
			formik.resetForm(values);
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

	return { formik };
};

export const useUpdate = (setIsEditModal, showData, name, id, setIsAlert) => {
	const updateDataCategory = async (values) => {
		await axios.patch(`http://localhost:5000/category/${id}`, {
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
			updateDataCategory(values);
		},
	});

	return { formik };
};
