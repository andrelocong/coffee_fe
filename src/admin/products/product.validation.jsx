import * as Yup from "yup";

export const validation = Yup.object({
	name: Yup.string().required("Name is required"),
	category: Yup.string().required("Name is required"),
});

export const validationCategory = Yup.object({
	category: Yup.string().required("Category is required"),
});
