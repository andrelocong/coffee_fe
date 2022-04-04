import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateTeam from "./CreateTeam";
import DetailTeam from "./DetailTeam";
import EditTeam from "./EditTeam";
import EditImageTeam from "./EditImageTeam";
import DangerAlert from "../components/DangerAlert";

function TeamList() {
	const [isModal, setIsModal] = useState(false);
	const [data, setData] = useState([]);
	const [teamId, setTeamId] = useState("");
	const [isDetailModal, setIsDetailModal] = useState(false);
	const [isEditModal, setIsEditModal] = useState(false);
	const [name, setName] = useState("");
	const [position, setPosition] = useState("");
	const [desc, setDesc] = useState("");
	const [isImageModal, setIsImageModal] = useState(false);
	const [image, setImage] = useState("");
	const [imageUpload, setImageUpload] = useState("");
	const [isBgAlert, setIsBgAlert] = useState(false);
	const [isDangerAlert, setIsDangerAlert] = useState(false);

	const showData = async (e) => {
		const team = await axios.get("http://localhost:5000/team");

		setData(team.data.data);
	};

	useEffect(() => {
		showData();
	}, []);

	const deleteData = async () => {
		await axios.delete(`http://localhost:5000/team/${teamId}`);

		showData();
		setIsDetailModal(false);
	};

	return (
		<div className="team-list">
			<CreateTeam
				isModal={isModal}
				setIsModal={setIsModal}
				showData={showData}
			/>

			<DetailTeam
				isDetailModal={isDetailModal}
				setIsDetailModal={setIsDetailModal}
				teamId={teamId}
				setIsEditModal={setIsEditModal}
				setName={setName}
				setPosition={setPosition}
				setDesc={setDesc}
				setIsImageModal={setIsImageModal}
				setImage={setImage}
				setIsBgAlert={setIsBgAlert}
				setIsDangerAlert={setIsDangerAlert}
			/>

			<EditTeam
				isEditModal={isEditModal}
				setIsEditModal={setIsEditModal}
				name={name}
				position={position}
				desc={desc}
				setName={setName}
				setPosition={setPosition}
				setDesc={setDesc}
				teamId={teamId}
				showData={showData}
			/>

			<EditImageTeam
				isImageModal={isImageModal}
				image={image}
				imageUpload={imageUpload}
				setIsImageModal={setIsImageModal}
				setImage={setImage}
				setImageUpload={setImageUpload}
				teamId={teamId}
			/>

			<DangerAlert
				isBgAlert={isBgAlert}
				isDangerAlert={isDangerAlert}
				setIsBgAlert={setIsBgAlert}
				setIsDangerAlert={setIsDangerAlert}
				deleteData={deleteData}
			/>

			<h1 className="my-40">Teams</h1>

			<div className="width-full bg-white border-radius-20 height-100vh mb-10">
				<div className="p-30 flex">
					<div className="width-150">
						<button
							className="btn-orange cursor-pointer"
							onClick={() => setIsModal(true)}
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
													setTeamId(team.team_id);
												}}
											>
												Detail
											</button>
											<button
												className="bg-orange px-10 py-5 border-none cursor-pointer font-16 color-white mr-5 border-radius-5"
												type="button"
												onClick={() => {
													setIsEditModal(true);
													setName(team.name);
													setPosition(team.position);
													setDesc(team.desc);
													setTeamId(team.team_id);
												}}
											>
												Edit
											</button>
											<button
												className="bg-white px-10 py-5 border-1 cursor-pointer font-16 color-black mr-5 border-radius-5"
												type="button"
												onClick={() => {
													setIsImageModal(true);
													setImage(team.image);
													setTeamId(team.team_id);
												}}
											>
												Edit Image
											</button>
											<button
												className="bg-red px-10 py-5 border-none cursor-pointer font-16 color-white mr-5 border-radius-5"
												type="button"
												onClick={() => {
													setTeamId(team.team_id);
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

export default TeamList;
