import React, { useState } from "react";
import GalleryCreate from "./gallery.create";
import DangerAlert from "../components/DangerAlert";
import { useFetch } from "./gallery.hook";

function GalleryList() {
	const [isCreateModal, setIsCreateModal] = useState(false);
	const [id, setId] = useState("");
	const [isShowImage, setIsShowImage] = useState(false);
	const [isAlert, setIsAlert] = useState({
		bgAlert: false,
		dangerAlert: false,
	});
	const [image, setImage] = useState("");

	const { data, showData, deleteData } = useFetch(id);

	return (
		<div className="input-gallery">
			<GalleryCreate
				isCreateModal={isCreateModal}
				setIsCreateModal={setIsCreateModal}
				showData={showData}
			/>

			<DangerAlert
				isAlert={isAlert}
				setIsAlert={setIsAlert}
				deleteData={deleteData}
			/>

			<div className={isShowImage ? "modal active" : "modal"}>
				<div
					className="width-full height-100vh flex-center bg-black-02"
					onClick={() => setIsShowImage(false)}
				>
					<img
						className="width-auto height-600 border-radius-10"
						src={image}
						alt="product"
						onClick={(e) => e.stopPropagation()}
					/>
				</div>
			</div>

			<h1 className="my-40">Gallery</h1>

			<div className="widht-full bg-white border-radius-20 min-height-100vh max-height-auto mb-20">
				<div className="p-30 flex">
					<div className="width-150">
						<button
							className="btn-orange cursor-pointer"
							onClick={() => setIsCreateModal(true)}
						>
							Add New
						</button>
					</div>
				</div>

				<div className="p-30">
					<table className="width-full text-center border-collapse">
						<thead className="bg-orange color-white">
							<tr>
								<th className="border-radius-left-10 py-11">
									No
								</th>
								<th className="py-11">Image</th>
								<th className="py-11">Action</th>
							</tr>
						</thead>

						<tbody>
							{data.map((gallery, index) => {
								return (
									<tr
										className="border-bottom-1 border-grey"
										key={index}
									>
										<td className="py-15">{index + 1}</td>
										<td className="py-15">
											<img
												className="width-250 height-auto cursor-pointer border-radius-10"
												src={gallery.image}
												onClick={() => {
													setImage(gallery.image);
													setIsShowImage(true);
												}}
												alt="product"
											/>
										</td>
										<td className="py-15">
											<button
												className="bg-red px-10 py-5 border-none cursor-pointer font-16 color-white border-radius-5"
												onClick={() => {
													setId(gallery.gallery_id);
													setIsAlert({
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

export default GalleryList;
