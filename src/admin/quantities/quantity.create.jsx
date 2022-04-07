import React, { useState } from "react";
import axios from "axios";
import SuccessAlert from "../components/SuccessAlert";
import { useFormik } from "formik";
import { validation } from "./quantity.validation";
import { TextField } from "../components/InputField";

const QuantityCreate = (props) => {
	const [isAlert, setIsAlert] = useState(false);

	const storeData = async (values) => {
		await axios.post("http://localhost:5000/quantity", {
			quantity: values.quantity,
		});

		props.setIsModal(false);
		setTimeout(() => {
			formik.resetForm();
			setIsAlert(true);
			props.showData();
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const formik = useFormik({
		initialValues: {
			quantity: "",
		},
		validationSchema: validation,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	return (
		<div className="create-quantity">
			<SuccessAlert isAlert={isAlert} text="Quantity was created!" />

			<div className={props.isModal ? "modal active" : "modal"}>
				<form onSubmit={formik.handleSubmit}>
					<div className="flex-center">
						<div className="block width-338 height-auto bg-white border-radius-10 mt-100">
							<div className="border-bottom-1 border-grey">
								<p className="ml-20 font-20 my-20">
									Create Quantity
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
										props.setIsModal(false);
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

export default QuantityCreate;
