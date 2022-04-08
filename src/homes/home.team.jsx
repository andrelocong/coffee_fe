import React, { useEffect, useState } from "react";
import axios from "axios";

const Team = () => {
	const [isModal, setIsModal] = useState(false);
	const [imgTmp, setImgTmp] = useState("");
	const [nameTmp, setNameTmp] = useState("");
	const [positionTmp, setPositionTmp] = useState("");
	const [descTmp, setDescTmp] = useState("");
	const [team, setTeam] = useState([]);

	const showTeam = async () => {
		const team = await axios.get("http://localhost:5000/team");

		setTeam(team.data.data);
	};

	useEffect(() => {
		showTeam();
	}, []);

	const handleModal = (image, name, position, desc) => {
		setImgTmp(image);
		setNameTmp(name);
		setPositionTmp(position);
		setDescTmp(desc);
		setIsModal(true);
	};
	return (
		<div className="team container bg-grey">
			<div
				className={isModal ? "modal active" : "modal"}
				onClick={() => setIsModal(false)}
			>
				<div className="modal-content">
					<div className="modal-body">
						<div
							className="modal-left"
							onClick={(e) => e.stopPropagation()}
						>
							<img
								className="modal-img"
								src={imgTmp}
								alt="team"
							/>
						</div>
						<div
							className="modal-right"
							onClick={(e) => e.stopPropagation()}
						>
							<h3 className="team-name">{nameTmp}</h3>
							<p className="team-position">{positionTmp}</p>
							<p className="team-desc">{descTmp}</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container-body">
				<h3 className="home-title text-center">Our Team</h3>
				<div className="row">
					{team.map((data, index) => {
						return (
							<div
								className="team-group"
								key={index}
								onClick={() =>
									handleModal(
										data.image,
										data.name,
										data.position,
										data.desc
									)
								}
							>
								<div className="team-img">
									<img src={data.image} alt="team" />
								</div>
								<div className="text-left mt-22">
									<h4 className="font-nunito font-20 mb-5">
										{data.name}
									</h4>
									<p className="m-0 font-18 font-nunito">
										{data.position}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Team;
