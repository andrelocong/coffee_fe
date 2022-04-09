import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CreateRoleAccess from "./role.createAccess";
import DangerAlert from "../components/DangerAlert";
import { useFetchRoleAccess, useChange } from "./role.hook";

function RoleDetail() {
	const { id } = useParams();

	const [isCreateAccessModal, setIsCreateAccessModal] = useState(false);
	const [isAlert, setIsAlert] = useState({
		bgAlert: false,
		dangerAlert: false,
	});
	const [roleAccessId, setRoleAccessId] = useState("");

	const { name, data, showData, deleteData } = useFetchRoleAccess(
		id,
		roleAccessId
	);

	const { changeCanInsert, changeCanUpdate, changeCanDelete } =
		useChange(showData);

	return (
		<div className="detail-role">
			<CreateRoleAccess
				isCreateAccessModal={isCreateAccessModal}
				setIsCreateAccessModal={setIsCreateAccessModal}
				id={id}
				showData={showData}
			/>

			<DangerAlert
				isAlert={isAlert}
				setIsAlert={setIsAlert}
				deleteData={deleteData}
			/>

			<h1 className="my-40">Detail Role</h1>

			<div className="width-full bg-white border-radius-20 min-height-100vh mb-10">
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
						onClick={() => setIsCreateAccessModal(true)}
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
													changeCanInsert(
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
													changeCanUpdate(
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
													changeCanDelete(
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

export default RoleDetail;
