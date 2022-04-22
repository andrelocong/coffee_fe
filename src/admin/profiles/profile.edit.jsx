import React from "react";
import { TextField, SelectField } from "../components/formField";
import SuccessAlert from "../components/SuccessAlert";

const ProfileEdit = (props) => {
	const formik = props.formik;

	return (
		<div className="edit-data-profile">
			<SuccessAlert isAlert={props.isAlert} text="Bio was updated!" />

			<div className={props.isEditModal ? "modal active" : "modal"}>
				<form onSubmit={formik.handleSubmit}>
					<div
						className="flex-center"
						onClick={() => props.setIsEditModal(false)}
					>
						<div
							className="block width-350 heigth-auto bg-white border-radius-10 mt-100"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="height-60 border-bottom-1 border-grey alig-item-center">
								<p className="ml-20 font-20">
									Edit Profile Bio
								</p>
							</div>

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
										name="email"
										type="text"
										placeholder="email, ex: abcd@email.co"
										containerClassName="width-310 pb-10"
										value={formik.values.email || ""}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										errorMessage={formik.errors.email}
										touched={formik.touched.email}
									/>
									<TextField
										name="phone"
										type="text"
										placeholder="phone, ex: +62892381xxx"
										containerClassName="width-310 pb-10"
										value={formik.values.phone || ""}
										onChange={(e) => {
											props.handleNumeric(e);
										}}
										onBlur={formik.handleBlur}
										errorMessage={formik.errors.phone}
										touched={formik.touched.phone}
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
										option={props.showRoles.map(
											(role, index) => {
												return (
													<option
														value={role.role_id}
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
										props.setIsEditModal(false);
										setTimeout(() => {
											formik.resetForm();
										}, 200);
									}}
								>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ProfileEdit;
