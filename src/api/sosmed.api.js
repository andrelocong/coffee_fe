import instance from "../config/axios/axios.config";

export const findDataApi = () => {
	return instance.get("/admin/sosmed");
};

export const deleteDataApi = (id) => {
	return instance.delete(`/admin/sosmed/${id}`);
};

export const storeDataApi = (sosmed, address) => {
	return instance.post("/admin/sosmed", {
		sosmed,
		address,
	});
};

export const updateDataApi = (id, sosmed, address) => {
	return instance.patch(`/admin/sosmed/${id}`, {
		sosmed,
		address,
	});
};
