import axios from "axios";
import React, { useState } from "react";
import SuccessAlert from "../components/SuccessAlert";

const UserChangeImage = (props) => {
	const [imgTmp, setImgTmp] = useState("");
	const [imgUpload, setImgUpload] = useState("");
	const [alt, setAlt] = useState("");
	const [imageName, setImageName] = useState("");
	const [isAlert, setIsAlert] = useState(false);

	const handleInput = (e) => {
		let image = e.target.files[0];
		setImgTmp(URL.createObjectURL(image));
		setAlt("profil");
		setImageName(e.target.value);
		setImgUpload(image);
	};

	const updateData = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("image", imgUpload);

		await axios.patch(
			`http://localhost:5000/user/image/${props.id}`,
			formData
		);

		props.setIsChangeImageModal(false);
		props.showDataById();
		setTimeout(() => {
			setIsAlert(true);
			setImgTmp("");
			setAlt("");
			setImageName("");
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const handleCancel = () => {
		props.setIsChangeImageModal(false);
		setTimeout(() => {
			setImgTmp("");
			setAlt("");
			setImageName("");
		}, 200);
	};

	return (
		<div className="change-image">
			<SuccessAlert isAlert={isAlert} text="Photo profil was changed!" />

			<div
				className={props.isChangeImageModal ? "modal active" : "modal"}
			>
				<form onSubmit={updateData}>
					<div className="justify-center">
						<div className="block width-500 height-auto bg-white border-radius-10 mt-40">
							<div className="width-full height-60 alig-item-center border-bottom-1 border-grey">
								<p className="ml-20 font-20">
									Change Photo Profil
								</p>
							</div>

							<div className="width-full justify-center pt-20">
								<img
									className="width-342 height-auto object-fit-center object-posision-center"
									src={imgTmp}
									alt={alt}
								/>
							</div>

							<div className="width-full justify-center py-20 border-bottom-1 border-grey">
								<input
									className="width-400 px-20 py-5 font-16"
									type="file"
									value={imageName}
									onChange={(e) => handleInput(e)}
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
										handleCancel();
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

export default UserChangeImage;
