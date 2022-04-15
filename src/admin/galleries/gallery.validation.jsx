import * as Yup from "yup";

export const validation = Yup.object({
	category: Yup.string().required("Category is required"),
	image: Yup.string().required("Image is required"),
});
