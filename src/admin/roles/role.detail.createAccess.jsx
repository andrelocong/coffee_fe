import React from "react";
import SuccessAlert from "../components/SuccessAlert";
import { SelectField } from "../components/formField";

const RoleCreateAccess = (props) => {
	const formik = props.formik;

	return (
		<div className="create-role-access">
			<SuccessAlert
				isAlert={props.isAlert}
				text="Main category was created!"
			/>

			<div
				className={props.isCreateAccessModal ? "modal active" : "modal"}
			>
				<form onSubmit={formik.handleSubmit}>
					<div className="flex-center">
						<div className="block width-338 height-auto bg-white border-radius-10 mt-100">
							<div className="border-bottom-1 border-grey">
								<p className="ml-20 font-20 my-20">
									Create Role Access
								</p>
							</div>
							<div className="text-center color-red mt-20">
								{props.errors}
							</div>
							<SelectField
								name="menu"
								placeholder="Choose menu"
								containerClassName="width-268 mx-auto my-20"
								value={formik.values.menu}
								onChange={formik.handleChange}
								onClick={() => props.setErrors("")}
								onBlur={formik.handleBlur}
								errorMessage={formik.errors.menu}
								touched={formik.touched.menu}
								option={props.menu.map((data, index) => {
									return (
										<option
											value={data.value}
											key={index}
											className="text-capitalize"
										>
											{data.value}
										</option>
									);
								})}
							/>

							<div className="flex py-20 border-top-1 border-grey">
								<button
									className="bg-orange px-10 py-5 border-none border-radius-5 cursor-pointer font-16 ml-20 color-white"
									type="submit"
								>
									Save
								</button>
								<button
									className="bg-grey px-10 py-5 border-none border-radius-5 cursor-pointer font-16 ml-20 color-white"
									onClick={() => {
										props.setIsCreateAccessModal(false);
										setTimeout(() => {
											formik.resetForm();
											props.setErrors("");
										}, 200);
									}}
									type="button"
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

export default RoleCreateAccess;
