import instance from "../config/axios/axios.config";

export const findDataApi = () => {
	return instance.get("/admin/role");
};

/**
 *
 * @param {string} id
 * @returns
 */
export const deleteDataApi = (id) => {
	return instance.delete(`/admin/role/${id}`);
};

/**
 *
 * @param {string} name
 * @returns
 */
export const storeDataApi = (name) => {
	return instance.post("/admin/role", {
		name,
	});
};

/**
 *
 * @param {string} id
 * @returns
 */
export const findOneDataApi = (id) => {
	return instance.get(`/admin/role/${id}`);
};
