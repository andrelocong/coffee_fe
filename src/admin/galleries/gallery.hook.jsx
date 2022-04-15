import axios from "axios";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validation } from "./gallery.validation";

export const useFetch = (id) => {
	const [data, setData] = useState([]);

	const showData = async () => {
		const gallery = await axios.get("http://localhost:5000/gallery");

		setData(gallery.data.data);
	};

	useEffect(() => {
		showData();
	}, []);

	const deleteData = async () => {
		await axios.delete(`http://localhost:5000/gallery/${id}`);

		showData();
	};

	return { data, showData, deleteData };
};

export const useCreate = (
	setIsCreateModal,
	showData,
	setIsShowImage,
	setImagePreview,
	setImageValue
) => {
	const [isAlert, setIsAlert] = useState(false);

	const categories = [
		{
			value: "coffee",
		},
		{
			value: "cocoa",
		},
		{
			value: "vanilli",
		},
	];

	const storeData = async (values) => {
		const formData = new FormData();
		formData.append("image", values.image);
		formData.append("category", values.category);

		await axios.post("http://localhost:5000/upload/image", formData);

		setIsCreateModal(false);
		showData();
		setIsShowImage(false);
		setTimeout(() => {
			setIsAlert(true);
			formik.resetForm();
			setImagePreview("");
			setImageValue("");
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const formik = useFormik({
		initialValues: {
			category: "",
			image: "",
		},
		validationSchema: validation,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	return { formik, isAlert, categories };
};
