import axios from "axios";
import React, { useState } from "react";
import SuccessAlert from "../components/SuccessAlert";
import { useFormik } from "formik";
import { validate } from "./validate";
import { TextField } from "../components/InputField";

const UpdateMainCategory = (props) => {
	const [isAlert, setIsAlert] = useState(false);
	console.log(props.name);
	const updateDataMainCategory = async (values) => {
		await axios.patch(
			`http://localhost:5000/main-category/${props.categoryId}`,
			{
				name: values.name,
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
			name: props.name,
		},
		enableReinitialize: true,
		validationSchema: validate,
		onSubmit: (values) => {
			updateDataMainCategory(values);
		},
	});

	return (
		<div className="update-main-category">
			<SuccessAlert isAlert={isAlert} text="Main category was updated!" />

			<div className={props.isUpdateModal ? "modal active" : "modal"}>
				<div className="flex-center">
					<div className="block width-338 height-auto bg-white border-radius-10 mt-100">
						<div className="border-bottom-1 border-grey">
							<p className="ml-20 font-20 my-20">
								Update Main Category
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
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateMainCategory;
