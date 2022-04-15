import instance from "../config/axios/axios.config";

/**
 *
 * @param {string} username
 * @param {string} password
 * @returns
 */
export const login = (username, password) => {
	return instance.post("/login", {
		username,
		password,
	});
};
