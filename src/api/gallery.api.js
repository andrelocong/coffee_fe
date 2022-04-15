import instance from "../config/axios/axios.config";

export const findDataApi = () => {
	return instance.get("/admin/gallery");
};

/**
 *
 * @param {string} id
 * @returns
 */
export const deleteDataApi = (id) => {
	return instance.delete(`/admin/gallery/${id}`);
};

export const storeDataApi = (formData) => {
	return instance.post("/admin/upload/image", formData);
};
