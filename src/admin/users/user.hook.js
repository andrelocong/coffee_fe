import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validationCreate } from "./user.validation";
import { deleteDataApi, findDataApi, storeDataApi } from "../../api/user.api";
import { findDataApi as findDataRoleApi } from "../../api/role.api";

export const useUser = () => {
	const [data, setData] = useState([]);
	const [id, setId] = useState("");
	const [isCreateModal, setIsCreateModal] = useState(false);
	const [isAlert, setIsAlert] = useState(false);
	const [showRoles, setShowRoles] = useState([]);
	const [errors, setErrors] = useState("");

	//Show Data Start
	const showData = async () => {
		const user = await findDataApi();

		setData(user.data.data);
	};
	//Show Data End

	//Delete Data Start
	const deleteData = async () => {
		await deleteDataApi(id);

		showData();
	};
	//Delete Data End

	//Show Role Start
	const showRole = async () => {
		const roles = await findDataRoleApi();
		setShowRoles(roles.data.data);
	};
	//Show Role End

	useEffect(() => {
		showData();
		showRole();
	}, []);

	//Store Data Start
	const createData = async (values) => {
		try {
			await storeDataApi(
				values.first_name,
				values.last_name,
				values.username,
				values.password,
				values.role
			);

			setIsCreateModal(false);
			setTimeout(() => {
				setIsAlert(true);
				showData();
				formikStore.resetForm();
			}, 200);
			setTimeout(() => {
				setIsAlert(false);
			}, 1500);
		} catch (error) {
			console.log(error.response);
			setErrors("Username already used!");
		}
	};

	const formikStore = useFormik({
		initialValues: {
			first_name: "",
			last_name: "",
			username: "",
			password: "",
			role: "",
		},
		validationSchema: validationCreate,
		onSubmit: (values) => {
			createData(values);
		},
	});
	//Store Data End

	return {
		data,
		setId,
		deleteData,
		showRoles,
		formikStore,
		errors,
		isAlert,
		isCreateModal,
		setIsCreateModal,
	};
};
