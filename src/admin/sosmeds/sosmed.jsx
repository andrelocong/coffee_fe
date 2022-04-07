import axios from "axios";
import React, { useEffect, useState } from "react";
import SosmedCreate from "./sosmed.create.jsx";
import SosmedEdit from "./sosmed.edit.jsx";
import DangerAlert from "../components/DangerAlert.jsx";

function SosmedList() {
	const [isModal, setIsModal] = useState(false);
	const [data, setData] = useState([]);
	const [isEditModal, setIsEditModal] = useState(false);
	const [sosmedId, setSosmedId] = useState("");
	const [sosmed, setSosmed] = useState("");
	const [address, setAddress] = useState("");
	const [isBgAlert, setIsBgAlert] = useState(false);
	const [isDangerAlert, setIsDangerAlert] = useState(false);

	console.log(data);

	const showData = async () => {
		const sosmed = await axios.get("http://localhost:5000/sosmed");

		setData(sosmed.data.data);
	};

	useEffect(() => {
		showData();
	}, []);

	const deleteData = async () => {
		await axios.delete(`http://localhost:5000/sosmed/${sosmedId}`);

		setSosmedId("");
		showData();
	};

	return (
		<div className="sosmed-list width-full">
			<SosmedCreate
				isModal={isModal}
				setIsModal={setIsModal}
				showData={showData}
			/>

			<SosmedEdit
				isEditModal={isEditModal}
				sosmedId={sosmedId}
				sosmed={sosmed}
				address={address}
				setIsEditModal={setIsEditModal}
				setSosmedId={setSosmedId}
				setSosmed={setSosmed}
				setAddress={setAddress}
				showData={showData}
			/>

			<DangerAlert
				isBgAlert={isBgAlert}
				isDangerAlert={isDangerAlert}
				setIsBgAlert={setIsBgAlert}
				setIsDangerAlert={setIsDangerAlert}
				deleteData={deleteData}
			/>

			<h1 className="my-40">Sosial Media</h1>

			<div className="width-full bg-white border-radius-20 min-height-100vh pb-20">
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
								<th className="py-11">Sosmed</th>
								<th className="py-11">Addres</th>
								<th className="py-11 border-radius-right-10">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{data.map((sosmed, index) => {
								return (
									<tr
										className="border-botom-1 border-grey"
										key={index}
									>
										<td className="py-15">{index + 1}</td>
										<td className="py-15 text-capitalize">
											{sosmed.name}
										</td>
										<td className="py-15">
											{sosmed.address}
										</td>
										<td className="py-15">
											<button
												className="bg-orange px-10 py-5 border-none cursor-pointer font-16 color-white mr-5 border-radius-5"
												type="button"
												onClick={() => {
													setSosmedId(
														sosmed.sosmed_id
													);
													setSosmed(sosmed.name);
													setAddress(sosmed.address);
													setIsEditModal(true);
												}}
											>
												Edit
											</button>
											<button
												className="bg-red px-10 py-5 border-none cursor-pointer font-16 color-white border-radius-5"
												type="button"
												onClick={() => {
													setSosmedId(
														sosmed.sosmed_id
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

export default SosmedList;
