import React from "react";
import { TextField } from "../components/formField";
import SuccessAlert from "../components/SuccessAlert";

const ProfileChangePassword = (props) => {
	const formik = props.formik;

	return (
		<div className="change-password">
			<SuccessAlert
				isAlert={props.isAlert}
				text="Password was changed!"
			/>

			<div
				className={
					props.isChangePasswordModal ? "modal active" : "modal"
				}
			>
				<div className="justify-center">
					<div className="block width-294 height-auto bg-white border-radius-10 mt-40">
						<div className="width-full height-60 alig-item-center border-bottom-1 border-grey">
							<p className="ml-20 font-20">Change Password</p>
						</div>

						<form onSubmit={formik.handleSubmit}>
							<div className="width-full justify-center pb-10 pt-10 border-bottom-1  border-grey">
								<div className="block">
									<div className="color-red text-center mb-10">
										{props.error}
									</div>

									<TextField
										type="password"
										name="oldPassword"
										containerClassName="width-250 px-10 mx-auto my-10"
										placeholder="Input old password"
										onChange={(e) => {
											formik.setFieldValue(
												"oldPassword",
												e.target.value
											);
											props.setError("");
										}}
										onBlur={formik.handleBlur}
										value={formik.values.oldPassword}
										errorMessage={formik.errors.oldPassword}
										touched={formik.touched.oldPassword}
									/>

									<TextField
										type="password"
										name="newPassword"
										containerClassName="width-250 px-10 mx-auto my-10"
										placeholder="Input new password"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.newPassword}
										errorMessage={formik.errors.newPassword}
										touched={formik.touched.newPassword}
									/>

									<TextField
										type="password"
										name="confirmPassword"
										containerClassName="width-250 px-10 mx-auto my-10"
										placeholder="Input confrim password"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.confirmPassword}
										errorMessage={
											formik.errors.confirmPassword
										}
										touched={formik.touched.confirmPassword}
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
										props.setIsChangePasswordModal(false);
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

export default ProfileChangePassword;
