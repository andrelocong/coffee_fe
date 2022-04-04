export default function validateInfo(values) {
	let errors = {};

	if (!values.sosmed) {
		errors.sosmed = "Sosmed name required!";
	}

	if (!values.address) {
		errors.address = "Sosmed address required!";
	}

	return errors;
}
