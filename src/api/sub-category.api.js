import instance from "../config/axios/axios.config";

export const findDataApi = () => {
	return instance.get("/admin/sub-category");
};

/**
 *
 * @param {string} id
 * @returns
 */
export const deleteDataApi = (id) => {
	return instance.delete(`/admin/sub-category/${id}`);
};

/**
 *
 * @param {string} name
 * @returns
 */
export const storeDataApi = (name) => {
	return instance.post("/admin/sub-category", {
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
	return instance.patch(`/admin/sub-category/${id}`, {
		name,
	});
};
