import * as Yup from "yup";

// const FILE_SIZE = ;
// const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const validate = Yup.object({
	name: Yup.string().required("Name is required"),
	position: Yup.string().required("Position is required"),
	desc: Yup.string().required("Description is required"),
	image: Yup.string().required("Image is required"),
});
