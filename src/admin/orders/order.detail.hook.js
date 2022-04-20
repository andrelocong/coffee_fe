import { useState, useEffect } from "react";
import { findDataByIdApi, updateStatusApi } from "../../api/order.api";

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
		let orders = await findDataByIdApi(id);
		const order = orders.data.data;

		if (order.main_category === null) {
			setValues({
				name: order.name,
				phone: order.phone,
				email: order.email,
				product: order.product.name,
				mainCategory: null,
				category: order.category.name,
				subCategory: order.sub_category.name,
				quantity: order.quantity.quantity,
				note: order.note,
				status: order.status,
			});
		} else if (order.category === null) {
			setValues({
				name: order.name,
				phone: order.phone,
				email: order.email,
				product: order.product.name,
				mainCategory: order.main_category.name,
				category: null,
				subCategory: order.sub_category.name,
				quantity: order.quantity.quantity,
				note: order.note,
				status: order.status,
			});
		} else if (order.sub_category === null) {
			setValues({
				name: order.name,
				phone: order.phone,
				email: order.email,
				product: order.product.name,
				mainCategory: order.main_category.name,
				category: order.category.name,
				subCategory: null,
				quantity: order.quantity.quantity,
				note: order.note,
				status: order.status,
			});
		} else {
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
		}
	};

	useEffect(() => {
		showData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const updateStatus = async (e) => {
		e.preventDefault();
		await updateStatusApi(id);

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
