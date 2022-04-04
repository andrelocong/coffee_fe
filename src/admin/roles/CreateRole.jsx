import React, { useState } from "react";
import axios from "axios";
import SuccessAlert from "../components/SuccessAlert";

const CreateRole = (props) => {
	const [name, setName] = useState("");
	const [isAlert, setIsAlert] = useState(false);

	const storeData = async (e) => {
		e.preventDefault();
		await axios.post("http://localhost:5000/role", {
			name: name,
		});

		props.setIsModal(false);
		setTimeout(() => {
			setName("");
			setIsAlert(true);
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
		props.showData();
	};

	const handleCancel = () => {
		props.setIsModal(false);
		setTimeout(() => {
			setName("");
		}, 200);
	};

	return (
		<div className="create-role">
			<SuccessAlert isAlert={isAlert} text="Main category was created!" />

			<div className={props.isModal ? "modal active" : "modal"}>
				<form onSubmit={storeData}>
					<div className="flex-center">
						<div className="block width-338 height-auto bg-white border-radius-10 mt-100">
							<div className="border-bottom-1 border-grey">
								<p className="ml-20 font-20 my-20">
									Create Role
								</p>
							</div>

							<div className="height-auto justify-center py-20 border-bottom-1 border-grey">
								<input
									className="width-268 py-10 px-15 font-18"
									type="text"
									placeholder="Input role name"
									value={name}
									onChange={(e) => setName(e.target.value)}
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

export default CreateRole;
