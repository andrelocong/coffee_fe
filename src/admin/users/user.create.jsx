import React from "react";
import SuccessAlert from "../components/SuccessAlert";
import { TextField, SelectField } from "../components/formField";
import { useCreate } from "./user.hook";

const UserCreate = (props) => {
	const setIsCreateModal = props.setIsCreateModal;
	const showData = props.showData;

	const { showRoles, formik, errors, isAlert } = useCreate(
		setIsCreateModal,
		showData
	);

	return (
		<div className="create-user">
			<SuccessAlert isAlert={isAlert} text="User was created!" />

			<div className={props.isCreateModal ? "modal active" : "modal"}>
				<div className="flex-center">
					<div className="block width-350 heigth-auto bg-white border-radius-10 mt-100">
						<div className="height-60 border-bottom-1 border-grey alig-item-center mb-10">
							<p className="ml-20 font-20">Create User</p>
						</div>

						<form onSubmit={formik.handleSubmit}>
							<p className="color-red text-center">{errors}</p>
							<div className="border-bottom-1 border-grey justify-center">
								<div className="block">
									<TextField
										name="first_name"
										type="text"
										placeholder="First name"
										containerClassName="width-310 pb-10"
										value={formik.values.first_name}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										errorMessage={formik.errors.first_name}
										touched={formik.touched.first_name}
									/>
									<TextField
										name="last_name"
										type="text"
										placeholder="Last name"
										containerClassName="width-310 pb-10"
										value={formik.values.last_name}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										errorMessage={formik.errors.last_name}
										touched={formik.touched.last_name}
									/>
									<TextField
										name="username"
										type="text"
										placeholder="Username"
										containerClassName="width-310 pb-10"
										value={formik.values.username}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										errorMessage={formik.errors.username}
										touched={formik.touched.username}
									/>
									<TextField
										name="password"
										type="password"
										placeholder="Password"
										containerClassName="width-310 pb-10"
										value={formik.values.password}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										errorMessage={formik.errors.password}
										touched={formik.touched.password}
									/>
									<SelectField
										name="role"
										placeholder="Choose role"
										containerClassName="width-310 pb-10"
										value={formik.values.role}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										errorMessage={formik.errors.role}
										touched={formik.touched.role}
										option={showRoles.map((role, index) => {
											return (
												<option
													value={role.role_id}
													key={index}
												>
													{role.name}
												</option>
											);
										})}
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
										props.setIsCreateModal(false);
										setTimeout(() => {
											formik.resetForm();
										}, 200);
									}}
								>
									Cancel
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserCreate;
