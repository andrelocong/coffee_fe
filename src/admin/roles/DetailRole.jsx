import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateRoleAccess from "./CreateRoleAccess";
import DangerAlert from "../components/DangerAlert";

function DetailRole() {
	const { id } = useParams();
	const [name, setName] = useState("");
	const [data, setData] = useState([]);
	const [isModal, setIsModal] = useState(false);
	const [isBgAlert, setIsBgAlert] = useState(false);
	const [isDangerAlert, setIsDangerAlert] = useState(false);
	const [roleAccessId, setRoleAccessId] = useState("");

	const showData = async () => {
		const role = await axios.get(`http://localhost:5000/role/${id}`);
		setName(role.data.data.name);
		setData(role.data.data.role_accesses);
	};

	useEffect(() => {
		showData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const updateCanInsert = async (e, id) => {
		const value = e.target.value;
		if (value >= "0") {
			await axios.patch(`http://localhost:5000/role-access/${id}`, {
				canInsert: value,
			});

			showData();
		}
	};

	const updateCanUpdate = async (e, id) => {
		const value = e.target.value;
		if (value >= "0") {
			await axios.patch(`http://localhost:5000/role-access/${id}`, {
				canUpdate: value,
			});

			showData();
		}
	};

	const updateCanDelete = async (e, id) => {
		const value = e.target.value;
		if (value >= "0") {
			await axios.patch(`http://localhost:5000/role-access/${id}`, {
				canDelete: value,
			});

			showData();
		}
	};

	const deleteData = async () => {
		await axios.delete(`http://localhost:5000/role-access/${roleAccessId}`);

		showData();
	};

	return (
		<div className="detail-role">
			<CreateRoleAccess
				isModal={isModal}
				setIsModal={setIsModal}
				id={id}
				showData={showData}
			/>

			<DangerAlert
				isBgAlert={isBgAlert}
				isDangerAlert={isDangerAlert}
				setIsBgAlert={setIsBgAlert}
				setIsDangerAlert={setIsDangerAlert}
				deleteData={deleteData}
			/>

			<h1 className="my-40">Detail Role</h1>

			<div className="width-full bg-white border-radius-20 height-100vh mb-10">
				<div className="p-30">
					<div className="flex">
						<p className="my-10 width-150 font-weight-700">Id</p>
						<p className="my-10">
							: <span>{id}</span>
						</p>
					</div>
					<div className="flex">
						<p className="my-10 width-150 font-weight-700">
							Role name
						</p>
						<p className="my-10">
							: <span className="text-capitalize">{name}</span>
						</p>
					</div>
				</div>

				<div className="px-30 pb-20">
					<button
						className="bg-orange px-15 py-10 border-none border-radius-5 cursor-pointer font-16 color-white mr-10"
						onClick={() => setIsModal(true)}
					>
						Add Menu
					</button>
				</div>

				<div className="px-30 pb-30">
					<table className="width-full text-center border-collapse">
						<thead className="bg-orange color-white">
							<tr>
								<th className="border-radius-left-10 py-11">
									No
								</th>
								<th className="py-11">Menu</th>
								<th className="py-11">Can Insert</th>
								<th className="py-11">Can Update</th>
								<th className="py-11">Can Delete</th>
								<th className="py-11 border-radius-right-10">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{data.map((role, index) => {
								return (
									<tr
										className="border-bottom-1 border-grey"
										key={index}
									>
										<td className="py-15">{index + 1}</td>
										<td className="py-15 text-capitalize">
											{role.menu}
										</td>
										<td className="py-15">
											<select
												className="font-16 border-none cursor-pointer appearance-none outline-none"
												value={role.can_insert}
												onChange={(e) =>
													updateCanInsert(
														e,
														role.role_access_id
													)
												}
											>
												<option value="0">false</option>
												<option value="1">true</option>
											</select>
										</td>
										<td className="py-15">
											<select
												className="font-16 border-none cursor-pointer appearance-none outline-none"
												value={role.can_update}
												onChange={(e) =>
													updateCanUpdate(
														e,
														role.role_access_id
													)
												}
											>
												<option value="0">false</option>
												<option value="1">true</option>
											</select>
										</td>
										<td className="py-15">
											<select
												className="font-16 border-none cursor-pointer appearance-none outline-none"
												value={role.can_delete}
												onChange={(e) =>
													updateCanDelete(
														e,
														role.role_access_id
													)
												}
											>
												<option value="0">false</option>
												<option value="1">true</option>
											</select>
										</td>
										<td className="py-15">
											<button
												className="bg-red px-10 py-5 border-none border-radius-10 color-white font-16 cursor-pointer"
												onClick={() => {
													setRoleAccessId(
														role.role_access_id
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

export default DetailRole;
