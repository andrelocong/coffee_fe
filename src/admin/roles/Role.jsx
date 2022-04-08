import React, { useState, useEffect } from "react";
import axios from "axios";
import RoleCreate from "./role.create";
import DangerAlert from "../components/DangerAlert";
import { Link } from "react-router-dom";

function Role() {
	const [isCreateModal, setIsCreateModal] = useState(false);
	const [data, setData] = useState([]);
	const [roleId, setRoleId] = useState("");
	const [isAlert, setIsAlert] = useState({
		bgAlert: false,
		dangerAlert: false,
	});

	const showData = async () => {
		const category = await axios.get("http://localhost:5000/role");

		setData(category.data.data);
	};

	useEffect(() => {
		showData();
	}, []);

	const deleteData = async () => {
		await axios.delete(`http://localhost:5000/role/${roleId}`);

		showData();
	};

	return (
		<div className="role">
			<RoleCreate
				isCreateModal={isCreateModal}
				setIsCreateModal={setIsCreateModal}
				showData={showData}
			/>

			<DangerAlert
				isAlert={isAlert}
				setIsAlert={setIsAlert}
				deleteData={deleteData}
			/>
			<h1 className="my-40">Roles</h1>

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
								<th className="py-11 border-radius-right-10">
									Action
								</th>
							</tr>
						</thead>
						<tbody id="table-body">
							{data.map((role, index) => {
								return (
									<tr
										className="border-bottom-1 border-grey"
										key={index}
									>
										<td className="py-15">{index + 1}</td>
										<td className="py-15 text-capitalize">
											{role.name}
										</td>
										<td className="py-15">
											<Link
												className="bg-orange px-10 py-5 border-none border-radius-10 color-white font-16 cursor-pointer text-decoration-none mr-10"
												to={`/admin/role/detail/${role.role_id}`}
											>
												Detail
											</Link>
											<button
												className="bg-red px-10 py-5 border-none border-radius-10 color-white font-16 cursor-pointer"
												onClick={() => {
													setRoleId(role.role_id);
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

export default Role;
