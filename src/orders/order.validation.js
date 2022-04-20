import * as Yup from "yup";
const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validation = Yup.object({
	name: Yup.string().required("Username is required"),
	phone: Yup.string()
		.matches(phoneRegExp, "Phone number is not valid")
		.max(12, "Phone number is not valid")
		.required("Phone number is required"),
	email: Yup.string().email("Must be a valid email"),
	product: Yup.string().required("Product is required"),
	mainCategory: Yup.string().nullable().required("Main category is required"),
	category: Yup.string().required("Category is required"),
	subCategory: Yup.string().required("Sub category is required"),
	quantity: Yup.string().required("Quantity is required"),
});
