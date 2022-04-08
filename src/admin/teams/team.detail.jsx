import axios from "axios";
import React, { useState } from "react";
import DangerAlert from "../components/DangerAlert";

const TeamDetail = (props) => {
	const [name, setName] = useState("");
	const [position, setPosition] = useState("");
	const [desc, setDesc] = useState("");
	const [image, setImage] = useState("");
	const [isAlert, setIsAlert] = useState({
		bgAlert: false,
		dangerAlert: false,
	});

	console.log(setName, setPosition, setDesc, setImage);

	// const showDataById = async () => {
	// 	let teams = await axios.get(
	// 		`http://localhost:5000/team/${props.teamId}`
	// 	);
	// 	const team = teams.data.data;
	// 	setName(team.name);
	// 	setPosition(team.position);
	// 	setDesc(team.desc);
	// 	setImage(team.image);
	// };

	// useEffect(() => {
	// 	showDataById();
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

	const deleteData = async () => {
		await axios.delete(`http://localhost:5000/team/${props.teamId}`);

		props.showData();
		props.setIsDetailModal(false);
	};

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
								src={image}
								alt="user"
							/>
						</div>

						<div className="width-464 height-auto pr-20">
							<h1 className="text-capitalize mb-10">{name}</h1>
							<h3 className="text-capitalize m-0">{position}</h3>
							<p className="line-height-22">{desc}</p>
							<div className="flex mt-20">
								<button
									className="bg-orange px-10 py-5 border-none border-radius-5 cursor-pointer font-16 mx-5 color-white"
									type="button"
									onClick={() => {
										props.setIsDetailModal(false);
										setTimeout(() => {
											props.setIsEditModal(true);
										}, 150);
										props.setName(name);
										props.setPosition(position);
										props.setDesc(desc);
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
										props.setImage(image);
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
