import * as Yup from "yup";

export const validationName = Yup.object({
	name: Yup.string().required("Name is required"),
});

export const validationMenu = Yup.object({
	menu: Yup.string().required("Menu is required"),
});
