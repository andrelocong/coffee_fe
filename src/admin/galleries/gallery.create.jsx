import React from "react";
import SuccessAlert from "../components/SuccessAlert";
import { TextField, SelectField } from "../components/formField";

const GalleryCreate = (props) => {
	const formik = props.formik;

	return (
		<div className="create-gallery">
			<SuccessAlert
				isAlert={props.isAlert}
				text="Gallery created successfully!"
			/>

			<div className={props.isCreateModal ? "modal active" : "modal"}>
				<form onSubmit={formik.handleSubmit}>
					<div className="flex-center">
						<div className="block bg-white width-400 mt-100 border-radius-10">
							<div className="width-full height-60 border-bottom-1 border-grey alig-item-center">
								<p className="ml-20 font-20">Input Image</p>
							</div>

							<div className="width-full border-bottom-1 border-grey">
								<SelectField
									name="category"
									placeholder="Choose category"
									containerClassName="width-310 mx-auto my-10"
									value={formik.values.category}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.category}
									touched={formik.touched.category}
									option={props.categories.map(
										(data, index) => {
											return (
												<option
													value={data.value}
													key={index}
												>
													{data.value}
												</option>
											);
										}
									)}
								/>

								<TextField
									type="file"
									name="image"
									containerClassName="width-310 mx-auto my-10"
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.image}
									touched={formik.touched.image}
									onChange={(e) => {
										formik.setFieldValue(
											"image",
											e.target.files[0]
										);
										props.setImagePreview(
											URL.createObjectURL(
												e.target.files[0]
											)
										);
										props.setIsShowImage(true);
										props.setImageValue(e.target.value);
									}}
									value={props.imageValue}
								/>

								<div
									className={
										props.isShowImage
											? "width-360 height-auto my-20 mx-auto justify-center visibility-visible"
											: "height-0 visibility-hidden"
									}
								>
									<img
										className="width-332 heigh-auto border-radius-10"
										src={props.imagePreview}
										alt="product"
									/>
								</div>
							</div>

							<div className="width-full height-60 alig-item-center color-white">
								<button
									className="bg-orange px-10 py-5 border-none border-radius-5 cursor-pointer color-white font-16 mx-20"
									type="submit"
								>
									Save
								</button>
								<button
									className="bg-grey px-10 py-5 border-none border-radius-5 cursor-pointer color-white font-16"
									type="button"
									onClick={() => {
										props.setIsCreateModal(false);
										setTimeout(() => {
											formik.resetForm();
											props.setImageValue("");
										}, 200);
										props.setIsShowImage(false);
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

export default GalleryCreate;
