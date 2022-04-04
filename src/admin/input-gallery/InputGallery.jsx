import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateGallery from "./CreateGallery";
import DangerAlert from "../components/DangerAlert";

function InputGallery() {
	const [isModal, setIsModal] = useState(false);
	const [galleries, setGalleries] = useState([]);
	const [galleryId, setGalleryId] = useState("");
	const [isBgAlert, setIsBgAlert] = useState(false);
	const [isDangerAlert, setIsDangerAlert] = useState(false);
	const [isShowImage, setIsShowImage] = useState(false);
	const [image, setImage] = useState("");

	const showData = async () => {
		const data = await axios.get("http://localhost:5000/gallery");

		setGalleries(data.data.gallery);
	};

	useEffect(() => {
		showData();
	}, []);

	const deleteData = async () => {
		await axios.delete(`http://localhost:5000/gallery/${galleryId}`);

		setGalleryId("");
		showData();
	};

	return (
		<div className="input-gallery">
			<CreateGallery
				isModal={isModal}
				setIsModal={setIsModal}
				showData={showData}
			/>

			<DangerAlert
				isBgAlert={isBgAlert}
				isDangerAlert={isDangerAlert}
				setIsBgAlert={setIsBgAlert}
				setIsDangerAlert={setIsDangerAlert}
				deleteData={deleteData}
			/>

			<div className={isShowImage ? "modal active" : "modal"}>
				<div
					className="width-full height-100vh flex-center bg-black-02"
					onClick={() => setIsShowImage(false)}
				>
					<img
						className="width-auto height-600"
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
							onClick={() => setIsModal(true)}
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
							{galleries.map((gallery, index) => {
								return (
									<tr
										className="border-bottom-1 border-grey"
										key={index}
									>
										<td className="py-15">{index + 1}</td>
										<td className="py-15">
											<img
												className="width-250 height-auto cursor-pointer"
												src={gallery.image}
												onClick={() => {
													setImage(gallery.image);
													setIsShowImage(true);
												}}
												alt="coffee"
											/>
										</td>
										<td className="py-15">
											<button
												className="bg-red px-10 py-5 border-none cursor-pointer font-16 color-white border-radius-5"
												onClick={() => {
													setGalleryId(
														gallery.gallery_id
													);
													setIsBgAlert(true);
													setIsDangerAlert(true);
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

export default InputGallery;
