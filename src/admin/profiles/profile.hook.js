import { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
	validationUpdateBio,
	validationUpdateImage,
	validationUpdatePassword,
} from "./profile.validation";
import Photo from "../../img/—Pngtree—avatar icon profile icon member_5247852.png";
import {
	findDataByIdApi,
	updateDataProfileApi,
	updateImageProfileApi,
	updatePasswordApi,
} from "../../api/profile.api";
import { findDataApi as findDataRoleApi } from "../../api/role.api";
import { clearAccessToken } from "../../stores/reducers/token.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const useProfile = () => {
	const token = useSelector((state) => state.token.accessToken);

	const decode = jwtDecode(token);

	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		phone: "",
		role: [],
	});

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const [image, setImage] = useState("");
	const [isEditModal, setIsEditModal] = useState(false);
	const [showRoles, setShowRoles] = useState([]);
	const [isAlert, setIsAlert] = useState(false);
	const [isChangeImageModal, setIsChangeImageModal] = useState(false);
	const [imageValue, setImageValue] = useState("");
	const [isShowImage, setIsShowImage] = useState(false);
	const [imagePreview, setImagePreview] = useState("");
	const [isChangePasswordModal, setIsChangePasswordModal] = useState(false);
	const [error, setError] = useState("");

	//Show Data By Username Start
	const showDataById = async () => {
		let profiles = await findDataByIdApi(decode.userId);
		const profile = profiles.data.data;

		setData({
			firstName: profile.first_name,
			lastName: profile.last_name,
			username: profile.username,
			email: profile.email,
			phone: profile.phone,
			role: profile.role,
		});
		if (profile.image === null) {
			setImage(Photo);
		} else {
			setImage(profile.image);
		}
	};
	//Show Data By Username End

	useEffect(() => {
		showRole();
		showDataById();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//Show Data Role Start
	const showRole = async () => {
		const roles = await findDataRoleApi();
		setShowRoles(roles.data.data);
	};
	//Show Data Role End

	//Update Data Start
	const updateData = async (values) => {
		await updateDataProfileApi(
			decode.userId,
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

		await updateImageProfileApi(decode.userId, formData);

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

	//Update Password Start
	const updatePassword = async (values) => {
		try {
			await updatePasswordApi(
				decode.userId,
				values.oldPassword,
				values.newPassword
			);
			setIsChangePasswordModal(false);
			setTimeout(() => {
				setIsAlert(true);
				formikUpdatePassword.resetForm();
			}, 200);

			setTimeout(() => {
				dispatch(clearAccessToken());
				navigate("/login");
			}, 1500);
		} catch (error) {
			console.log(error.response);
			setError(error.response.data.message);
		}
	};

	const formikUpdatePassword = useFormik({
		initialValues: {
			oldPassword: "",
			newPassword: "",
			confirmPassword: "",
		},
		validationSchema: validationUpdatePassword,
		onSubmit: (values) => {
			updatePassword(values);
		},
	});
	//Update Password End

	return {
		data,
		image,
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
		setIsChangePasswordModal,
		isChangePasswordModal,
		formikUpdatePassword,
		setError,
		error,
	};
};
