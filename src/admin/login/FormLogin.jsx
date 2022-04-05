import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "../components/InputField";
import { validate } from "./validate";
import axios from "axios";

const FormLogin = () => {
	const storeData = async (values) => {
		const data = {
			username: values.username,
			password: values.password,
		};

		await axios.post("http://localhost:5000/logins", data);
	};

	return (
		<Formik
			initialValues={{
				username: "",
				password: "",
			}}
			validationSchema={validate}
			onSubmit={(values, { resetForm }) => {
				storeData(values);
				// resetForm(values);
			}}
		>
			{(formik) => (
				<div className="width-full">
					<div className="px-20">
						<div className="block">
							<Form>
								<TextField
									name="username"
									type="text"
									placeholder="Username"
									className="width-full pb-10"
								/>
								<TextField
									name="password"
									type="password"
									placeholder="Password"
									className="width-full pb-10"
								/>
								<div className="width-full justify-center mb-20">
									<button
										className="width-300 bg-orange border-none border-radius-20 font-16 color-white height-40 cursor-pointer outline-none"
										type="submit"
									>
										Login
									</button>
								</div>
							</Form>
						</div>
					</div>
				</div>
			)}
		</Formik>
	);
};

export default FormLogin;
