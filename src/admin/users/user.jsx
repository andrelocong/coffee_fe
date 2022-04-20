import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserCreate from "./user.create";
import DangerAlert from "../components/DangerAlert";
import { useUser } from "./user.hook";

function User() {
	const [isDanger, setIsDanger] = useState({
		bgAlert: false,
		dangerAlert: false,
	});

	const {
		data,
		setId,
		deleteData,
		showRoles,
		formikStore,
		errors,
		isAlert,
		isCreateModal,
		setIsCreateModal,
	} = useUser();

	return (
		<div className="user-list">
			<UserCreate
				isCreateModal={isCreateModal}
				setIsCreateModal={setIsCreateModal}
				formik={formikStore}
				isAlert={isAlert}
				showRoles={showRoles}
				errors={errors}
			/>

			<DangerAlert
				isAlert={isDanger}
				setIsAlert={setIsDanger}
				deleteData={deleteData}
			/>

			<h1 className="my-40">Users</h1>

			<div className="width-full bg-white border-radius-20 min-height-590 mb-10">
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
								<th className="py-11">Username</th>
								<th className="py-11">Email</th>
								<th className="py-11">Role</th>
								<th className="py-11 border-radius-right-10">
									Action
								</th>
							</tr>
						</thead>
						<tbody id="table-body">
							{data.map((user, index) => {
								return (
									<tr
										className="border-bottom-1 border-grey"
										key={index}
									>
										<td className="py-15">{index + 1}</td>
										<td className="py-15 text-capitalize">
											{user.first_name} <span> </span>
											{user.last_name}
										</td>
										<td className="py-15">
											{user.username}
										</td>
										<td className="py-15">{user.email}</td>
										<td className="py-15">
											{user.role.name}
										</td>
										<td className="py-15 justify-center">
											<Link
												className="bg-orange px-10 py-5 border-none font-16 cursor-pointer color-white mr-5 border-radius-5 text-decoration-none"
												to={`/admin/user-list/detail/${user.user_id}`}
											>
												Detail
											</Link>
											<div
												onClick={() => {
													setId(user.user_id);
													setIsDanger({
														bgAlert: true,
														dangerAlert: true,
													});
												}}
											>
												<button
													className="bg-red px-10 py-5 border-none font-16 cursor-pointer color-white mr-5 border-radius-5"
													type="button"
												>
													Delete
												</button>
											</div>
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

export default User;
