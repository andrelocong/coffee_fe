import axios from "axios";
import React, { useState } from "react";
import SuccessAlert from "../components/SuccessAlert";

const TeamEditImage = (props) => {
	const [isAlert, setIsAlert] = useState(false);

	const updateImage = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("image", props.imageUpload);

		await axios.patch(
			`http://localhost:5000/team/image/${props.teamId}`,
			formData
		);

		props.setIsEditImageModal(false);
		setIsAlert(true);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
		setTimeout(() => {
			props.showData();
		}, 2000);
	};
	return (
		<div className="edit-image-team">
			<SuccessAlert isAlert={isAlert} text="Team image was updated!" />

			<div className={props.isEditImageModal ? "modal active" : "modal"}>
				<form onSubmit={updateImage}>
					<div className="flex-center">
						<div className="block width-auto height-auto bg-white border-radius-10 mt-80">
							<div className="width-auto height-500 p-20">
								<img
									className="width-auto height-full object-fit-cover object-position-center "
									src={props.image}
									alt="user"
								/>
							</div>

							<div className="px-20 py-10">
								<input
									className="font-16 width-full"
									type="file"
									onChange={(e) => {
										props.setImage(
											URL.createObjectURL(
												e.target.files[0]
											)
										);
										props.setImageUpload(e.target.files[0]);
									}}
								/>
							</div>

							<div className="px-20 pt-10 pb-20">
								<button
									className="bg-orange px-10 py-5 border-none border-radius-5 color-white font-16 cursor-pointer mr-10"
									type="submit"
								>
									Save
								</button>
								<button
									className="bg-grey px-10 py-5 border-none border-radius-5 color-white font-16 cursor-pointer"
									type="button"
									onClick={() =>
										props.setIsEditImageModal(false)
									}
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

export default TeamEditImage;
