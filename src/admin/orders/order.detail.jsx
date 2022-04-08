import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailOrder() {
	const { id } = useParams();
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [product, setProduct] = useState("");
	const [mainCategory, setMainCategory] = useState("");
	const [category, setCategory] = useState("");
	const [subCategory, setSubCategory] = useState("");
	const [quantity, setQuantity] = useState("");
	const [note, setNote] = useState("");
	const [status, setStatus] = useState("");
	const [button, setButton] = useState(false);
	const [bgStatus, setBgStatus] = useState(false);

	const showData = async () => {
		let orders = await axios.get(`http://localhost:5000/order/${id}`);
		const order = orders.data.data;

		setName(order.name);
		setPhone(order.phone);
		setEmail(order.email);
		setProduct(order.product.name);
		setMainCategory(order.main_category.name);
		setCategory(order.category.name);
		setSubCategory(order.sub_category.name);
		setQuantity(order.quantity.quantity);
		setNote(order.note);
		setStatus(order.status);
		if (order.status === "pending") {
			setBgStatus(true);
			setButton(true);
		} else if (order.status === "approved") {
			setButton(false);
			setBgStatus(false);
		}
	};

	useEffect(() => {
		showData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const updateStatus = async () => {
		// e.preventDefault();
		await axios.patch(`http://localhost:5000/order/status/${id}`);

		showData();
	};
	return (
		<div className="detail-order">
			<div className="alig-item-center height-113">
				<div className="mr-20">
					<h1 className="m-0">Detail Order</h1>
				</div>
				<p
					className={
						bgStatus
							? "px-15 py-10 bg-red font-18 color-white font-weight-700 border-radius-20 text-capitalize"
							: "px-15 py-10 bg-green font-18 color-white font-weight-700 border-radius-20 text-capitalize"
					}
				>
					{status}
				</p>
			</div>

			<div className="width-full height-auto border-radius-20 bg-white">
				<div className="p-30 justify-space-between">
					<div className="width-510">
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Customer Name</h2>
							<p className="ml-6">{name}</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Phone</h2>
							<p className="ml-6">{phone}</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Email</h2>
							<p className="ml-6">{email}</p>
						</div>
						<div className="ml-6 mt-20">
							<button
								className="bg-orange px-15 py-10 border-none border-radius-10 color-white font-18 cursor-pointer button-disabled"
								disabled={button ? "" : "disabled"}
								onClick={() => updateStatus()}
							>
								Approved
							</button>
						</div>
					</div>
					<div className="width-510">
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Product</h2>
							<p className="ml-6">{product}</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Main Category</h2>
							<p className="ml-6">{mainCategory}</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Category</h2>
							<p className="ml-6">{category}</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Sub-Category</h2>
							<p className="ml-6">{subCategory}</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Quantity</h2>
							<p className="ml-6">{quantity}</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Note</h2>
							<p className="ml-6">{note}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailOrder;
