import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validation, validationBio, validationImage } from "./team.validation";
import {
	findDataApi,
	deleteDataApi,
	storeDataApi,
	updateDataApi,
	updateImageApi,
} from "../../api/team.api";

export const useTeam = () => {
	const [data, setData] = useState([]);
	const [isCreateModal, setIsCreateModal] = useState(false);
	const [isEditModal, setIsEditModal] = useState(false);
	const [isEditImageModal, setIsEditImageModal] = useState(false);
	const [isDetailModal, setIsDetailModal] = useState(false);
	const [isShowImage, setIsShowImage] = useState(false);
	const [imagePreview, setImagePreview] = useState("");
	const [imageEditPreview, setImageEditPreview] = useState("");
	const [isAlert, setIsAlert] = useState(false);
	const [imageValue, setImageValue] = useState("");
	const [imageEditValue, setImageEditValue] = useState("");
	const [isShowImageEdit, setIsShowImageEdit] = useState(false);
	const [values, setValues] = useState({
		id: "",
		name: "",
		position: "",
		desc: "",
		image: "",
	});

	//Show Data Start
	const showData = async () => {
		const team = await findDataApi();

		setData(team.data.data);
	};
	//Show Data End

	useEffect(() => {
		showData();
	}, []);

	//Delete Data Start
	const deleteData = async () => {
		await deleteDataApi(values.id);

		showData();
		setIsDetailModal(false);
	};
	//Delete Data End

	//Store Data Start
	const storeData = async (values) => {
		const formData = new FormData();
		formData.append("name", values.name);
		formData.append("position", values.position);
		formData.append("desc", values.desc);
		formData.append("image", values.image);

		await storeDataApi(formData);

		setIsCreateModal(false);
		formikStore.resetForm();
		setImagePreview("");
		setIsShowImage(false);
		setImageValue("");
		setIsAlert(true);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
		showData();
	};

	const formikStore = useFormik({
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
	//Store Data End

	//Update Data Start
	const updateDataBio = async (value) => {
		await updateDataApi(values.id, value.name, value.position, value.desc);

		setIsEditModal(false);
		showData();
		setIsAlert(true);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const formikUpdate = useFormik({
		initialValues: {
			name: values.name,
			position: values.position,
			desc: values.desc,
		},
		enableReinitialize: true,
		validationSchema: validationBio,
		onSubmit: (value) => {
			updateDataBio(value);
		},
	});
	//Update Data End

	//Update Image Start
	const updateImage = async (value) => {
		const formData = new FormData();
		formData.append("image", value.image);

		await updateImageApi(values.id, formData);

		setIsEditImageModal(false);
		setImageEditPreview("");
		setImageValue("");
		setIsShowImage(false);
		setIsAlert(true);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
		showData();
	};

	const formikUpdateImage = useFormik({
		initialValues: {
			image: "",
		},
		validationSchema: validationImage,
		onSubmit: (value) => {
			updateImage(value);
		},
	});
	//Update Image End

	return {
		data,
		deleteData,
		isCreateModal,
		setIsCreateModal,
		isDetailModal,
		setIsDetailModal,
		setIsEditModal,
		isEditModal,
		setIsEditImageModal,
		isEditImageModal,
		values,
		setValues,
		formikStore,
		formikUpdate,
		formikUpdateImage,
		isAlert,
		setImagePreview,
		imagePreview,
		isShowImage,
		setIsShowImage,
		imageValue,
		setImageValue,
		setImageEditPreview,
		imageEditPreview,
		setImageEditValue,
		imageEditValue,
		setIsShowImageEdit,
		isShowImageEdit,
	};
};
