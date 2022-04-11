import React, { useState } from "react";
import "./order.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ButtonExtend from "../components/ButtonExtend";
import SuccessAlert from "../admin/components/SuccessAlert";
import OrderForm from "./order.form";

function Order() {
	const [isAlert, setIsAlert] = useState(false);

	return (
		<div className="order">
			<ButtonExtend />
			<Hero />

			<SuccessAlert isAlert={isAlert} text="Order sent!" />

			<div className="order-body">
				<h1 className="order-title">make your order</h1>
				<OrderForm setIsAlert={setIsAlert} />
			</div>

			<Footer />
		</div>
	);
}

export default Order;
