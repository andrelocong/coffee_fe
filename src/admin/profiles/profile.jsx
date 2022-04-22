import React from "react";
import ProfileEdit from "./profile.edit";
import ProfileChangeImage from "./profile.changeImage";
import { useProfile } from "./profile.hook";
import ProfileChangePassword from "./profile.changePassword";

function Profile() {
	const {
		data,
		image,
		formikUpdate,
		showRoles,
		setIsEditModal,
		isEditModal,
		isAlert,
		handleNumeric,
		formikUpdateImage,
		setIsChangeImageModal,
		isChangeImageModal,
		imageValue,
		imagePreview,
		isShowImage,
		setImagePreview,
		setImageValue,
		setIsShowImage,
		setIsChangePasswordModal,
		isChangePasswordModal,
		formikUpdatePassword,
		setError,
		error,
	} = useProfile();

	return (
		<div className="detail-user">
			<ProfileEdit
				isEditModal={isEditModal}
				setIsEditModal={setIsEditModal}
				formik={formikUpdate}
				showRoles={showRoles}
				isAlert={isAlert}
				handleNumeric={handleNumeric}
			/>

			<ProfileChangeImage
				isChangeImageModal={isChangeImageModal}
				setIsChangeImageModal={setIsChangeImageModal}
				formik={formikUpdateImage}
				imageValue={imageValue}
				imagePreview={imagePreview}
				isShowImage={isShowImage}
				isAlert={isAlert}
				setImagePreview={setImagePreview}
				setImageValue={setImageValue}
				setIsShowImage={setIsShowImage}
			/>

			<ProfileChangePassword
				isChangePasswordModal={isChangePasswordModal}
				setIsChangePasswordModal={setIsChangePasswordModal}
				formik={formikUpdatePassword}
				isAlert={isAlert}
				error={error}
				setError={setError}
			/>

			<h1 className="my-40">Profile</h1>

			<div className="justify-space-between">
				<div className="width-350 height-300 bg-white justify-center border-radius-10">
					<div className="block heigth-full mt-40">
						<div className="width-150 height-150 border-radius-100 text-center">
							<img
								className="width-full height-full border-radius-100 object-fit-cover object-position-center"
								src={image}
								alt="user"
							/>
							<h1 className="font-20 text-capitalize">
								{data.firstName} {data.lastName}
							</h1>
							<p>{data.email}</p>
						</div>
					</div>
				</div>

				<div className="width-739 height-auto bg-white border-radius-10">
					<div className="width-700 mx-auto mt-20">
						<h2 className="font-20 ml-6">Full Name</h2>
						<div className="width-full border-bottom-1 border-grey">
							<p className="ml-6 text-capitalize">
								{data.firstName} {data.lastName}
							</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Username</h2>
							<p className="ml-6">{data.username}</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Email</h2>
							<p className="ml-6">{data.email}</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Phone</h2>
							<p className="ml-6">{data.phone}</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Role</h2>
							<p className="ml-6 text-capitalize">
								{data.role.name}
							</p>
						</div>

						<div className="width-full flex my-20">
							<button
								onClick={() => setIsEditModal(true)}
								className="bg-orange px-10 py-5 border-none cursor-pointer font-16 mr-5 border-radius-5 color-white"
							>
								Edit
							</button>
							<button
								className="bg-orange px-10 py-5 border-none cursor-pointer font-16 mr-5 border-radius-5 color-white"
								onClick={() => {
									setIsChangeImageModal(true);
								}}
							>
								Change Image
							</button>
							<button
								className="bg-orange px-10 py-5 border-none cursor-pointer font-16 mr-5 border-radius-5 color-white"
								onClick={() => {
									setIsChangePasswordModal(true);
								}}
							>
								Change Password
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
