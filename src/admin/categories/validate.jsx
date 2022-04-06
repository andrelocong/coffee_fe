import * as Yup from "yup";

export const validate = Yup.object({
	name: Yup.string().required("Name is required"),
});
