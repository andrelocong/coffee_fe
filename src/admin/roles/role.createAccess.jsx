import React, { useState } from "react";
import axios from "axios";
import SuccessAlert from "../components/SuccessAlert";
import { useFormik } from "formik";
import { validationMenu } from "./role.validation";
import { SelectField } from "../components/InputField";

const RoleCreateAccess = (props) => {
	const [isAlert, setIsAlert] = useState(false);
	const [errors, setErrors] = useState("");

	const menu = [
		{
			value: "product",
		},
		{
			value: "order list",
		},
		{
			value: "gallery",
		},
		{
			value: "sosial media",
		},
		{
			value: "team",
		},
		{
			value: "user",
		},
		{
			value: "main category",
		},
		{
			value: "category",
		},
		{
			value: "sub category",
		},
		{
			value: "quantity",
		},
		{
			value: "role",
		},
	];

	const storeData = async (values) => {
		try {
			await axios.post("http://localhost:5000/role-access", {
				menu: values.menu,
				roleId: props.id,
			});

			props.setIsModal(false);
			setTimeout(() => {
				formik.resetForm();
				setIsAlert(true);
				setErrors("");
			}, 200);
			setTimeout(() => {
				setIsAlert(false);
			}, 1500);
			props.showData();
		} catch (error) {
			console.log(error.response);
			setErrors("Menu has been used!");
		}
	};

	const formik = useFormik({
		initialValues: {
			menu: "",
		},
		validationSchema: validationMenu,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	return (
		<div className="create-role-access">
			<SuccessAlert isAlert={isAlert} text="Main category was created!" />

			<div className={props.isModal ? "modal active" : "modal"}>
				<form onSubmit={formik.handleSubmit}>
					<div className="flex-center">
						<div className="block width-338 height-auto bg-white border-radius-10 mt-100">
							<div className="border-bottom-1 border-grey">
								<p className="ml-20 font-20 my-20">
									Create Role Access
								</p>
							</div>
							<div className="text-center color-red mt-20">
								{errors}
							</div>
							<SelectField
								name="menu"
								placeholder="Choose menu"
								containerClassName="width-268 mx-auto my-20"
								value={formik.values.menu}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								errorMessage={formik.errors.menu}
								touched={formik.touched.menu}
								option={menu.map((data, index) => {
									return (
										<option
											value={data.value}
											key={index}
											className="text-capitalize"
										>
											{data.value}
										</option>
									);
								})}
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
										setTimeout(() => {
											formik.resetForm();
											setErrors("");
										}, 200);
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

export default RoleCreateAccess;
