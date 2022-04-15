import instance from "../config/axios/axios.config";

export const findDataApi = () => {
	return instance.get("/admin/quantity");
};

/**
 *
 * @param {string} id
 * @returns
 */
export const deleteDataApi = (id) => {
	return instance.delete(`/admin/quantity/${id}`);
};

/**
 *
 * @param {string} quantity
 * @returns
 */
export const storeDataApi = (quantity) => {
	return instance.post("/admin/quantity", {
		quantity,
	});
};

/**
 *
 * @param {string} id
 * @param {string} quantity
 * @returns
 */
export const updateDataApi = (id, quantity) => {
	return instance.patch(`/admin/quantity/${id}`, {
		quantity,
	});
};
