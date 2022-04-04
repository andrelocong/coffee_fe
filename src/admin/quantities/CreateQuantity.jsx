import React, { useState } from "react";
import axios from "axios";
import SuccessAlert from "../components/SuccessAlert";

const CreateQuantity = (props) => {
	const [quantity, setQuantity] = useState("");
	const [isAlert, setIsAlert] = useState(false);

	const storeData = async (e) => {
		e.preventDefault();
		await axios.post("http://localhost:5000/quantity", {
			quantity: quantity,
		});

		props.setIsModal(false);
		setTimeout(() => {
			setQuantity("");
			setIsAlert(true);
			props.showData();
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const handleCancel = () => {
		props.setIsModal(false);
		setTimeout(() => {
			setQuantity("");
		}, 200);
	};

	return (
		<div className="create-quantity">
			<SuccessAlert isAlert={isAlert} text="Quantity was created!" />

			<div className={props.isModal ? "modal active" : "modal"}>
				<form onSubmit={storeData}>
					<div className="flex-center">
						<div className="block width-338 height-auto bg-white border-radius-10 mt-100">
							<div className="border-bottom-1 border-grey">
								<p className="ml-20 font-20 my-20">
									Create Quantity
								</p>
							</div>

							<div className="height-auto justify-center py-20 border-bottom-1 border-grey">
								<input
									className="width-268 py-10 px-15 font-18"
									type="text"
									placeholder="Input quantity, ex: 1 ton"
									value={quantity}
									onChange={(e) =>
										setQuantity(e.target.value)
									}
								/>
							</div>

							<div className="flex py-20">
								<button
									className="bg-orange px-10 py-5 border-none border-radius-5 cursor-pointer font-16 ml-20 color-white"
									type="submit"
								>
									Save
								</button>
								<button
									className="bg-grey px-10 py-5 border-none border-radius-5 cursor-pointer font-16 ml-20 color-white"
									onClick={() => handleCancel()}
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

export default CreateQuantity;
