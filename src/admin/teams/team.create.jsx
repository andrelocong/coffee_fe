import axios from "axios";
import React, { useState } from "react";
import SuccessAlert from "../components/SuccessAlert";
import { useFormik } from "formik";
import { validation } from "./team.validation";
import { TextField, TextAreaField } from "../components/formField";

const TeamCreate = (props) => {
	const [isShowImage, setIsShowImage] = useState(false);
	const [imagePreview, setImagePreview] = useState("");
	const [isAlert, setIsAlert] = useState(false);

	const storeData = async (values) => {
		console.log(values);
		const formData = new FormData();
		formData.append("name", values.name);
		formData.append("position", values.position);
		formData.append("desc", values.desc);
		formData.append("image", values.image);

		await axios.post("http://localhost:5000/team", formData);

		props.setIsCreateModal(false);
		formik.resetForm();
		setImagePreview("");
		setIsShowImage(false);
		setIsAlert(true);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
		props.showData();
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			position: "",
			desc: "",
			image: "",
		},
		validationSchema: validation,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	return (
		<div className="create-team">
			<SuccessAlert isAlert={isAlert} text="Team was created!" />

			<div className={props.isCreateModal ? "modal active" : "modal"}>
				<form onSubmit={formik.handleSubmit}>
					<div className="flex-center">
						<div
							className={
								isShowImage
									? "block height-488 mt-100 widht-auto mr-20 visibility-visible"
									: "visibility-hidden"
							}
						>
							<img
								className="width-auto height-full object-fit-cover object-position-center border-radius-10"
								src={imagePreview}
								alt="user"
							/>
						</div>
						<div className="block width-550 heigth-auto bg-white border-radius-10 mt-100">
							<div className="height-60 border-bottom-1 border-grey alig-item-center">
								<p className="ml-20 font-20">Input Team Data</p>
							</div>

							<div className="border-bottom-1 border-grey">
								<TextField
									name="name"
									type="text"
									placeholder="Name, ex: Lala Lalisa."
									containerClassName="width-530 mx-auto my-10"
									onChange={formik.handleChange}
									value={formik.values.name}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.name}
									touched={formik.touched.name}
								/>
								<TextField
									name="position"
									type="text"
									placeholder="Positions, ex: Co-Founder."
									containerClassName="width-530 mx-auto my-10"
									onChange={formik.handleChange}
									value={formik.values.position}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.position}
									touched={formik.touched.position}
								/>
								<TextAreaField
									name="desc"
									placeholder="Descriptions"
									containerClassName="width-530 mx-auto my-10"
									onChange={formik.handleChange}
									value={formik.values.desc}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.desc}
									touched={formik.touched.desc}
								/>
								<TextField
									type="file"
									name="image"
									containerClassName="width-530 mx-auto my-10"
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.image}
									touched={formik.touched.image}
									onChange={(e) => {
										formik.setFieldValue(
											"image",
											e.target.files[0]
										);
										setImagePreview(
											URL.createObjectURL(
												e.target.files[0]
											)
										);
										setIsShowImage(true);
									}}
								/>
							</div>

							<div className="height-60 alig-item-center">
								<button
									className="bg-orange px-10 py-5 border-none border-radius-5 cursor-pointer font-16 ml-20 color-white"
									type="submit"
								>
									Save
								</button>
								<button
									className="bg-grey px-10 py-5 border-none border-radius-5 cursor-pointer font-16 ml-20 color-white"
									type="button"
									onClick={() => {
										props.setIsCreateModal(false);
										formik.resetForm();
										setImagePreview("");
										setIsShowImage(false);
									}}
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

export default TeamCreate;
