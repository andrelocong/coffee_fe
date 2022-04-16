import instance from "../config/axios/axios.config";

export const findDataApi = () => {
	return instance.get("/admin/team");
};

/**
 *
 * @param {string} id
 * @returns
 */
export const deleteDataApi = (id) => {
	return instance.delete(`/admin/team/${id}`);
};

export const storeDataApi = (formData) => {
	return instance.post("/admin/team", formData);
};

/**
 *
 * @param {string} id
 * @param {string} name
 * @param {string} position
 * @param {string} desc
 * @returns
 */
export const updateDataApi = (id, name, position, desc) => {
	return instance.patch(`/admin/team/${id}`, {
		name,
		position,
		desc,
	});
};

export const updateImageApi = (id, formData) => {
	return instance.patch(`/admin/team/image/${id}`, formData);
};
