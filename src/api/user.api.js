import instance from "../config/axios/axios.config";

export const findDataApi = () => {
	return instance.get("/admin/user");
};

/**
 *
 * @param {string} id
 * @returns
 */
export const deleteDataApi = (id) => {
	return instance.delete(`/admin/user/${id}`);
};

/**
 *
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} username
 * @param {string} password
 * @param {string} role
 * @returns
 */
export const storeDataApi = (firstName, lastName, username, password, role) => {
	return instance.post("/admin/user", {
		firstName,
		lastName,
		username,
		password,
		role,
	});
};

export const findDataByIdUserApi = (id) => {
	return instance.get(`/admin/user/${id}`);
};

export const updateDataApi = (
	id,
	firstName,
	lastName,
	username,
	email,
	phone,
	role
) => {
	return instance.patch(`/admin/user/${id}`, {
		firstName,
		lastName,
		username,
		email,
		phone,
		role,
	});
};

export const updateImageApi = (id, formData) => {
	return instance.patch(`/admin/user/image/${id}`, formData);
};

export const findImageProfileApi = (id) => {
	return instance.post(`/admin/user/image/profile/${id}`);
};
