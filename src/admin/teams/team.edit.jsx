import axios from "axios";
import React, { useState } from "react";
import SuccessAlert from "../components/SuccessAlert";

const TeamEdit = (props) => {
	const [isAlert, setIsAlert] = useState(false);

	const updateData = async (e) => {
		e.preventDefault();

		await axios.patch(`http://localhost:5000/team/${props.teamId}`, {
			name: props.name,
			position: props.position,
			desc: props.desc,
		});

		props.setIsEditModal(false);
		props.showData();
		setIsAlert(true);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	return (
		<div className="edit-team">
			<SuccessAlert isAlert={isAlert} text="Data was updated!" />

			<div className={props.isEditModal ? "modal active" : "modal"}>
				<form onSubmit={updateData}>
					<div className="flex-center">
						<div className="block width-500 heigth-auto bg-white border-radius-10 mt-100">
							<div className="height-60 border-bottom-1 border-grey alig-item-center">
								<p className="ml-20 font-20">Input Team Data</p>
							</div>

							<div className="border-bottom-1 border-grey">
								<div className="width-464 height-39 alig-item-center ml-20 pt-20">
									<input
										className="width-full height-full font-20 px-15"
										type="text"
										placeholder="Name, ex: Lala Lalisa."
										value={props.name}
										onChange={(e) =>
											props.setName(e.target.value)
										}
									/>
								</div>
								<div className="width-464 height-39 alig-item-center ml-20 pt-20">
									<input
										className="width-full height-full font-20 px-15"
										type="text"
										placeholder="Positions, ex: Co-Founder."
										value={props.position}
										onChange={(e) =>
											props.setPosition(e.target.value)
										}
									/>
								</div>
								<div className="width-464 min-height-113 alig-item-center ml-20 pt-20">
									<textarea
										className="min-width-431 max-width-431 min-height-113 font-16 px-15 py-10"
										placeholder="Descriptions"
										value={props.desc}
										onChange={(e) =>
											props.setDesc(e.target.value)
										}
									></textarea>
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

export default TeamEdit;
