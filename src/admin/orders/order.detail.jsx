import React from "react";
import { useParams } from "react-router-dom";
import { useFetchDetail } from "./order.hook";

function DetailOrder() {
	const { id } = useParams();

	const { values, updateStatus, isStatus } = useFetchDetail(id);
	return (
		<div className="detail-order">
			<div className="alig-item-center height-113">
				<div className="mr-20">
					<h1 className="m-0">Detail Order</h1>
				</div>
				<p
					className={`px-15 py-10 font-18 color-white font-weight-700 border-radius-20 text-capitalize ${
						isStatus() ? "bg-red" : "bg-green"
					}`}
				>
					{isStatus() ? "Pending" : "approved"}
				</p>
			</div>

			<div className="width-full height-auto border-radius-20 bg-white">
				<div className="p-30 justify-space-between">
					<div className="width-510">
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Customer Name</h2>
							<p className="ml-6 text-capitalize">
								{values.name}
							</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Phone</h2>
							<p className="ml-6">{values.phone}</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Email</h2>
							<p className="ml-6">{values.email}</p>
						</div>
						<div className="ml-6 mt-20">
							<button
								className="bg-orange px-15 py-10 border-none border-radius-10 color-white font-18 cursor-pointer button-disabled"
								type="submit"
								disabled={isStatus() ? "" : "disabled"}
								onClick={(e) => updateStatus(e)}
							>
								Approved
							</button>
						</div>
					</div>
					<div className="width-510">
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Product</h2>
							<p className="ml-6 text-capitalize">
								{values.product}
							</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Main Category</h2>
							<p className="ml-6 text-capitalize">
								{values.mainCategory}
							</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Category</h2>
							<p className="ml-6 text-capitalize">
								{values.category}
							</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Sub-Category</h2>
							<p className="ml-6 text-capitalize">
								{values.subCategory}
							</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Quantity</h2>
							<p className="ml-6 text-capitalize">
								{values.quantity}
							</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Note</h2>
							<p className="ml-6">{values.note}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailOrder;
