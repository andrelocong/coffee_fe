import instance from "../config/axios/axios.config";

export const findData = () => {
	return instance.get("/admin/order");
};

export const findDataByIdApi = (id) => {
	return instance.get(`/admin/order/${id}`);
};

export const updateStatusApi = (id) => {
	return instance.patch(`/admin/order/status/${id}`);
};
