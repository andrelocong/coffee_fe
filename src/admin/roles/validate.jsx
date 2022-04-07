import * as Yup from "yup";

export const validateName = Yup.object({
	name: Yup.string().required("Name is required"),
});

export const validateMenu = Yup.object({
	menu: Yup.string().required("Menu is required"),
});
