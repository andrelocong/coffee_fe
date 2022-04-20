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
