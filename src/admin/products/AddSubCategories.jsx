import React, { useState } from "react";
import SuccessAlert from "../components/SuccessAlert";
import DangerAlert from "../components/DangerAlert";
import { SelectField } from "../components/formField";
import { useAddSubCategories } from "./product.hook";

const AddSubCategories = (props) => {
	const [isDanger, setIsDanger] = useState({
		bgAlert: false,
		dangerAlert: false,
	});

	const {
		subCategories,
		detail,
		setDetailId,
		isAlert,
		formik,
		deleteData,
		errors,
		setErrors,
	} = useAddSubCategories(props.id);

	return (
		<div className="add-sub-categories">
			<SuccessAlert
				isAlert={isAlert}
				text="Detail product was created!"
			/>

			<DangerAlert
				isAlert={isDanger}
				setIsAlert={setIsDanger}
				deleteData={deleteData}
			/>

			<div
				className={
					props.isSubCategoriesModal ? "modal active" : "modal"
				}
			>
				<div className="flex-center">
					<div className="block width-426 height-auto bg-white border-radius-10 mt-100">
						<div className="border-bottom-1 border-grey">
							<p className="ml-20 font-20 my-20">
								Add Sub Category
							</p>
						</div>

						<form onSubmit={formik.handleSubmit}>
							<div className="height-auto justify-center py-20 border-bottom-1 border-grey">
								<div className="block">
									<div className="text-center color-red mt-20">
										{errors}
									</div>
									<SelectField
										name="category"
										placeholder="Choose category"
										containerClassName="width-388 mx-auto my-10"
										value={formik.values.category}
										onChange={formik.handleChange}
										onClick={() => setErrors("")}
										onBlur={formik.handleBlur}
										errorMessage={formik.errors.category}
										touched={formik.touched.category}
										option={subCategories.map(
											(data, index) => {
												return (
													<option
														value={
															data.sub_category_id
														}
														key={index}
													>
														{data.name}
													</option>
												);
											}
										)}
									/>
									<div>
										<button
											className="bg-orange py-5 px-15 border-none border-radius-5 cursor-pointer color-white font-16 mt-10"
											type="submit"
										>
											Add
										</button>
									</div>
								</div>
							</div>
						</form>

						<div className="flex-center py-20 border-bottom-1 border-grey">
							<table className="width-388 text-center border-collapse">
								<thead className="bg-orange color-white">
									<tr>
										<th className="border-radius-left-10 py-11">
											Name
										</th>
										<th className="border-radius-right-10 py-10">
											Action
										</th>
									</tr>
								</thead>
								<tbody>
									{detail.map((data, index) => {
										return (
											<tr
												className="border-bottom-1 border-grey"
												key={index}
											>
												<td className="py-15 text-capitalize">
													{data.sub_category.name}
												</td>
												<td className="py-15">
													<button
														className="bg-red px-10 py-5 border-none border-radius-10 color-white font-16 cursor-pointer"
														onClick={() => {
															setDetailId(
																data.product_sub_category_id
															);
															setIsDanger({
																bgAlert: true,
																dangerAlert: true,
															});
														}}
													>
														Delete
													</button>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>

						<div className="flex py-20">
							<button
								className="bg-grey px-10 py-5 border-radiues-5 border-none color-white font-16 cursor-pointer ml-20"
								onClick={() => {
									props.setIsSubCategoriesModal(false);
									setTimeout(() => {
										props.showSubCategories();
										formik.resetForm();
										setErrors("");
									}, 200);
								}}
								type="button"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddSubCategories;
