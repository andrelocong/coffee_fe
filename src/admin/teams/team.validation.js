import * as yup from "yup";

// const FILE_SIZE = ;
// const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const validation = yup.object({
	name: yup.string().required("Name is required"),
	position: yup.string().required("Position is required"),
	desc: yup.string().required("Description is required"),
	image: yup.string().required("Image is required"),
});

export const validationBio = yup.object({
	name: yup.string().required("Name is required"),
	position: yup.string().required("Position is required"),
	desc: yup.string().required("Description is required"),
});

export const validationImage = yup.object({
	image: yup.string().required("Image is required"),
});
