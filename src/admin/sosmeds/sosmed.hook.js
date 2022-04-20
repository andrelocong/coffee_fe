import axios from "axios";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validation } from "./sosmed.validation";
import {
	deleteDataApi,
	findDataApi,
	storeDataApi,
	updateDataApi,
} from "../../api/sosmed.api";

export const useFetch = (id) => {
	const [data, setData] = useState([]);

	const showData = async () => {
		const sosmed = await findDataApi();

		setData(sosmed.data.data);
	};

	useEffect(() => {
		showData();
	}, []);

	const deleteData = async () => {
		await deleteDataApi(id);

		showData();
	};

	return { data, showData, deleteData };
};

export const useCreate = (setIsCreateModal, showData) => {
	const [isAlert, setIsAlert] = useState(false);

	const storeData = async (values) => {
		await storeDataApi(values.sosmed, values.address);

		setIsCreateModal(false);
		showData();
		setTimeout(() => {
			formik.resetForm();
			setIsAlert(true);
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const formik = useFormik({
		initialValues: {
			sosmed: "",
			address: "",
		},
		validationSchema: validation,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	return { formik, isAlert };
};

export const useUpdate = (setIsEditModal, showData, id, value) => {
	const [isAlert, setIsAlert] = useState(false);

	const updateSosmed = async (values) => {
		await updateDataApi(id, values.sosmed, values.address);

		setIsEditModal(false);
		showData();
		formik.resetForm();
		setIsAlert(true);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const formik = useFormik({
		initialValues: {
			sosmed: value.sosmed,
			address: value.address,
		},
		enableReinitialize: true,
		validationSchema: validation,
		onSubmit: (values) => {
			updateSosmed(values);
		},
	});

	return { formik, isAlert };
};
