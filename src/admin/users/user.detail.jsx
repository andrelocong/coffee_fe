import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import EditDataUser from "./user.edit";
import ChangeImage from "./user.changeImage";
import DangerAlert from "../components/DangerAlert";
import { useUserDetail } from "./user.detail.hook";

function UserDetail() {
	const { id } = useParams();

	const [isDanger, setIsDanger] = useState({
		bgAlert: false,
		dangerAlert: false,
	});

	const {
		data,
		image,
		deleteData,
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
	} = useUserDetail(id);

	return (
		<div className="detail-user">
			<EditDataUser
				isEditModal={isEditModal}
				setIsEditModal={setIsEditModal}
				formik={formikUpdate}
				showRoles={showRoles}
				isAlert={isAlert}
				handleNumeric={handleNumeric}
			/>

			<ChangeImage
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

			<DangerAlert
				isAlert={isDanger}
				setIsAlert={setIsDanger}
				deleteData={deleteData}
			/>

			<h1 className="my-40">Detail User</h1>

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
							<button className="bg-orange px-10 py-5 border-none cursor-pointer font-16 mr-5 border-radius-5 color-white">
								Change Password
							</button>
							<button
								className="bg-red px-10 py-5 border-none cursor-pointer font-16 mr-5 border-radius-5 color-white"
								onClick={() => {
									setIsDanger({
										bgAlert: true,
										dangerAlert: true,
									});
								}}
							>
								Delete
							</button>
							<Link
								className="bg-grey px-10 py-5 border-none cursor-pointer font-16 mr-5 border-radius-5 color-white text-decoration-none"
								to="/admin/user"
							>
								Back
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserDetail;
