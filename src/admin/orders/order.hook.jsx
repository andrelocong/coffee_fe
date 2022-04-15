import axios from "axios";
import { useState, useEffect } from "react";
import { findData } from "../../api/order.api";

export const useFetch = () => {
	const [data, setData] = useState([]);

	const showData = async () => {
		const order = await findData();
		setData(order.data.data);
	};

	const formatter = new Intl.DateTimeFormat("en-GB", {
		year: "numeric",
		month: "long",
		day: "2-digit",
	});

	useEffect(() => {
		showData();
	}, []);

	const isStatus = (status) => {
		if (status === 0) {
			return true;
		}
		return false;
	};

	return { data, isStatus, formatter };
};

export const useFetchDetail = (id) => {
	const [values, setValues] = useState({
		name: "",
		phone: "",
		email: "",
		product: "",
		mainCategory: "",
		category: "",
		subCategory: "",
		quantity: "",
		note: "",
		status: "",
	});

	const showData = async () => {
		let orders = await axios.get(`http://localhost:5000/order/${id}`);
		const order = orders.data.data;

		setValues({
			name: order.name,
			phone: order.phone,
			email: order.email,
			product: order.product.name,
			mainCategory: order.main_category.name,
			category: order.category.name,
			subCategory: order.sub_category.name,
			quantity: order.quantity.quantity,
			note: order.note,
			status: order.status,
		});
	};

	useEffect(() => {
		showData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const updateStatus = async (e) => {
		e.preventDefault();
		await axios.patch(`http://localhost:5000/order/status/${id}`);

		showData();
	};

	const isStatus = () => {
		if (values.status === 0) {
			return true;
		}
		return false;
	};

	return { values, updateStatus, isStatus };
};
