import * as Yup from "yup";

export const validation = Yup.object({
	sosmed: Yup.string().required("Name is required"),
	address: Yup.string().required("Name is required"),
});
