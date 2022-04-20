import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validationUpdateBio, validationUpdateImage } from "./user.validation";
import { useNavigate } from "react-router-dom";
import Photo from "../../img/—Pngtree—avatar icon profile icon member_5247852.png";
import {
	deleteDataApi,
	findDataByIdUserApi,
	updateDataApi,
	updateImageApi,
} from "../../api/user.api";
import { findDataApi as findDataRoleApi } from "../../api/role.api";

export const useUserDetail = (id) => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		phone: "",
		role: [],
	});

	const [image, setImage] = useState("");
	const navigate = useNavigate();
	const [isEditModal, setIsEditModal] = useState(false);
	const [showRoles, setShowRoles] = useState([]);
	const [isAlert, setIsAlert] = useState(false);
	const [isChangeImageModal, setIsChangeImageModal] = useState(false);
	const [imageValue, setImageValue] = useState("");
	const [isShowImage, setIsShowImage] = useState(false);
	const [imagePreview, setImagePreview] = useState("");

	//Show Data By Id Start
	const showDataById = async () => {
		let users = await findDataByIdUserApi(id);
		const user = users.data.data;

		setData({
			firstName: user.first_name,
			lastName: user.last_name,
			username: user.username,
			email: user.email,
			phone: user.phone,
			role: user.role,
		});
		if (user.image === null) {
			setImage(Photo);
		} else {
			setImage(user.image);
		}
	};
	//Show Data By Id End

	useEffect(() => {
		showRole();
		showDataById();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//Delete Data Start
	const deleteData = async () => {
		await deleteDataApi(id);

		navigate("/admin/user-list");
	};
	//Delete Data End

	//Show Data Role Start
	const showRole = async () => {
		const roles = await findDataRoleApi();
		setShowRoles(roles.data.data);
	};
	//Show Data Role End

	//Update Data Start
	const updateData = async (values) => {
		await updateDataApi(
			id,
			values.first_name,
			values.last_name,
			values.username,
			values.email,
			values.phone,
			values.role
		);

		setIsEditModal(false);
		showDataById();
		setTimeout(() => {
			formikUpdate.resetForm();
			setIsAlert(true);
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const formikUpdate = useFormik({
		initialValues: {
			first_name: data.firstName,
			last_name: data.lastName,
			username: data.username,
			email: data.email,
			phone: data.phone,
			role: data.role.role_id,
		},
		enableReinitialize: true,
		validationSchema: validationUpdateBio,
		onSubmit: (values) => {
			updateData(values);
		},
	});
	//Update Data End

	//Handle Input Numeric Start
	const handleNumeric = (e) => {
		const re = /^[0-9\b]+$/;
		if (e.target.value === "" || re.test(e.target.value)) {
			formikUpdate.setFieldValue("phone", e.target.value);
		}
	};
	//Handle Input Numeric End

	//Handle Update Image Start
	const updateImage = async (values) => {
		const formData = new FormData();
		formData.append("image", values.image);

		await updateImageApi(id, formData);

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

	const formikUpdateImage = useFormik({
		initialValues: {
			image: "",
		},
		validationSchema: validationUpdateImage,
		onSubmit: (values) => {
			updateImage(values);
		},
	});
	//Handle Update Image End

	return {
		data,
		image,
		deleteData,
		formikUpdate,
		showRoles,
		setIsEditModal,
		isEditModal,
		isAlert,
		handleNumeric,
		formikUpdateImage,
		setIsChangeImageModal,
		isChangeImageModal,
		setImageValue,
		imageValue,
		setImagePreview,
		imagePreview,
		setIsShowImage,
		isShowImage,
	};
};
