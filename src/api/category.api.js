import instance from "../config/axios/axios.config";

export const findDataApi = () => {
	return instance.get("/admin/category");
};

export const deleteDataApi = (id) => {
	return instance.delete(`/admin/category/${id}`);
};

export const storeDataApi = (name) => {
	return instance.post("/admin/category", {
		name,
	});
};

export const updateDataApi = (id, name) => {
	return instance.patch(`/admin/category/${id}`, {
		name,
	});
};
