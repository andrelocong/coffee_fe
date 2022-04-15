import instance from "../config/axios/axios.config";

export const findData = () => {
	return instance.get("/admin/order");
};
