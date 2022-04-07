import axios from "axios";
import React, { useState } from "react";
import SuccessAlert from "../components/SuccessAlert";

const GalleryCreate = (props) => {
	const [category, setCategory] = useState("");
	const [imageName, setImageName] = useState("");
	const [isShowImage, setIsShowImage] = useState(false);
	const [imageTmp, setImageTmp] = useState("");
	const [imageUpload, setImageUpload] = useState(null);
	const [isAlert, setIsAlert] = useState(false);
	const [errors, setErrors] = useState({});
	console.log(setErrors);

	const handleImageChange = (e) => {
		let uploaded = e.target.files[0];
		setImageTmp(URL.createObjectURL(uploaded));
		setImageUpload(e.target.files[0]);
	};

	const storeData = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("image", imageUpload);
		formData.append("category", category);

		await axios.post("http://localhost:5000/upload/image", formData);

		props.setIsModal(false);
		props.showData();
		setIsShowImage(false);
		setTimeout(() => {
			setImageTmp("");
			setCategory("");
			setImageName("");
			setIsAlert(true);
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	return (
		<div className="create-gallery">
			<SuccessAlert
				isAlert={isAlert}
				text="Gallery created successfully!"
			/>

			<div className={props.isModal ? "modal active" : "modal"}>
				<form onSubmit={storeData}>
					<div className="flex-center">
						<div className="block bg-white width-400 mt-100">
							<div className="width-full height-60 border-bottom-1 border-grey alig-item-center">
								<p className="ml-20 font-20">Input Image</p>
							</div>

							<div className="width-full border-bottom-1 border-grey">
								<div className="width-360 ml-20 my-20 block">
									<select
										className="width-full py-10 font-20 px-15 appearance-none"
										value={category}
										onChange={(e) =>
											setCategory(e.target.value)
										}
									>
										<option hidden>Choose category</option>
										<option value="coffee">Coffee</option>
										<option value="cocoa">Cocoa</option>
										<option value="vanilla">Vanilla</option>
									</select>
									{errors.category && (
										<p className="color-red m-0">
											{errors.category}
										</p>
									)}
								</div>

								<div className="width-360 ml-20 my-20 alig-item-center block">
									<input
										className="width-full py-10 font-18"
										type="file"
										value={imageName}
										onChange={(e) => {
											setImageName(e.target.value);
											handleImageChange(e);
											setIsShowImage(true);
										}}
									/>
									{errors.imageUpload && (
										<p className="color-red m-0">
											{errors.imageUpload}
										</p>
									)}
								</div>

								<div
									className={
										isShowImage
											? "width-360 height-auto my-20 mx-auto justify-center visibility-visible"
											: "height-0 visibility-hidden"
									}
								>
									<img
										className="width-332 heigh-auto"
										src={imageTmp}
										alt="coffee"
									/>
								</div>
							</div>

							<div className="width-full height-60 alig-item-center color-white">
								<button
									className="bg-orange px-10 py-5 border-none border-radius-5 cursor-pointer font-16 mx-20"
									type="submit"
								>
									Save
								</button>
								<button
									className="bg-grey px-10 py-5 border-none border-radius-5 cursor-pointer font-16"
									type="button"
									onClick={() => {
										props.setIsModal(false);
										setTimeout(() => {
											setCategory("");
											setImageName("");
										}, 200);
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

export default GalleryCreate;
