import React, { useState } from "react";
import TeamCreate from "./team.create";
import TeamDetail from "./team.detail";
import TeamEdit from "./team.edit";
import TeamEditImage from "./team.editImage";
import DangerAlert from "../components/DangerAlert";
import { useTeam } from "./team.hook";

function Team() {
	const [isDanger, setIsDanger] = useState({
		bgAlert: false,
		dangerAlert: false,
	});

	const {
		data,
		deleteData,
		isCreateModal,
		setIsCreateModal,
		isDetailModal,
		setIsDetailModal,
		setIsEditModal,
		isEditModal,
		setIsEditImageModal,
		isEditImageModal,
		values,
		setValues,
		formikStore,
		formikUpdate,
		formikUpdateImage,
		isAlert,
		imagePreview,
		setImagePreview,
		isShowImage,
		setIsShowImage,
		imageValue,
		setImageValue,
		setImageEditPreview,
		imageEditPreview,
		setImageEditValue,
		imageEditValue,
		setIsShowImageEdit,
		isShowImageEdit,
	} = useTeam();

	return (
		<div className="team-list">
			<TeamCreate
				isCreateModal={isCreateModal}
				setIsCreateModal={setIsCreateModal}
				formik={formikStore}
				isAlert={isAlert}
				imagePreview={imagePreview}
				setImagePreview={setImagePreview}
				isShowImage={isShowImage}
				setIsShowImage={setIsShowImage}
				setImageValue={setImageValue}
				imageValue={imageValue}
			/>

			<TeamDetail
				isDetailModal={isDetailModal}
				setIsDetailModal={setIsDetailModal}
				setIsEditModal={setIsEditModal}
				setIsEditImageModal={setIsEditImageModal}
				values={values}
				deleteData={deleteData}
			/>

			<TeamEdit
				isEditModal={isEditModal}
				setIsEditModal={setIsEditModal}
				formik={formikUpdate}
				isAlert={isAlert}
			/>

			<TeamEditImage
				isEditImageModal={isEditImageModal}
				setIsEditImageModal={setIsEditImageModal}
				formik={formikUpdateImage}
				isAlert={isAlert}
				setIsShowImageEdit={setIsShowImageEdit}
				isShowImageEdit={isShowImageEdit}
				setImageEditPreview={setImageEditPreview}
				imageEditPreview={imageEditPreview}
				setImageEditValue={setImageEditValue}
				imageEditValue={imageEditValue}
			/>

			<DangerAlert
				isAlert={isDanger}
				setIsAlert={setIsDanger}
				deleteData={deleteData}
			/>

			<h1 className="my-40">Teams</h1>

			<div className="width-full bg-white border-radius-20 height-100vh mb-10">
				<div className="p-30 flex">
					<div className="width-150">
						<button
							className="btn-orange cursor-pointer"
							onClick={() => setIsCreateModal(true)}
						>
							Add New
						</button>
					</div>
					<div className="width-300 border-2 border-orange border-radius-5 flex-center">
						<i className="fas fa-search px-20 py-9 mr-5 border-right-2 border-orange"></i>
						<input
							className="width-full px-15 py-11 border-none outline-none"
							type="search"
							placeholder="Search"
							// onKeyUp={(e) => handleSearch(e.target.value)}
						/>
					</div>
				</div>

				<div className="p-30">
					<table className="width-full text-center border-collapse">
						<thead className="bg-orange color-white">
							<tr>
								<th className="border-radius-left-10 py-11">
									No
								</th>
								<th className="py-11">Name</th>
								<th className="py-11">Position</th>
								<th className="py-11 border-radius-right-10">
									Action
								</th>
							</tr>
						</thead>
						<tbody id="table-body">
							{data.map((team, index) => {
								return (
									<tr key={index}>
										<td className="py-15">{index + 1}</td>
										<td className="py-15 text-capitalize">
											{team.name}
										</td>
										<td className="py-15 text-capitalize">
											{team.position}
										</td>
										<td className="py-15">
											<button
												className="bg-grey px-10 py-5 border-none cursor-pointer font-16 color-white mr-5 border-radius-5"
												type="button"
												onClick={() => {
													setIsDetailModal(true);
													setValues({
														id: team.team_id,
														name: team.name,
														position: team.position,
														desc: team.desc,
														image: team.image,
													});
												}}
											>
												Detail
											</button>
											<button
												className="bg-orange px-10 py-5 border-none cursor-pointer font-16 color-white mr-5 border-radius-5"
												type="button"
												onClick={() => {
													setIsEditModal(true);
													setValues({
														id: team.team_id,
														name: team.name,
														position: team.position,
														desc: team.desc,
													});
												}}
											>
												Edit
											</button>
											<button
												className="bg-white px-10 py-5 border-1 cursor-pointer font-16 color-black mr-5 border-radius-5"
												type="button"
												onClick={() => {
													setIsEditImageModal(true);
													setValues({
														id: team.team_id,
														name: "",
														position: "",
														desc: "",
														image: team.image,
													});
												}}
											>
												Edit Image
											</button>
											<button
												className="bg-red px-10 py-5 border-none cursor-pointer font-16 color-white mr-5 border-radius-5"
												type="button"
												onClick={() => {
													setValues({
														id: team.team_id,
														name: "",
														position: "",
														desc: "",
													});
													setIsDanger({
														bgAlert: true,
														dangerAlert: true,
													});
												}}
											>
												Delete
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Team;
