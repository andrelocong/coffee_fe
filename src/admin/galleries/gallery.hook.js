import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validation } from "./gallery.validation";
import {
	findDataApi,
	deleteDataApi,
	storeDataApi,
} from "../../api/gallery.api";

export const useGallery = () => {
	const [data, setData] = useState([]);
	const [id, setId] = useState("");
	const [isCreateModal, setIsCreateModal] = useState(false);
	const [isShowImage, setIsShowImage] = useState(false);
	const [isAlert, setIsAlert] = useState(false);
	const [imagePreview, setImagePreview] = useState("");
	const [imageValue, setImageValue] = useState("");

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

	//Show Data Start
	const showData = async () => {
		const gallery = await findDataApi();

		setData(gallery.data.data);
	};
	//Show Data Start

	useEffect(() => {
		showData();
	}, []);

	//Delete Data Start
	const deleteData = async () => {
		await deleteDataApi(id);

		showData();
	};
	//Delete Data Start

	//Store Data Start
	const storeData = async (values) => {
		const formData = new FormData();
		formData.append("image", values.image);
		formData.append("category", values.category);

		await storeDataApi(formData);

		setIsCreateModal(false);
		showData();
		setIsShowImage(false);
		setTimeout(() => {
			setIsAlert(true);
			formikStore.resetForm();
			setImagePreview("");
			setImageValue("");
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const formikStore = useFormik({
		initialValues: {
			category: "",
			image: "",
		},
		validationSchema: validation,
		onSubmit: (values) => {
			storeData(values);
		},
	});
	//Store Data End

	return {
		data,
		setId,
		isCreateModal,
		isShowImage,
		isAlert,
		imagePreview,
		imageValue,
		categories,
		formikStore,
		deleteData,
		setIsCreateModal,
		setIsShowImage,
		setImagePreview,
		setImageValue,
	};
};
