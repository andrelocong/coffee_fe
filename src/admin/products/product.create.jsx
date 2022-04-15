import React from "react";
import SuccessAlert from "../components/SuccessAlert";
import { TextField, SelectField } from "../components/formField";
import { useCreate } from "./product.hook";

const ProductCreate = (props) => {
	const setIsCreateModal = props.setIsCreateModal;
	const showData = props.showData;

	const { formik, isAlert, categories } = useCreate(
		setIsCreateModal,
		showData
	);

	return (
		<div className="create-product">
			<SuccessAlert
				isAlert={isAlert}
				text="Product created successfully!"
			/>

			<div className={props.isCreateModal ? "modal active" : "modal"}>
				<form onSubmit={formik.handleSubmit}>
					<div className="flex-center">
						<div className="block width-350 height-auto border-radius-10 bg-white mt-100">
							<div className="width-full height-60 border-bottom-1 border-grey alig-item-center">
								<p className="ml-20 font-20">Input Product</p>
							</div>

							<div className="width-full border-bottom-1 border-grey">
								<TextField
									name="name"
									type="text"
									placeholder="Input sub-category name"
									containerClassName="width-268 mx-auto my-10"
									onChange={formik.handleChange}
									value={formik.values.name}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.name}
									touched={formik.touched.name}
								/>

								<SelectField
									name="category"
									placeholder="Choose category"
									containerClassName="width-268 mx-auto my-10"
									value={formik.values.category}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.category}
									touched={formik.touched.category}
									option={categories.map((data, index) => {
										return (
											<option
												value={data.value}
												key={index}
											>
												{data.value}
											</option>
										);
									})}
								/>
							</div>

							<div className="width-350 height-60 alig-item-center">
								<button
									className="bg-orange px-10 py-5 border-none border-radius-5 cursor-pointer font-16 mx-20 color-white"
									type="submit"
								>
									Save
								</button>
								<button
									className="bg-grey px-10 py-5 border-none border-radius-5 cursor-pointer font-16 color-white"
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
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ProductCreate;
