import axios from "axios";
import { store } from "../../stores";

const instance = axios.create({
	baseURL: "http://localhost:5000/api",
	timeout: 1000,
});

instance.interceptors.request.use(
	function (config) {
		config.headers.authorization =
			"Barer " + store.getState().token.accessToken;
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default instance;
