import React, { useState } from "react";
import SuccessAlert from "../components/SuccessAlert";
import { TextField } from "../components/formField";
import { useUpdateImage } from "./user.hook";

const UserChangeImage = (props) => {
	const [imagePreview, setImagePreview] = useState("");
	const [isShowImage, setIsShowImage] = useState(false);
	const [imageValue, setImageValue] = useState("");
	const setIsChangeImageModal = props.setIsChangeImageModal;
	const showDataById = props.showDataById;
	const id = props.id;

	const { formik, isAlert } = useUpdateImage(
		setIsChangeImageModal,
		showDataById,
		id,
		setImagePreview,
		setImageValue,
		setIsShowImage
	);

	return (
		<div className="change-image">
			<SuccessAlert isAlert={isAlert} text="Photo profil was changed!" />

			<div
				className={props.isChangeImageModal ? "modal active" : "modal"}
			>
				<form onSubmit={formik.handleSubmit}>
					<div className="justify-center">
						<div className="block width-400 height-auto bg-white border-radius-10 mt-40">
							<div className="width-full height-60 alig-item-center border-bottom-1 border-grey">
								<p className="ml-20 font-20">
									Change Photo Profil
								</p>
							</div>
							<div
								className={
									isShowImage
										? "width-auto height-200 pt-10 visibility-visible justify-center"
										: "visibility-hidden"
								}
							>
								<img
									className="width-auto height-full object-fit-center object-posision-center"
									src={imagePreview}
									alt="profile"
								/>
							</div>

							<div className="width-full justify-center pb-20 pt-10 border-bottom-1 border-grey">
								<TextField
									type="file"
									name="image"
									containerClassName="width-400 px-10 mx-auto my-10"
									onBlur={formik.handleBlur}
									value={imageValue}
									errorMessage={formik.errors.image}
									touched={formik.touched.image}
									onChange={(e) => {
										formik.setFieldValue(
											"image",
											e.target.files[0]
										);
										setImagePreview(
											URL.createObjectURL(
												e.target.files[0]
											)
										);
										setIsShowImage(true);
										setImageValue(e.target.value);
									}}
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
										props.setIsChangeImageModal(false);
										setTimeout(() => {
											setImageValue("");
											setIsShowImage(false);
											setImagePreview("");
										}, 200);
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
