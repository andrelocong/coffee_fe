import React, { useState } from "react";
import QuantityCreate from "./quantity.create";
import QuantityEdit from "./quantity.edit";
import DangerAlert from "../components/DangerAlert";
import { useFetch } from "./quantity.hook";

function Quantity() {
	const [isCreateModal, setIsCreateModal] = useState(false);
	const [id, setId] = useState("");
	const [quantity, setQuantity] = useState("");
	const [isEditModal, setIsEditModal] = useState(false);
	const [isAlert, setIsAlert] = useState({
		bgAlert: false,
		dangerAlert: false,
	});

	const { data, showData, deleteData } = useFetch(id);

	return (
		<div className="quantity">
			<QuantityCreate
				isCreateModal={isCreateModal}
				setIsCreateModal={setIsCreateModal}
				showData={showData}
			/>

			<QuantityEdit
				isEditModal={isEditModal}
				setIsEditModal={setIsEditModal}
				setQuantity={setQuantity}
				quantity={quantity}
				id={id}
				showData={showData}
			/>

			<DangerAlert
				isAlert={isAlert}
				setIsAlert={setIsAlert}
				deleteData={deleteData}
			/>

			<h1 className="my-40">Quantities</h1>

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
								<th className="py-11">Quantity</th>
								<th className="py-11 border-radius-right-10">
									Action
								</th>
							</tr>
						</thead>
						<tbody id="table-body">
							{data.map((quantity, index) => {
								return (
									<tr
										className="border-bottom-1 border-grey"
										key={index}
									>
										<td className="py-15">{index + 1}</td>
										<td className="py-15 text-capitalize">
											{quantity.quantity}
										</td>
										<td className="py-15">
											<button
												className="bg-orange px-10 py-5 border-none cursor-pointer font-16 color-white mr-5 border-radius-5"
												onClick={() => {
													setId(quantity.quantity_id);
													setQuantity(
														quantity.quantity
													);
													setIsEditModal(true);
												}}
											>
												Edit
											</button>
											<button
												className="bg-red px-10 py-5 border-none cursor-pointer font-16 color-white mr-5 border-radius-5"
												onClick={() => {
													setIsAlert({
														bgAlert: true,
														dangerAlert: true,
													});
													setId(quantity.quantity_id);
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

export default Quantity;
