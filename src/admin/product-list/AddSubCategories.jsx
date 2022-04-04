import axios from "axios";
import React, { useEffect, useState } from "react";
import SuccessAlert from "../components/SuccessAlert";
import DangerAlert from "../components/DangerAlert";

const AddSubCategories = (props) => {
	const [subCategories, setSubCategories] = useState([]);
	const [valueSubCategory, setValueSubCategory] = useState("");
	const [isAlert, setIsAlert] = useState(false);
	const [detail, setDetail] = useState([]);
	const [detailId, setDetailId] = useState("");
	const [isBgAlert, setIsBgAlert] = useState(false);
	const [isDangerAlert, setIsDangerAlert] = useState(false);

	const showDataSubCategories = async () => {
		const category = await axios.get("http://localhost:5000/sub-category");

		setSubCategories(category.data.data);
	};

	const showDetail = async () => {
		const detail = await axios.get(
			`http://localhost:5000/product-sub-category/${props.id}`
		);

		setDetail(detail.data.data);
	};

	useEffect(() => {
		showDataSubCategories();
		showDetail();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const storeData = async (e) => {
		e.preventDefault();
		await axios.post("http://localhost:5000/product-sub-category", {
			productId: props.id,
			subCategoryId: valueSubCategory,
		});

		setTimeout(() => {
			setValueSubCategory("");
			setIsAlert(true);
			showDetail();
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const deleteData = async () => {
		await axios.delete(
			`http://localhost:5000/product-sub-category/${detailId}`
		);

		showDetail();
	};

	const handleClose = () => {
		props.setIsSubCategoriesModal(false);
		setTimeout(() => {
			setValueSubCategory("");
			props.showSubCategories();
		});
	};

	return (
		<div className="add-sub-categories">
			<SuccessAlert
				isAlert={isAlert}
				text="Detail product was created!"
			/>

			<DangerAlert
				isBgAlert={isBgAlert}
				isDangerAlert={isDangerAlert}
				setIsBgAlert={setIsBgAlert}
				setIsDangerAlert={setIsDangerAlert}
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

						<form onSubmit={storeData}>
							<div className="height-auto justify-center py-20 border-bottom-1 border-grey">
								<div className="block">
									<select
										className="width-388 py-10 px-15 font-18 cursor-pointer"
										value={valueSubCategory}
										onChange={(e) =>
											setValueSubCategory(e.target.value)
										}
									>
										<option value="" hidden>
											Choose sub category
										</option>
										{subCategories.map(
											(category, index) => {
												return (
													<option
														key={index}
														value={
															category.sub_category_id
														}
													>
														{category.name}
													</option>
												);
											}
										)}
									</select>
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
												<td className="py-15">
													{data.sub_category.name}
												</td>
												<td className="py-15">
													<button
														className="bg-red px-10 py-5 border-none border-radius-10 color-white font-16 cursor-pointer"
														onClick={() => {
															setDetailId(
																data.product_sub_category_id
															);
															setIsBgAlert(true);
															setIsDangerAlert(
																true
															);
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
								onClick={() => handleClose()}
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
