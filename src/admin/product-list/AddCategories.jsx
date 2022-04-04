import axios from "axios";
import React, { useEffect, useState } from "react";
import SuccessAlert from "../components/SuccessAlert";
import DangerAlert from "../components/DangerAlert";

const AddCategories = (props) => {
	const [category, setCategory] = useState([]);
	const [valueCategories, setValueCategories] = useState("");
	const [detail, setDetail] = useState([]);
	const [detailId, setDetailId] = useState("");
	const [isAlert, setIsAlert] = useState(false);
	const [isBgAlert, setIsBgAlert] = useState(false);
	const [isDangerAlert, setIsDangerAlert] = useState(false);

	const showCategory = async () => {
		const category = await axios.get("http://localhost:5000/category");

		setCategory(category.data.data);
	};

	const showDetail = async () => {
		const detail = await axios.get(
			`http://localhost:5000/product-category/${props.id}`
		);

		setDetail(detail.data.data);
	};

	useEffect(() => {
		showCategory();
		showDetail();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const storeData = async (e) => {
		e.preventDefault();
		await axios.post("http://localhost:5000/product-category", {
			productId: props.id,
			categoryId: valueCategories,
		});

		setValueCategories("");
		setTimeout(() => {
			setIsAlert(true);
			showDetail();
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const deleteData = async () => {
		await axios.delete(
			`http://localhost:5000/product-category/${detailId}`
		);

		showDetail();
	};

	const handleClose = () => {
		props.setIsCategoriesModal(false);
		setTimeout(() => {
			setValueCategories("");
			props.showCategories();
		}, 200);
	};
	return (
		<div className="add-category">
			<SuccessAlert
				isAlert={isAlert}
				text="Detail Product was created!"
			/>

			<DangerAlert
				isBgAlert={isBgAlert}
				isDangerAlert={isDangerAlert}
				setIsBgAlert={setIsBgAlert}
				setIsDangerAlert={setIsDangerAlert}
				deleteData={deleteData}
			/>

			<div className={props.isCategoriesModal ? "modal active" : "modal"}>
				<div className="flex-center">
					<div className="block width-426 height-auto bg-white border-radius-10 mt-100">
						<div className="border-bottom-1 border-grey">
							<p className="ml-20 font-20 my-20">Add Category</p>
						</div>

						<form onSubmit={storeData}>
							<div className="height-auto justify-center py-20 border-bottom-1 border-grey">
								<div className="block">
									<select
										className="width-388 py-10 px-15 font-18 cursor-pointer"
										value={valueCategories}
										onChange={(e) =>
											setValueCategories(e.target.value)
										}
									>
										<option value="" hidden>
											Choose category
										</option>
										{category.map((category, index) => {
											return (
												<option
													key={index}
													value={category.category_id}
												>
													{category.name}
												</option>
											);
										})}
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
													{data.category.name}
												</td>
												<td className="py-15">
													<button
														className="bg-red px-10 py-5 border-none border-radius-10 color-white font-16 cursor-pointer"
														onClick={() => {
															setIsBgAlert(true);
															setIsDangerAlert(
																true
															);
															setDetailId(
																data.product_category_id
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
								className="bg-grey px-10 py-5 border-none border-radius-5 cursor-pointer font-16 ml-20 color-white"
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

export default AddCategories;
