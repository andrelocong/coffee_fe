import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validation } from "./category.validation";
import {
	findDataApi,
	deleteDataApi,
	storeDataApi,
	updateDataApi,
} from "../../api/category.api";

export const useCategory = () => {
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const [data, setData] = useState([]);
	const [isAlert, setIsAlert] = useState(false);
	const [isCreateModal, setIsCreateModal] = useState(false);
	const [isEditModal, setIsEditModal] = useState(false);

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
			formikStore.resetForm(values);
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
	const updateDataCategory = async (values) => {
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
			updateDataCategory(values);
		},
	});
	//Update Data End

	return {
		setId,
		data,
		setName,
		deleteData,
		isAlert,
		setIsCreateModal,
		isCreateModal,
		isEditModal,
		setIsEditModal,
		formikUpdate,
		formikStore,
	};
};
