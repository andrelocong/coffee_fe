import React from "react";
import SuccessAlert from "../components/SuccessAlert";
import { TextField } from "../components/formField";

const TeamEditImage = (props) => {
	const formik = props.formik;

	return (
		<div className="edit-image-team">
			<SuccessAlert isAlert={props.isAlert} text="Image was updated!" />

			<div className={props.isEditImageModal ? "modal active" : "modal"}>
				<form onSubmit={formik.handleSubmit}>
					<div className="flex-center">
						<div className="block width-auto height-auto bg-white border-radius-10 mt-80">
							<div
								className={
									props.isShowImageEdit
										? "width-auto height-200 p-20 visibility-visible justify-center"
										: "visibility-hidden"
								}
							>
								<img
									className="width-auto height-full object-fit-cover object-position-center "
									src={props.imageEditPreview}
									alt="user"
								/>
							</div>

							<TextField
								type="file"
								name="image"
								containerClassName="width-400 px-10 mx-auto my-10"
								onBlur={formik.handleBlur}
								errorMessage={formik.errors.image}
								touched={formik.touched.image}
								onChange={(e) => {
									formik.setFieldValue(
										"image",
										e.target.files[0]
									);
									props.setImageEditPreview(
										URL.createObjectURL(e.target.files[0])
									);
									props.setIsShowImageEdit(true);
									props.setImageEditValue(e.target.value);
								}}
								value={props.imageEditValue}
							/>

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
									onClick={() => {
										props.setIsEditImageModal(false);
										setTimeout(() => {
											props.setIsShowImageEdit(false);
											props.setImageEditPreview("");
											props.setImageEditValue("");
										}, 200);
										formik.resetForm();
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

export default TeamEditImage;
