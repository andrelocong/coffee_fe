import axios from "axios";
import React, { useState } from "react";
import SuccessAlert from "../components/SuccessAlert";
import { useFormik } from "formik";
import { validate } from "./validate";
import { TextField } from "../components/InputField";

const CreateMainCategory = (props) => {
	const [isAlert, setIsAlert] = useState(false);

	const storeData = async (values, resetForm) => {
		await axios.post("http://localhost:5000/main-category", {
			name: values.name,
		});

		props.setIsModal(false);
		setTimeout(() => {
			formik.resetForm();
			setIsAlert(true);
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
		props.showData();
	};

	const formik = useFormik({
		initialValues: {
			name: "",
		},
		validationSchema: validate,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	return (
		<div className="create-main-category">
			<SuccessAlert isAlert={isAlert} text="Main category was created!" />

			<div className={props.isModal ? "modal active" : "modal"}>
				<div className="flex-center">
					<div className="block width-338 height-auto bg-white border-radius-10 mt-100">
						<div className="border-bottom-1 border-grey">
							<p className="ml-20 font-20 my-20">
								Create Main Category
							</p>
						</div>
						<form onSubmit={formik.handleSubmit}>
							<TextField
								name="name"
								type="text"
								placeholder="Input main-category name"
								containerClassName="width-268 mx-auto my-20"
								onChange={formik.handleChange}
								value={formik.values.name}
								onBlur={formik.handleBlur}
								errorMessage={formik.errors.name}
								touched={formik.touched.name}
							/>

							<div className="width-full border-top-1 border-grey">
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
											props.setIsModal(false);
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
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateMainCategory;
