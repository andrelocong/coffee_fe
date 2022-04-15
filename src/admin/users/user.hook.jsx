import axios from "axios";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
	validationCreate,
	validationUpdateBio,
	validationUpdateImage,
} from "./user.validation";
import { useNavigate } from "react-router-dom";
import Photo from "../../img/—Pngtree—avatar icon profile icon member_5247852.png";

export const useFetch = (id) => {
	const [data, setData] = useState([]);

	const showData = async () => {
		const user = await axios.get("http://localhost:5000/user");

		setData(user.data.data);
	};

	useEffect(() => {
		showData();
	}, []);

	const deleteData = async () => {
		await axios.delete(`http://localhost:5000/user/${id}`);

		showData();
	};

	return { data, showData, deleteData };
};

export const useCreate = (setIsCreateModal, showData) => {
	const [isAlert, setIsAlert] = useState(false);
	const [showRoles, setShowRoles] = useState([]);
	const [errors, setErrors] = useState("");

	const showRole = async () => {
		const roles = await axios.get("http://localhost:5000/role");
		setShowRoles(roles.data.data);
	};

	useEffect(() => {
		showRole();
	}, []);

	const createData = async (values) => {
		try {
			await axios.post("http://localhost:5000/user", {
				firstName: values.first_name,
				lastName: values.last_name,
				username: values.username,
				password: values.password,
				role: values.role,
			});

			setIsCreateModal(false);
			setTimeout(() => {
				setIsAlert(true);
				showData();
				formik.resetForm();
			}, 200);
			setTimeout(() => {
				setIsAlert(false);
			}, 1500);
		} catch (error) {
			console.log(error.response);
			setErrors("Username already used!");
		}
	};

	const formik = useFormik({
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

	return { showRoles, formik, errors, isAlert };
};

export const useFetchDetail = (id) => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		phone: "",
		role: "",
	});
	const [image, setImage] = useState("");
	const navigate = useNavigate();

	const showDataById = async () => {
		let users = await axios.get(`http://localhost:5000/user/${id}`);
		const user = users.data.data;

		setData({
			firstName: user.first_name,
			lastName: user.last_name,
			username: user.username,
			email: user.email,
			phone: user.phone,
			role: user.role.name,
		});
		if (user.image === null) {
			setImage(Photo);
		} else {
			setImage(user.image);
		}
	};

	useEffect(() => {
		showDataById();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const deleteData = async () => {
		await axios.delete(`http://localhost:5000/user/${id}`);

		navigate("/admin/user-list");
	};

	return { data, image, deleteData, showDataById };
};

export const useUpdate = (setIsEditModal, showDataById, id) => {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		username: "",
		role: "",
	});
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [showRoles, setShowRoles] = useState([]);
	const [isAlert, setIsAlert] = useState(false);

	const showDataEdit = async () => {
		let users = await axios.get(`http://localhost:5000/user/${id}`);
		const user = users.data.data;

		setValues({
			firstName: user.first_name,
			lastName: user.last_name,
			username: user.username,
			role: user.role_id,
		});
		if (user.email === null) {
			setEmail("");
		} else {
			setEmail(user.email);
		}
		if (user.phone === null) {
			setPhone("");
		} else {
			setPhone(user.phone);
		}
	};

	useEffect(() => {
		showRole();
		showDataEdit();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const showRole = async () => {
		const roles = await axios.get("http://localhost:5000/role");
		setShowRoles(roles.data.data);
	};

	const updateData = async (values) => {
		await axios.patch(`http://localhost:5000/user/${id}`, {
			firstName: values.first_name,
			lastName: values.last_name,
			username: values.username,
			email: values.email,
			phone: values.phone,
			role: values.role,
		});

		setIsEditModal(false);
		showDataById();
		setTimeout(() => {
			formik.resetForm();
			setIsAlert(true);
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const formik = useFormik({
		initialValues: {
			first_name: values.firstName,
			last_name: values.lastName,
			username: values.username,
			email: email,
			phone: phone,
			role: values.role,
		},
		enableReinitialize: true,
		validationSchema: validationUpdateBio,
		onSubmit: (values) => {
			updateData(values);
		},
	});

	const handleNumeric = (e) => {
		const re = /^[0-9\b]+$/;
		if (e.target.value === "" || re.test(e.target.value)) {
			formik.setFieldValue("phone", e.target.value);
		}
	};

	return { showRoles, formik, handleNumeric, isAlert };
};

export const useUpdateImage = (
	setIsChangeImageModal,
	showDataById,
	id,
	setImagePreview,
	setImageValue,
	setIsShowImage
) => {
	const [isAlert, setIsAlert] = useState(false);

	const updateImage = async (values) => {
		const formData = new FormData();
		formData.append("image", values.image);

		await axios.patch(`http://localhost:5000/user/image/${id}`, formData);

		setIsChangeImageModal(false);
		showDataById();
		setTimeout(() => {
			setImageValue("");
			setIsShowImage(false);
			setImagePreview("");
			setIsAlert(true);
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const formik = useFormik({
		initialValues: {
			image: "",
		},
		validationSchema: validationUpdateImage,
		onSubmit: (values) => {
			updateImage(values);
		},
	});

	return { formik, isAlert };
};
