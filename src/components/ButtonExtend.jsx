import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const ButtonExtend = () => {
	const [data, setData] = useState({
		whatsapp: "",
		telegram: "",
	});

	const showData = async () => {
		const whatsapp = await axios.get(
			"http://localhost:5000/api/sosmed?sosmed=whatsapp"
		);

		const telegram = await axios.get(
			"http://localhost:5000/api/sosmed?sosmed=telegram"
		);

		setData({
			whatsapp: whatsapp.data.data.address,
			telegram: telegram.data.data.address,
		});
	};

	useEffect(() => {
		showData();
	}, []);

	return (
		<div className="button-ex flex">
			<div className="bg-rounded bg-orange">
				<a href={data.telegram} target="_blank" rel="noreferrer">
					<i className="fab fa-telegram-plane icon-brand"></i>
				</a>
			</div>
			<div className="bg-rounded bg-orange">
				<a href={data.whatsapp} target="_blank" rel="noreferrer">
					<i className="fab fa-whatsapp icon-brand"></i>
				</a>
			</div>
		</div>
	);
};

export default ButtonExtend;
