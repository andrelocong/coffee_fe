import React, { useState } from "react";
import axios from "axios";
import SuccessAlert from "../components/SuccessAlert";
import validate from "./validateInfo";

const CreateSosmed = (props) => {
	const [values, setValues] = useState({
		sosmed: "",
		address: "",
	});
	const [isAlert, setIsAlert] = useState(false);
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

		await axios.post("http://localhost:5000/sosmed", {
			name: values.sosmed,
			address: values.address,
		});

		props.setIsModal(false);
		setValues({
			sosmed: "",
			address: "",
		});
		props.showData();
		setIsAlert(true);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const handleCancel = () => {
		props.setIsModal(false);
		setValues({
			sosmed: "",
			address: "",
		});
	};

	return (
		<div className="create-sosmed">
			<SuccessAlert isAlert={isAlert} text="Sosial media was created!" />
			<div className={props.isModal ? "modal active" : "modal"}>
				<form onSubmit={storeData}>
					<div className="flex-center">
						<div className="block width-500 heigth-auto bg-white border-radius-10 mt-100">
							<div className="height-60 border-bottom-1 border-grey alig-item-center">
								<p className="ml-20 font-20">
									Input Sosial Media
								</p>
							</div>

							<div className="border-bottom-1 border-grey">
								<div className="width-426 alig-item-center ml-20 pt-20 block">
									<input
										className="width-full py-10 font-20 px-15"
										type="text"
										name="sosmed"
										placeholder="Sosial media name, ex: twitter."
										value={values.sosmed}
										onChange={handleChange}
									/>
									{errors.sosmed && (
										<p className="color-red m-0">
											{errors.sosmed}
										</p>
									)}
								</div>
								<div className="width-426 alig-item-center ml-20 py-20 block">
									<input
										className="width-full py-10 font-20 px-15"
										type="text"
										name="address"
										placeholder="Address sosial media, ex: http://twitter/asbcs."
										value={values.address}
										onChange={handleChange}
									/>
									{errors.address && (
										<p className="color-red m-0">
											{errors.address}
										</p>
									)}
								</div>
							</div>

							<div className="height-60 alig-item-center">
								<button className="bg-orange px-10 py-5 border-none border-radius-5 cursor-pointer font-16 ml-20 color-white">
									Save
								</button>
								<button
									className="bg-grey px-10 py-5 border-none border-radius-5 cursor-pointer font-16 ml-20 color-white"
									type="button"
									onClick={handleCancel}
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

export default CreateSosmed;
