import * as Yup from "yup";
const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationCreate = Yup.object({
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

export const validationUpdateBio = Yup.object({
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
	email: Yup.string()
		.nullable()
		.email("Must be a valid email")
		.required("Email is required"),
	phone: Yup.string()
		.nullable()
		.matches(phoneRegExp, "Phone number is not valid")
		.max(12, "Phone number is not valid")
		.required("Phone number is required"),
	role: Yup.string().required("Role is required"),
});

export const validationUpdateImage = Yup.object({
	image: Yup.string().required("Image is required"),
});
