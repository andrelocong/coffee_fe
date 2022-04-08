import React, { useState } from "react";
import axios from "axios";
import SuccessAlert from "../components/SuccessAlert";

const ProductEdit = (props) => {
	const [isAlert, setIsAlert] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		props.setValues({
			...props.values,
			[name]: value,
		});
	};

	const updateData = async (e) => {
		e.preventDefault();

		await axios.patch(`http://localhost:5000/product/${props.values.id}`, {
			name: props.values.product,
			category: props.values.category,
		});

		props.setIsEditModal(false);
		props.showData();
		setIsAlert(true);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	return (
		<div className="edit-product">
			<SuccessAlert
				isAlert={isAlert}
				text="Product changed successfully!"
			/>
			<div className={props.isEditModal ? "modal active" : "modal"}>
				<form onSubmit={updateData}>
					<div className="flex-center">
						<div className="block">
							<div className="width-350 height-60 bg-white mt-100 border-bottom-1 border-grey alig-item-center border-radius-top-10">
								<p className="ml-20 font-20">Edit Product</p>
							</div>

							<div className="width-350 bg-white border-bottom-1 border-grey">
								<div className="width-275 alig-item-center ml-20 pt-20 block">
									<input
										className="width-full py-10 font-20 px-15"
										type="text"
										name="product"
										placeholder="Input product"
										value={props.values.product}
										onChange={handleChange}
									/>
								</div>

								<div className="width-310 alig-item-center ml-20 py-20 block">
									<select
										className="width-full py-10 font-20 px-15 appearance-none cursor-pointer"
										name="category"
										value={props.values.category}
										onChange={handleChange}
									>
										<option hidden>Choose category</option>
										<option value="coffee">Coffee</option>
										<option value="cocoa">Cocoa</option>
										<option value="vanilla">Vanilla</option>
									</select>
								</div>
							</div>

							<div className="width-350 height-60 alig-item-center bg-white border-radius-bottom-10">
								<button
									className="bg-orange px-10 py-5 border-none cursor-pointer font-16 mx-20 color-white border-radius-5"
									type="submit"
								>
									Save
								</button>
								<button
									className="bg-grey px-10 py-5 border-none cursor-pointer font-16 color-white border-radius-5"
									onClick={() => {
										props.setIsEditModal(false);
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

export default ProductEdit;
