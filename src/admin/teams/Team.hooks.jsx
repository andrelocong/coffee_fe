import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = () => {
	const [data, setData] = useState([]);

	const showData = async () => {
		const team = await axios.get("http://localhost:5000/team");

		setData(team.data.data);
	};

	useEffect(() => {
		showData();
	}, []);

	return { data, showData };
};

export const useDelete = (id) => {
	const { showData } = useFetch();

	const deleteData = async () => {
		await axios.delete(`http://localhost:5000/team/${id}`);

		showData();
	};

	return { deleteData };
};
