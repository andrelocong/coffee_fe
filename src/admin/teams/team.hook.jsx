import axios from "axios";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validation, validationBio, validationImage } from "./team.validation";

export const useFetch = () => {
	const [data, setData] = useState([]);

	const showData = async () => {
		const team = await axios.get("http://localhost:5000/team");

		setData(team.data.data);
	};

	useEffect(() => {
		showData();
	}, []);

	return { data, showData };
};

export const useDelete = (id, setIsDetailModal, showData) => {
	const deleteData = async () => {
		await axios.delete(`http://localhost:5000/team/${id}`);

		showData();
		setIsDetailModal(false);
	};

	return { deleteData };
};

export const useCreate = (setIsCreateModal, showData) => {
	const [isShowImage, setIsShowImage] = useState(false);
	const [imagePreview, setImagePreview] = useState("");
	const [isAlert, setIsAlert] = useState(false);

	const storeData = async (values) => {
		const formData = new FormData();
		formData.append("name", values.name);
		formData.append("position", values.position);
		formData.append("desc", values.desc);
		formData.append("image", values.image);

		await axios.post("http://localhost:5000/team", formData);

		setIsCreateModal(false);
		formik.resetForm();
		setImagePreview("");
		setIsShowImage(false);
		setIsAlert(true);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
		showData();
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			position: "",
			desc: "",
			image: "",
		},
		validationSchema: validation,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	return {
		formik,
		isShowImage,
		imagePreview,
		isAlert,
		setIsShowImage,
		setImagePreview,
	};
};

export const useUpdate = (setIsEditModal, showData, value) => {
	const [isAlert, setIsAlert] = useState(false);

	const updateDataBio = async (values) => {
		await axios.patch(`http://localhost:5000/team/${value.id}`, {
			name: values.name,
			position: values.position,
			desc: values.desc,
		});

		setIsEditModal(false);
		showData();
		setIsAlert(true);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const formik = useFormik({
		initialValues: {
			name: value.name,
			position: value.position,
			desc: value.desc,
		},
		enableReinitialize: true,
		validationSchema: validationBio,
		onSubmit: (values) => {
			updateDataBio(values);
		},
	});

	return { formik, isAlert };
};

export const useUpdateImage = (
	setIsEditImageModal,
	showData,
	id,
	setImagePreview,
	setIsShowImage,
	setImageValue
) => {
	const [isAlert, setIsAlert] = useState(false);

	const updateImage = async (values) => {
		const formData = new FormData();
		formData.append("image", values.image);

		await axios.patch(`http://localhost:5000/team/image/${id}`, formData);

		setIsEditImageModal(false);
		setImagePreview("");
		setImageValue("");
		setIsShowImage(false);
		setIsAlert(true);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
		showData();
	};

	const formik = useFormik({
		initialValues: {
			image: "",
		},
		validationSchema: validationImage,
		onSubmit: (values) => {
			updateImage(values);
		},
	});

	return { formik, isAlert };
};
