import axios from "axios";
import React, { useState } from "react";
import SuccessAlert from "../components/SuccessAlert";
import { useFormik } from "formik";
import { validate } from "./validate";
import { TextField } from "../components/InputField";

const UpdateSubCategory = (props) => {
	const [isAlert, setIsAlert] = useState(false);

	const updateDataCategory = async (values) => {
		await axios.patch(
			`http://localhost:5000/sub-category/${props.categoryId}`,
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
			updateDataCategory(values);
		},
	});

	return (
		<div className="update-main-category">
			<SuccessAlert isAlert={isAlert} text="Category was updated!" />

			<div className={props.isUpdateModal ? "modal active" : "modal"}>
				<form onSubmit={formik.handleSubmit}>
					<div className="flex-center">
						<div className="block width-338 height-auto bg-white border-radius-10 mt-100">
							<div className="border-bottom-1 border-grey">
								<p className="ml-20 font-20 my-20">
									Update Sub Category
								</p>
							</div>

							<TextField
								name="name"
								type="text"
								value={formik.values.name}
								placeholder="Input main-category name"
								containerClassName="width-268 mx-auto py-20"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								errorMessage={formik.errors.name}
								touched={formik.touched.name}
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
									onClick={() =>
										props.setIsUpdateModal(false)
									}
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

export default UpdateSubCategory;
