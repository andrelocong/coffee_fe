import instance from "../config/axios/axios.config";

/**
 *
 * @param {string} id
 * @returns
 */
export const findDataApi = (id) => {
	return instance.get(`/admin/role-access/${id}`);
};
/**
 *
 * @param {string} roleAccessId
 * @returns
 */
export const deleteDataApi = (roleAccessId) => {
	return instance.delete(`/admin/role-access/${roleAccessId}`);
};

/**
 *
 * @param {string} menu
 * @param {string} id
 * @returns
 */
export const storeDataApi = (menu, roleId) => {
	return instance.post("/admin/role-access", {
		menu,
		roleId,
	});
};

/**
 *
 * @param {string} value
 * @param {string} id
 * @returns
 */
export const updateCanInsertApi = (value, id) => {
	return instance.patch(`/admin/role-access/${id}`, {
		canInsert: value,
	});
};

/**
 *
 * @param {string} value
 * @param {string} id
 * @returns
 */
export const updateCanUpdateApi = (value, id) => {
	return instance.patch(`/admin/role-access/${id}`, {
		canUpdate: value,
	});
};

/**
 *
 * @param {string} value
 * @param {string} id
 * @returns
 */
export const updateCanDeleteApi = (value, id) => {
	return instance.patch(`/admin/role-access/${id}`, {
		canDelete: value,
	});
};
