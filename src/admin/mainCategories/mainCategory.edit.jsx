import React from "react";
import SuccessAlert from "../components/SuccessAlert";
import { TextField } from "../components/formField";

const MainCategoryEdit = (props) => {
	const formik = props.formik;

	return (
		<div className="update-main-category">
			<SuccessAlert
				isAlert={props.isAlert}
				text="Main category was updated!"
			/>

			<div className={props.isEditModal ? "modal active" : "modal"}>
				<div className="flex-center">
					<div className="block width-338 height-auto bg-white border-radius-10 mt-100">
						<div className="border-bottom-1 border-grey">
							<p className="ml-20 font-20 my-20">
								Edit Main Category
							</p>
						</div>
						<form onSubmit={formik.handleSubmit}>
							<TextField
								name="name"
								type="text"
								value={formik.values.name}
								placeholder="Input main-category name"
								containerClassName="width-268 mx-auto py-20"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
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
										props.setIsEditModal(false);
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

export default MainCategoryEdit;
