import axios from "axios";
import React, { useState, useEffect } from "react";
import SuccessAlert from "../components/SuccessAlert";
import { validate } from "./validate";
import { Formik, Form } from "formik";
import { TextField, SelectField } from "../components/InputField";

const CreateUser = (props) => {
	const [isAlert, setIsAlert] = useState(false);
	const [showRoles, setShowRoles] = useState([]);

	const showRole = async () => {
		const roles = await axios.get("http://localhost:5000/role");
		setShowRoles(roles.data.data);
	};

	useEffect(() => {
		showRole();
	}, []);

	const createData = async (values, resetForm) => {
		try {
			await axios.post("http://localhost:5000/user", {
				firstName: values.first_name,
				lastName: values.last_name,
				username: values.username,
				password: values.password,
				role: values.role,
			});

			props.setIsModal(false);
			setTimeout(() => {
				setIsAlert(true);
				props.showData();
			}, 200);
			setTimeout(() => {
				setIsAlert(false);
			}, 1500);
			resetForm();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="create-user">
			<SuccessAlert isAlert={isAlert} text="User was created!" />

			<div className={props.isModal ? "modal active" : "modal"}>
				<Formik
					initialValues={{
						first_name: "",
						last_name: "",
						username: "",
						password: "",
						role: "",
					}}
					validationSchema={validate}
					onSubmit={(values, { resetForm }) => {
						createData(values, resetForm);
					}}
				>
					{(formik) => (
						<div className="flex-center">
							<div className="block width-500 heigth-auto bg-white border-radius-10 mt-100">
								<div className="height-60 border-bottom-1 border-grey alig-item-center mb-10">
									<p className="ml-20 font-20">Create User</p>
								</div>

								<Form>
									<div className="border-bottom-1 border-grey justify-center">
										<div className="block">
											<TextField
												name="first_name"
												type="text"
												placeholder="First name"
												className="width-430 pb-10"
											/>
											<TextField
												name="last_name"
												type="text"
												placeholder="Last name"
												className="width-430 pb-10"
											/>
											<TextField
												name="username"
												type="text"
												placeholder="Username"
												className="width-430 pb-10"
											/>
											<TextField
												name="password"
												type="password"
												placeholder="Password"
												className="width-430 pb-10"
											/>
											<SelectField
												name="role"
												placeholder="Choose role"
												className="width-453 pb-10"
												option={showRoles.map(
													(role, index) => {
														return (
															<option
																value={
																	role.role_id
																}
																key={index}
															>
																{role.name}
															</option>
														);
													}
												)}
											/>
										</div>
									</div>

									<div className="height-60 alig-item-center">
										<button
											className="bg-orange px-10 py-5 border-none border-radius-5 cursor-pointer font-16 ml-20 color-white"
											type="submit"
										>
											Save
										</button>
										<button
											className="bg-grey px-10 py-5 border-none border-radius-5 cursor-pointer font-16 ml-20 color-white"
											type="button"
											onClick={() => {
												props.setIsModal(false);
												setTimeout(() => {
													formik.resetForm();
												}, 200);
											}}
										>
											Cancel
										</button>
									</div>
								</Form>
							</div>
						</div>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default CreateUser;
