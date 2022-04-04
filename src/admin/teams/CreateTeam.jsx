import axios from "axios";
import React, { useState } from "react";
import SuccessAlert from "../components/SuccessAlert";

const CreateTeam = (props) => {
	const [name, setName] = useState("");
	const [position, setPosition] = useState("");
	const [desc, setDesc] = useState("");
	const [image, setImage] = useState("");
	const [imageUpload, setImageUpload] = useState("");
	const [isShowImage, setIsShowImage] = useState(false);
	const [imageTmp, setImageTmp] = useState("");
	const [isAlert, setIsAlert] = useState(false);

	const storeData = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("name", name);
		formData.append("position", position);
		formData.append("desc", desc);
		formData.append("image", imageUpload);

		await axios.post("http://localhost:5000/team", formData);

		props.setIsModal(false);
		setName("");
		setPosition("");
		setDesc("");
		setImage("");
		setImageUpload("");
		setImageTmp("");
		setIsShowImage(false);
		setIsAlert(true);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
		props.showData();
	};

	return (
		<div className="create-team">
			<SuccessAlert isAlert={isAlert} text="Team was created!" />

			<div className={props.isModal ? "modal active" : "modal"}>
				<form onSubmit={storeData}>
					<div className="flex-center">
						<div
							className={
								isShowImage
									? "block height-488 mt-100 widht-auto mr-20 visibility-visible"
									: "visibility-hidden"
							}
						>
							<img
								className="width-auto height-full object-fit-cover object-position-center"
								src={imageTmp}
								alt="user"
							/>
						</div>
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
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
								</div>
								<div className="width-464 height-39 alig-item-center ml-20 pt-20">
									<input
										className="width-full height-full font-20 px-15"
										type="text"
										placeholder="Positions, ex: Co-Founder."
										value={position}
										onChange={(e) =>
											setPosition(e.target.value)
										}
									/>
								</div>
								<div className="width-464 min-height-113 alig-item-center ml-20 pt-20">
									<textarea
										className="min-width-431 max-width-431 min-height-113 font-16 px-15 py-10"
										placeholder="Descriptions"
										value={desc}
										onChange={(e) =>
											setDesc(e.target.value)
										}
									></textarea>
								</div>
								<div className="width-464 height-39 ml-20 my-20 alig-item-center">
									<input
										className="width-full height-full font-18"
										type="file"
										value={image}
										onChange={(e) => {
											setImage(e.target.value);
											setImageUpload(e.target.files[0]);
											setImageTmp(
												URL.createObjectURL(
													e.target.files[0]
												)
											);
											setIsShowImage(true);
										}}
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
										props.setIsModal(false);
										setName("");
										setPosition("");
										setDesc("");
										setImage("");
										setImageUpload("");
										setImageTmp("");
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

export default CreateTeam;
