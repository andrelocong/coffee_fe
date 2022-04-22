import { useState, useEffect, useRef } from "react";
import { findData } from "../../api/order.api";

export const useFetch = () => {
	const [data, setData] = useState([]);
	let interval = useRef(null);

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
		interval.current = setInterval(() => {
			showData();
		}, 30000);

		return () => {
			if (interval.current) {
				clearInterval(interval);
			}
		};
	}, []);

	const isStatus = (status) => {
		if (status === 0) {
			return true;
		}
		return false;
	};

	return { data, isStatus, formatter };
};
