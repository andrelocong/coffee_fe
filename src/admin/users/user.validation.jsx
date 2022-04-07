import * as Yup from "yup";

export const validation = Yup.object({
	first_name: Yup.string()
		.max(15, "Must be 15 character or less")
		.required("Frist name is required"),
	last_name: Yup.string()
		.max(15, "Must be 15 character or less")
		.required("Last name is required"),
	username: Yup.string()
		.min(4, "Username must be 4 character or more")
		.max(15, "Must be 15 character or less")
		.required("Username is required"),
	password: Yup.string()
		.min(6, "Password must be 6 character or more")
		.required("Password is required"),
	role: Yup.string().required("Role is required"),
});
