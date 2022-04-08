import React, { useState } from "react";
import axios from "axios";
import SuccessAlert from "../components/SuccessAlert";
import { useFormik } from "formik";
import { validation } from "./quantity.validation";
import { TextField } from "../components/formField";

const QuantityEdit = (props) => {
	const [isAlert, setIsAlert] = useState(false);

	const UpdateQuantity = async (values) => {
		await axios.patch(
			`http://localhost:5000/quantity/${props.quantityId}`,
			{
				quantity: values.quantity,
			}
		);

		props.setIsUpdateModal(false);
		setTimeout(() => {
			setIsAlert(true);
			props.showData();
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const formik = useFormik({
		initialValues: {
			quantity: props.quantity,
		},
		enableReinitialize: true,
		validationSchema: validation,
		onSubmit: (values) => {
			UpdateQuantity(values);
		},
	});

	return (
		<div className="update-quantity">
			<SuccessAlert isAlert={isAlert} text="Quantity was updated!" />

			<div className={props.isUpdateModal ? "modal active" : "modal"}>
				<form onSubmit={formik.handleSubmit}>
					<div className="flex-center">
						<div className="block width-338 height-auto bg-white border-radius-10 mt-100">
							<div className="border-bottom-1 border-grey">
								<p className="ml-20 font-20 my-20">
									Update Quantity
								</p>
							</div>

							<TextField
								name="quantity"
								type="text"
								placeholder="Input quantity"
								containerClassName="width-268 mx-auto my-20"
								onChange={formik.handleChange}
								value={formik.values.quantity}
								onBlur={formik.handleBlur}
								errorMessage={formik.errors.quantity}
								touched={formik.touched.quantity}
							/>

							<div className="flex py-20">
								<button
									className="bg-orange px-10 py-5 border-none border-radius-5 cursor-pointer font-16 ml-20 color-white"
									type="submit"
								>
									Save
								</button>
								<button
									className="bg-grey px-10 py-5 border-none border-radius-5 cursor-pointer font-16 ml-20 color-white"
									onClick={() => {
										props.setIsUpdateModal(false);
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

export default QuantityEdit;
