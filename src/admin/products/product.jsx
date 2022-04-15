import React, { useState } from "react";
import ProductCreate from "./product.create";
import ProductEdit from "./product.edit";
import DangerAlert from "../components/DangerAlert";
import { Link } from "react-router-dom";
import { useFetch } from "./product.hook";

function ProductList() {
	const [isCreateModal, setIsCreateModal] = useState(false);
	const [isEditModal, setIsEditModal] = useState(false);
	const [isAlert, setIsAlert] = useState({
		bgAlert: false,
		dangerAlert: false,
	});
	const [values, setValues] = useState({
		id: "",
		name: "",
		category: "",
	});

	const { data, showData, deleteData, handleSearch } = useFetch(values.id);

	return (
		<div className="product-list width-full">
			<ProductCreate
				isCreateModal={isCreateModal}
				setIsCreateModal={setIsCreateModal}
				showData={showData}
			/>

			<ProductEdit
				isEditModal={isEditModal}
				setIsEditModal={setIsEditModal}
				values={values}
				setValues={setValues}
				showData={showData}
			/>

			<DangerAlert
				isAlert={isAlert}
				setIsAlert={setIsAlert}
				deleteData={deleteData}
			/>

			<h1 className="my-40">Product Lists</h1>

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
							onKeyUp={(e) => handleSearch(e.target.value)}
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
								<th className="py-11">Category</th>
								<th className="py-11 border-radius-right-10">
									Action
								</th>
							</tr>
						</thead>
						<tbody id="table-body">
							{data.map((product, index) => {
								return (
									<tr
										className="border-bottom-1 border-grey"
										key={index}
									>
										<td className="py-15">{index + 1}</td>
										<td className="py-15 text-left pl-50 text-capitalize">
											{product.name}
										</td>
										<td className="py-15 text-capitalize">
											{product.category}
										</td>
										<td className="py-15">
											<Link
												className="bg-grey px-10 py-5 border-none font-16 cursor-pointer color-white mr-5 border-radius-5 text-decoration-none"
												to={`/admin/product-detail/${product.product_id}`}
											>
												Detail
											</Link>
											<button
												className="bg-orange px-10 py-5 border-none cursor-pointer font-16 color-white mr-5 border-radius-5"
												type="button"
												onClick={() => {
													setValues({
														id: product.product_id,
														name: product.name,
														category:
															product.category,
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
													setValues({
														id: product.product_id,
														name: "",
														category: "",
													});
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

export default ProductList;
