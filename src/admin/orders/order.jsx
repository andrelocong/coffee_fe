import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "./order.hook";

function OrderList() {
	const { data, isStatus, formatter } = useFetch();
	return (
		<div className="content width-full">
			<h1 className="my-40">Order Lists</h1>

			<div className="width-full bg-white border-radius-20 min-height-590 mb-10">
				<div className="p-30">
					<div className="width-300 border-2 border-orange border-radius-5 flex-center">
						<i className="fas fa-search px-20 py-9 mr-5 border-right-2 border-orange"></i>
						<input
							className="width-full px-15 py-11 border-none outline-none"
							type="search"
							placeholder="Search"
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
								<th className="py-11">Date</th>
								<th className="py-11">Name</th>
								<th className="py-11">Phone</th>
								<th className="py-11">Product</th>
								<th className="py-11">Status</th>
								<th className="py-11 border-radius-right-10">
									Action
								</th>
							</tr>
						</thead>
						<tbody className="border-spacing-1">
							{data.map((order, index) => {
								return (
									<tr
										className="border-bottom-1 border-grey"
										key={index}
									>
										<td className="py-15">{index + 1}</td>
										<td className="py-15">
											{formatter.format(
												Date.parse(order.createdAt)
											)}
										</td>
										<td className="py-15">{order.name}</td>
										<td className="py-15">{order.phone}</td>
										<td className="py-15">
											{order.product.name}
										</td>
										<td className="py-15">
											<span
												className={`py-10 px-15 border-radius-20 color-white text-capitalize font-weight-700 ${
													isStatus(order.status)
														? "bg-red"
														: "bg-green"
												}`}
											>
												{isStatus(order.status)
													? "pending"
													: "approved"}
											</span>
										</td>
										<td className="py-15">
											<Link
												className="bg-orange px-10 py-5 border-none border-radius-5 color-white cursor-pointer font-16 text-decoration-none"
												to={`/admin/order-list/detail/${order.order_id}`}
											>
												Detail
											</Link>
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

export default OrderList;
