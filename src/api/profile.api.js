import instance from "../config/axios/axios.config";

export const findDataByIdApi = (id) => {
	return instance.get(`/admin/profile/${id}`);
};

export const updateDataProfileApi = (
	id,
	firstName,
	lastName,
	username,
	email,
	phone,
	role
) => {
	return instance.patch(`/admin/profile/${id}`, {
		firstName,
		lastName,
		username,
		email,
		phone,
		role,
	});
};

export const updateImageProfileApi = (id, formData) => {
	return instance.post(`/admin/profile/${id}`, formData);
};

export const updatePasswordApi = (id, oldPassword, newPassword) => {
	return instance.post(`/admin/profile/password/${id}`, {
		oldPassword,
		newPassword,
	});
};
