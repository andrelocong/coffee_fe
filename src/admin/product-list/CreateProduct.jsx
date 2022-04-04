import React, { useState } from "react";
import axios from "axios";
import SuccessAlert from "../components/SuccessAlert";
import validate from "./validateInfo";

const CreateProduct = (props) => {
	const [isAlert, setIsAlert] = useState(false);
	const [values, setValues] = useState({
		product: "",
		category: "",
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const storeData = async (e) => {
		e.preventDefault();
		setErrors(validate(values));

		await axios.post("http://localhost:5000/product", {
			name: values.product,
			category: values.category,
		});

		props.setIsModal(false);
		setIsAlert(true);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
		props.showData();
		setValues({
			product: "",
			category: "",
		});
	};

	const handleCancel = () => {
		props.setIsModal(false);
		setValues({
			product: "",
			category: "",
		});
	};

	return (
		<div className="create-product">
			<SuccessAlert
				isAlert={isAlert}
				text="Product created successfully!"
			/>

			<div className={props.isModal ? "modal active" : "modal"}>
				<form onSubmit={storeData}>
					<div className="flex-center">
						<div className="block">
							<div className="width-350 height-60 bg-white mt-100 border-bottom-1 border-grey alig-item-center">
								<p className="ml-20 font-20">Input Product</p>
							</div>

							<div className="width-350 bg-white border-bottom-1 border-grey">
								<div className="width-275 alig-item-center ml-20 pt-20 block">
									<input
										className="width-full py-10 font-20 px-15"
										type="text"
										name="product"
										placeholder="Input product"
										value={values.product}
										onChange={handleChange}
									/>
									{errors.product && (
										<p className="color-red m-0">
											{errors.product}
										</p>
									)}
								</div>

								<div className="width-310 alig-item-center ml-20 py-20 block">
									<select
										className="width-full py-10 font-20 px-15 appearance-none cursor-pointer"
										name="category"
										value={values.category}
										onChange={handleChange}
									>
										<option hidden>Choose category</option>
										<option value="coffee">Coffee</option>
										<option value="cocoa">Cocoa</option>
										<option value="vanilla">Vanilla</option>
									</select>
									{errors.category && (
										<p className="color-red m-0">
											{errors.category}
										</p>
									)}
								</div>
							</div>

							<div className="width-350 height-60 alig-item-center bg-white">
								<button className="bg-orange px-10 py-5 border-none cursor-pointer font-16 mx-20 color-white">
									Save
								</button>
								<button
									className="bg-grey px-10 py-5 border-none cursor-pointer font-16 color-white"
									onClick={handleCancel}
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

export default CreateProduct;
