import React from "react";
import SuccessAlert from "../components/SuccessAlert";
import { TextField } from "../components/formField";

const CategoryCreate = (props) => {
	const formik = props.formik;

	return (
		<div className="create-category">
			<SuccessAlert
				isAlert={props.isAlert}
				text="Category was created!"
			/>
			<div className={props.isCreateModal ? "modal active" : "modal"}>
				<div className="flex-center">
					<div className="block width-338 height-auto bg-white border-radius-10 mt-100">
						<div className="border-bottom-1 border-grey">
							<p className="ml-20 font-20 my-20">
								Create Category
							</p>
						</div>

						<form onSubmit={formik.handleSubmit}>
							<TextField
								name="name"
								type="text"
								placeholder="Input category name"
								containerClassName="width-268 mx-auto my-20"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.name}
								errorMessage={formik.errors.name}
								touched={formik.touched.name}
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
										props.setIsCreateModal(false);
										setTimeout(() => {
											formik.resetForm();
										}, 200);
									}}
									type="button"
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

export default CategoryCreate;
