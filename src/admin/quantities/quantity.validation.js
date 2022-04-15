import * as Yup from "yup";

export const validation = Yup.object({
	quantity: Yup.string().required("Quantity is required"),
});
