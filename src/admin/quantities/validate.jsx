import * as Yup from "yup";

export const validate = Yup.object({
	quantity: Yup.string().required("Quantity is required"),
});
