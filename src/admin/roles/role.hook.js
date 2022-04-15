import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validationName } from "./role.validation";
import { findDataApi, deleteDataApi, storeDataApi } from "../../api/role.api";

export const useRole = () => {
	const [data, setData] = useState([]);
	const [id, setId] = useState("");
	const [isCreateModal, setIsCreateModal] = useState(false);
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
		validationSchema: validationName,
		onSubmit: (values) => {
			storeData(values);
		},
	});
	//Store Data End

	return {
		data,
		setId,
		formikStore,
		isAlert,
		deleteData,
		isCreateModal,
		setIsCreateModal,
	};
};
