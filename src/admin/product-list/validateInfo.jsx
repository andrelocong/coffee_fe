export default function validateInfo(values) {
	let errors = {};

	if (!values.product) {
		errors.product = "Product required!";
	}

	if (!values.category) {
		errors.category = "Category required!";
	}

	return errors;
}
