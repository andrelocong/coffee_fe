import axios from "axios";
import stores from "../../stores";

const instance = axios.create({
	baseURL: "http://localhost:5000/api",
	timeout: 1000,
});

instance.interceptors.request.use(
	function (config) {
		config.headers.authorization =
			"Barer " + stores.getState().token.accessToken;
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default instance;
