import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validationMenu } from "./role.validation";
import {
	findDataApi,
	deleteDataApi,
	storeDataApi,
	updateCanInsertApi,
	updateCanUpdateApi,
	updateCanDeleteApi,
} from "../../api/role-access.api";

import { findOneDataApi } from "../../api/role.api";

export const useRoleDetail = (id) => {
	const [name, setName] = useState("");
	const [data, setData] = useState([]);
	const [roleAccessId, setRoleAccessId] = useState("");
	const [isCreateAccessModal, setIsCreateAccessModal] = useState(false);
	const [isAlert, setIsAlert] = useState(false);
	const [errors, setErrors] = useState("");

	const menu = [
		{
			value: "product",
		},
		{
			value: "order list",
		},
		{
			value: "gallery",
		},
		{
			value: "sosial media",
		},
		{
			value: "team",
		},
		{
			value: "user",
		},
		{
			value: "main category",
		},
		{
			value: "category",
		},
		{
			value: "sub category",
		},
		{
			value: "quantity",
		},
		{
			value: "role",
		},
	];

	//Show Role Name Start
	const showName = async () => {
		const role = await findOneDataApi(id);
		setName(role.data.data.name);
	};
	//Show Role Name End

	//show Data Start
	const showData = async () => {
		const roleAccess = await findDataApi(id);
		setData(roleAccess.data.data);
	};
	//Show Data End

	useEffect(() => {
		showName();
		showData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//Delete Data Start
	const deleteData = async () => {
		await deleteDataApi(roleAccessId);

		showData();
	};
	//Delete Data End

	//Store Data Start
	const storeData = async (values) => {
		try {
			await storeDataApi(values.menu, id);

			setIsCreateAccessModal(false);
			setTimeout(() => {
				formikStore.resetForm();
				setIsAlert(true);
				setErrors("");
			}, 200);
			setTimeout(() => {
				setIsAlert(false);
			}, 1500);
			showData();
		} catch (error) {
			console.log(error.response);
			setErrors(values.menu + " has been used!");
		}
	};

	const formikStore = useFormik({
		initialValues: {
			menu: "",
		},
		validationSchema: validationMenu,
		onSubmit: (values) => {
			storeData(values);
		},
	});
	//Store Data End

	//Change Can Insert Start
	const changeCanInsert = async (e, id) => {
		const value = e.target.value;
		await updateCanInsertApi(value, id);

		showData();
	};
	//Change Can Insert End

	//Change Can Update Start
	const changeCanUpdate = async (e, id) => {
		const value = e.target.value;
		await updateCanUpdateApi(value, id);

		showData();
	};
	//Change Can Update End

	//Change Can Delete Start
	const changeCanDelete = async (e, id) => {
		const value = e.target.value;
		await updateCanDeleteApi(value, id);

		showData();
	};
	//Change Can Delete End

	return {
		name,
		data,
		setRoleAccessId,
		isCreateAccessModal,
		setIsCreateAccessModal,
		menu,
		formikStore,
		errors,
		setErrors,
		isAlert,
		deleteData,
		changeCanDelete,
		changeCanInsert,
		changeCanUpdate,
	};
};
