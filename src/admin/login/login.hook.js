import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { validation } from "./login.validation";
import { login } from "../../api/login.api";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../../stores/reducers/token.reducer";

export const useLogin = () => {
	const [error, setError] = useState("");

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const storeData = async (values) => {
		try {
			const res = await login(values.username, values.password);
			dispatch(setAccessToken(res.data.data.accessToken));
			setError("");
			navigate("/admin/order");
		} catch (error) {
			setError(error.response.data.message);
		}
	};

	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		validationSchema: validation,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	return { formik, error };
};
