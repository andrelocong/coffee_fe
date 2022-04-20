import instance from "../config/axios/axios.config";

export const findDataImageApi = () => {
	return instance.get("/gallery/data");
};

export const findDataTeamApi = () => {
	return instance.get("/team");
};
