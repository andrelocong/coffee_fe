import React, { useState } from "react";
import DangerAlert from "../components/DangerAlert";
import { useDelete } from "./team.hook";

const TeamDetail = (props) => {
	const id = props.values.id;
	const setIsDetailModal = props.setIsDetailModal;
	const showData = props.showData;
	const [isAlert, setIsAlert] = useState({
		bgAlert: false,
		dangerAlert: false,
	});

	const { deleteData } = useDelete(id, setIsDetailModal, showData);

	return (
		<div className="detail-item">
			<DangerAlert
				isAlert={isAlert}
				setIsAlert={setIsAlert}
				deleteData={deleteData}
			/>

			<div className={props.isDetailModal ? "modal active" : "modal"}>
				<div className="flex-center">
					<div className="flex width-auto height-auto bg-white border-radius-10 mt-100 p-20">
						<div className="width-auto height-488 mr-20">
							<img
								className="width-auto height-full object-fit-cover object-position-center"
								src={props.values.image}
								alt="user"
							/>
						</div>

						<div className="width-464 height-auto pr-20">
							<h1 className="text-capitalize mb-10">
								{props.values.name}
							</h1>
							<h3 className="text-capitalize m-0">
								{props.values.position}
							</h3>
							<p className="line-height-22">
								{props.values.desc}
							</p>
							<div className="flex mt-20">
								<button
									className="bg-orange px-10 py-5 border-none border-radius-5 cursor-pointer font-16 mx-5 color-white"
									type="button"
									onClick={() => {
										props.setIsDetailModal(false);
										setTimeout(() => {
											props.setIsEditModal(true);
										}, 150);
									}}
								>
									Edit
								</button>
								<button
									className="bg-white px-10 py-5 border-1 cursor-pointer font-16 color-black mx-5 border-radius-5"
									type="button"
									onClick={() => {
										props.setIsDetailModal(false);
										setTimeout(() => {
											props.setIsEditImageModal(true);
										}, 150);
									}}
								>
									Edit Image
								</button>
								<button
									className="bg-red px-10 py-5 border-none border-radius-5 cursor-pointer font-16 mx-5 color-white"
									type="button"
									onClick={() => {
										setIsAlert({
											bgAlert: true,
											dangerAlert: true,
										});
									}}
								>
									Delete
								</button>
								<button
									className="bg-grey px-10 py-5 border-none border-radius-5 cursor-pointer font-16 mx-5 color-white"
									type="button"
									onClick={() => {
										props.setIsDetailModal(false);
									}}
								>
									Back
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamDetail;
