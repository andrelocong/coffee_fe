import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validation } from "./mainCategory.validation";
import {
	findDataApi,
	deleteDataApi,
	storeDataApi,
	updateDataApi,
} from "../../api/main-category.api";

export const useMainCategory = () => {
	const [data, setData] = useState([]);
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const [isCreateModal, setIsCreateModal] = useState(false);
	const [isEditModal, setIsEditModal] = useState(false);
	const [isAlert, setIsAlert] = useState(false);

	//Show Data Start
	const showData = async () => {
		const category = await findDataApi();

		setData(category.data.data);
	};
	//Show Data End

	useEffect(() => {
		showData();
	}, []);

	//Delete Data Start
	const deleteData = async () => {
		await deleteDataApi(id);

		showData();
	};
	//Delete Data End

	//Store Data Start
	const storeData = async (values) => {
		await storeDataApi(values.name);

		setIsCreateModal(false);
		setTimeout(() => {
			formikStore.resetForm();
			setIsAlert(true);
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
		showData();
	};

	const formikStore = useFormik({
		initialValues: {
			name: "",
		},
		validationSchema: validation,
		onSubmit: (values) => {
			storeData(values);
		},
	});
	//Store Data End

	//Update Data Start
	const updateDataMainCategory = async (values) => {
		await updateDataApi(id, values.name);

		setIsEditModal(false);
		setTimeout(() => {
			setIsAlert(true);
			showData();
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const formikUpdate = useFormik({
		initialValues: {
			name: name,
		},
		enableReinitialize: true,
		validationSchema: validation,
		onSubmit: (values) => {
			updateDataMainCategory(values);
		},
	});
	//Update Data End

	return {
		data,
		setId,
		setName,
		deleteData,
		isCreateModal,
		setIsCreateModal,
		isEditModal,
		setIsEditModal,
		formikStore,
		formikUpdate,
		isAlert,
	};
};
