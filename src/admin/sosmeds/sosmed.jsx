import React, { useState } from "react";
import SosmedCreate from "./sosmed.create.jsx";
import SosmedEdit from "./sosmed.edit.jsx";
import DangerAlert from "../components/DangerAlert.jsx";
import { useFetch } from "./sosmed.hook.js";

function SosmedList() {
	const [isCreateModal, setIsCreateModal] = useState(false);
	const [isEditModal, setIsEditModal] = useState(false);
	const [id, setId] = useState("");
	const [values, setValues] = useState({
		sosmed: "",
		address: "",
	});
	const [isAlert, setIsAlert] = useState({
		bgAlert: false,
		dangerAlert: false,
	});

	const { data, showData, deleteData } = useFetch(id);

	return (
		<div className="sosmed-list width-full">
			<SosmedCreate
				isCreateModal={isCreateModal}
				setIsCreateModal={setIsCreateModal}
				showData={showData}
			/>

			<SosmedEdit
				isEditModal={isEditModal}
				setIsEditModal={setIsEditModal}
				id={id}
				values={values}
				setValues={setValues}
				showData={showData}
			/>

			<DangerAlert
				isAlert={isAlert}
				setIsAlert={setIsAlert}
				deleteData={deleteData}
			/>

			<h1 className="my-40">Sosial Media</h1>

			<div className="width-full bg-white border-radius-20 min-height-100vh pb-20">
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
											{sosmed.sosmed}
										</td>
										<td className="py-15">
											{sosmed.address}
										</td>
										<td className="py-15">
											<button
												className="bg-orange px-10 py-5 border-none cursor-pointer font-16 color-white mr-5 border-radius-5"
												type="button"
												onClick={() => {
													setId(sosmed.sosmed_id);
													setValues({
														sosmed: sosmed.sosmed,
														address: sosmed.address,
													});
													setIsEditModal(true);
												}}
											>
												Edit
											</button>
											<button
												className="bg-red px-10 py-5 border-none cursor-pointer font-16 color-white border-radius-5"
												type="button"
												onClick={() => {
													setId(sosmed.sosmed_id);
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

export default SosmedList;
