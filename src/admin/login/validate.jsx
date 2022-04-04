import * as Yup from "yup";

export const validate = Yup.object({
	username: Yup.string()
		.max(15, "Must be 15 character or less")
		.required("Username is required"),
	password: Yup.string()
		.min(6, "Password must be 6 character or more")
		.required("Password is required"),
});
