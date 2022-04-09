import axios from "axios";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validationName, validationMenu } from "./role.validation";

export const useFetchRole = (id) => {
	const [data, setData] = useState([]);

	const showData = async () => {
		const category = await axios.get("http://localhost:5000/role");

		setData(category.data.data);
	};

	useEffect(() => {
		showData();
	}, []);

	const deleteData = async () => {
		await axios.delete(`http://localhost:5000/role/${id}`);

		showData();
	};

	return { data, showData, deleteData };
};

export const useCreateRole = (setIsCreateModal, showData) => {
	const [isAlert, setIsAlert] = useState(false);

	const storeData = async (values) => {
		await axios.post("http://localhost:5000/role", {
			name: values.name,
		});

		setIsCreateModal(false);
		setTimeout(() => {
			formik.resetForm();
			setIsAlert(true);
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
		showData();
	};

	const formik = useFormik({
		initialValues: {
			name: "",
		},
		validationSchema: validationName,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	return { formik, isAlert };
};

export const useFetchRoleAccess = (id, roleAccessId) => {
	const [name, setName] = useState("");
	const [data, setData] = useState([]);

	const showName = async () => {
		const role = await axios.get(`http://localhost:5000/role/${id}`);
		setName(role.data.data.name);
	};

	const showData = async () => {
		const roleAccess = await axios.get(
			`http://localhost:5000/role-access/${id}`
		);
		setData(roleAccess.data.data);
	};

	useEffect(() => {
		showName();
		showData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const deleteData = async () => {
		await axios.delete(`http://localhost:5000/role-access/${roleAccessId}`);

		showData();
	};

	return { name, data, showData, deleteData };
};

export const useCreateRoleAccess = (
	setIsCreateAccessModal,
	showData,
	roleId
) => {
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

	const storeData = async (values) => {
		try {
			await axios.post("http://localhost:5000/role-access", {
				menu: values.menu,
				roleId: roleId,
			});

			setIsCreateAccessModal(false);
			setTimeout(() => {
				formik.resetForm();
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

	const formik = useFormik({
		initialValues: {
			menu: "",
		},
		validationSchema: validationMenu,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	return { menu, formik, errors, setErrors, isAlert };
};

export const useChange = (showData) => {
	const changeCanInsert = async (e, id) => {
		const value = e.target.value;
		await axios.patch(`http://localhost:5000/role-access/${id}`, {
			canInsert: value,
		});

		showData();
	};

	const changeCanUpdate = async (e, id) => {
		const value = e.target.value;
		await axios.patch(`http://localhost:5000/role-access/${id}`, {
			canUpdate: value,
		});

		showData();
	};

	const changeCanDelete = async (e, id) => {
		const value = e.target.value;
		await axios.patch(`http://localhost:5000/role-access/${id}`, {
			canDelete: value,
		});

		showData();
	};

	return { changeCanInsert, changeCanUpdate, changeCanDelete };
};
