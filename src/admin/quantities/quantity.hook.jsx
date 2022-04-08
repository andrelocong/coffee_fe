import { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { validation } from "./quantity.validation";

export const useFetch = (id) => {
	const [data, setData] = useState([]);

	const showData = async () => {
		const quantity = await axios.get("http://localhost:5000/quantity");

		setData(quantity.data.data);
	};

	useEffect(() => {
		showData();
	}, []);

	const deleteData = async () => {
		await axios.delete(`http://localhost:5000/quantity/${id}`);
		setTimeout(() => {
			showData();
		}, 200);
	};

	return { data, showData, deleteData };
};

export const useCreate = (setIsCreateModal, showData) => {
	const [isAlert, setIsAlert] = useState(false);

	const storeData = async (values) => {
		await axios.post("http://localhost:5000/quantity", {
			quantity: values.quantity,
		});

		setIsCreateModal(false);
		setTimeout(() => {
			formik.resetForm();
			setIsAlert(true);
			showData();
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const formik = useFormik({
		initialValues: {
			quantity: "",
		},
		validationSchema: validation,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	return { formik, isAlert };
};

export const useUpdate = (setIsEditModal, showData, quantity, id) => {
	const [isAlert, setIsAlert] = useState(false);

	const UpdateQuantity = async (values) => {
		await axios.patch(`http://localhost:5000/quantity/${id}`, {
			quantity: values.quantity,
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
			quantity: quantity,
		},
		enableReinitialize: true,
		validationSchema: validation,
		onSubmit: (values) => {
			UpdateQuantity(values);
		},
	});

	return { formik, isAlert };
};
