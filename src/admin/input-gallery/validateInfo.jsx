export default function validateInfo({ imageUpload, category }) {
	let errors = {};

	if (!imageUpload) {
		errors.imageUpload = "Image required!";
	}

	if (!category) {
		errors.category = "Category required!";
	}

	return errors;
}
