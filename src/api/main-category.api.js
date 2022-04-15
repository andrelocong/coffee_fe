import instance from "../config/axios/axios.config";

export const findDataApi = () => {
	return instance.get("/admin/main-category");
};

/**
 *
 * @param {string} id
 * @returns
 */
export const deleteDataApi = (id) => {
	return instance.delete(`/admin/main-category/${id}`);
};

/**
 *
 * @param {string} name
 * @returns
 */
export const storeDataApi = (name) => {
	return instance.post("/admin/main-category", {
		name,
	});
};

/**
 *
 * @param {string} id
 * @param {string} name
 * @returns
 */
export const updateDataApi = (id, name) => {
	return instance.patch(`/admin/main-category/${id}`, {
		name,
	});
};
