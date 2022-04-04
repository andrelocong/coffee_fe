import axios from "axios";
import React, { useState } from "react";
import SuccessAlert from "../components/SuccessAlert";

const UpdateSosmed = (props) => {
	const [isAlert, setIsAlert] = useState(false);

	const updateData = async (e) => {
		e.preventDefault();
		await axios.patch(`http://localhost:5000/sosmed/${props.sosmedId}`, {
			name: props.sosmed,
			address: props.address,
		});

		props.setIsEditModal(false);
		props.setSosmedId("");
		props.setSosmed("");
		props.setAddress("");
		props.showData();
		setIsAlert(true);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	return (
		<div className="update-sosmed">
			<SuccessAlert isAlert={isAlert} text="Sosmed data has changed!" />

			<div className={props.isEditModal ? "modal active" : "modal"}>
				<form onSubmit={updateData}>
					<div className="flex-center">
						<div className="block width-500 heigth-auto bg-white border-radius-10 mt-100">
							<div className="height-60 border-bottom-1 border-grey alig-item-center">
								<p className="ml-20 font-20">
									Edit Sosial Media
								</p>
							</div>

							<div className="border-bottom-1 border-grey">
								<div className="width-464 height-39 alig-item-center ml-20 pt-20">
									<input
										className="width-full height-full font-20 px-15"
										type="text"
										placeholder="Sosial media name, ex: twitter."
										value={props.sosmed}
										onChange={(e) =>
											props.setSosmed(e.target.value)
										}
									/>
								</div>
								<div className="width-464 height-39 alig-item-center ml-20 py-20">
									<input
										className="width-full height-full font-20 px-15"
										type="text"
										placeholder="Address sosial media, ex: http://twitter/asbcs."
										value={props.address}
										onChange={(e) =>
											props.setAddress(e.target.value)
										}
									/>
								</div>
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
										props.setIsEditModal(false);
										props.setSosmedId("");
										props.setSosmed("");
										props.setAddress("");
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

export default UpdateSosmed;
