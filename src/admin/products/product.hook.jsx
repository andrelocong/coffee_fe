import axios from "axios";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validation, validationCategory } from "./product.validation";

export const useFetch = (id) => {
	const [data, setData] = useState([]);

	const showData = async () => {
		const dataProduct = await axios.get("http://localhost:5000/product");

		setData(dataProduct.data.products);
	};

	useEffect(() => {
		showData();
	}, []);

	const deleteData = async () => {
		await axios.delete(`http://localhost:5000/product/${id}`);

		showData();
	};

	const handleSearch = async (search) => {
		const product = await axios.get(
			`http://localhost:5000/product/find?search=${search}`
		);

		setData(product.data.data);
	};

	return { data, showData, deleteData, handleSearch };
};

export const useCreate = (setIsCreateModal, showData) => {
	const [isAlert, setIsAlert] = useState(false);

	const categories = [
		{
			value: "coffee",
		},
		{
			value: "cocoa",
		},
		{
			value: "vanilla",
		},
	];

	const storeData = async (values) => {
		await axios.post("http://localhost:5000/product", {
			name: values.name,
			category: values.category,
		});

		setIsCreateModal(false);
		setIsAlert(true);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
		showData();
		setTimeout(() => {
			formik.resetForm();
		}, 200);
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			category: "",
		},
		validationSchema: validation,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	return { formik, isAlert, categories };
};

export const useUpdate = (setIsEditModal, showData, values) => {
	const [isAlert, setIsAlert] = useState(false);

	const categories = [
		{
			value: "coffee",
		},
		{
			value: "cocoa",
		},
		{
			value: "vanilla",
		},
	];

	const updateData = async (value) => {
		await axios.patch(`http://localhost:5000/product/${values.id}`, {
			name: value.name,
			category: value.category,
		});

		setIsEditModal(false);
		showData();
		setIsAlert(true);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const formik = useFormik({
		initialValues: {
			name: values.name,
			category: values.category,
		},
		enableReinitialize: true,
		validationSchema: validation,
		onSubmit: (values) => {
			updateData(values);
		},
	});

	return { formik, isAlert, categories };
};

export const useFetchDetail = (id) => {
	const [product, setProduct] = useState("");
	const [category, setCategory] = useState("");
	const [mainCategories, setMainCategories] = useState([]);
	const [categories, setCategories] = useState([]);
	const [subCategories, setSubCategories] = useState([]);

	const showProductById = async () => {
		const product = await axios.get(`http://localhost:5000/product/${id}`);
		setProduct(product.data.data.name);
		setCategory(product.data.data.category);
	};

	const showMainCategory = async () => {
		const mainCategory = await axios.get(
			`http://localhost:5000/product-main-category/${id}`
		);
		setMainCategories(mainCategory.data.data);
	};

	const showCategories = async () => {
		const categories = await axios.get(
			`http://localhost:5000/product-category/${id}`
		);

		setCategories(categories.data.data);
	};

	const showSubCategories = async () => {
		const subCategories = await axios.get(
			`http://localhost:5000/product-sub-category/${id}`
		);

		setSubCategories(subCategories.data.data);
	};

	useEffect(() => {
		showProductById();
		showMainCategory();
		showCategories();
		showSubCategories();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		product,
		category,
		mainCategories,
		categories,
		subCategories,
		showMainCategory,
		showCategories,
		showSubCategories,
	};
};

export const useAddMainCategories = (id) => {
	const [mainCategories, setMainCategories] = useState([]);
	const [detail, setDetail] = useState([]);
	const [detailId, setDetailId] = useState("");
	const [isAlert, setIsAlert] = useState(false);
	const [errors, setErrors] = useState("");

	const showDataMainCategory = async () => {
		const category = await axios.get("http://localhost:5000/main-category");
		setMainCategories(category.data.data);
	};

	const showDetail = async () => {
		const detail = await axios.get(
			`http://localhost:5000/product-main-category/${id}`
		);

		setDetail(detail.data.data);
	};

	useEffect(() => {
		showDataMainCategory();
		showDetail();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const storeData = async (values) => {
		try {
			await axios.post("http://localhost:5000/product-main-category", {
				productId: id,
				mainCategoryId: values.category,
			});

			setTimeout(() => {
				formik.resetForm();
				setIsAlert(true);
				showDetail();
			}, 200);
			setTimeout(() => {
				setIsAlert(false);
			}, 1500);
		} catch (error) {
			console.log(error.response);
			setErrors("Category has been used");
		}
	};

	const deleteData = async () => {
		await axios.delete(
			`http://localhost:5000/product-main-category/${detailId}`
		);

		showDetail();
	};

	const formik = useFormik({
		initialValues: {
			category: "",
		},
		validationSchema: validationCategory,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	return {
		mainCategories,
		detail,
		setDetailId,
		isAlert,
		formik,
		deleteData,
		errors,
		setErrors,
	};
};

export const useAddCategories = (id) => {
	const [categories, setCategories] = useState([]);
	const [detail, setDetail] = useState([]);
	const [detailId, setDetailId] = useState("");
	const [isAlert, setIsAlert] = useState(false);
	const [errors, setErrors] = useState("");

	const showCategory = async () => {
		const category = await axios.get("http://localhost:5000/category");

		setCategories(category.data.data);
	};

	const showDetail = async () => {
		const detail = await axios.get(
			`http://localhost:5000/product-category/${id}`
		);

		setDetail(detail.data.data);
	};

	useEffect(() => {
		showCategory();
		showDetail();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const storeData = async (values) => {
		try {
			await axios.post("http://localhost:5000/product-category", {
				productId: id,
				categoryId: values.category,
			});

			setTimeout(() => {
				setIsAlert(true);
				showDetail();
				formik.resetForm();
			}, 200);
			setTimeout(() => {
				setIsAlert(false);
			}, 1500);
		} catch (error) {
			console.log(error.response);
			setErrors("Category has been used");
		}
	};

	const deleteData = async () => {
		await axios.delete(
			`http://localhost:5000/product-category/${detailId}`
		);

		showDetail();
	};

	const formik = useFormik({
		initialValues: {
			category: "",
		},
		validationSchema: validationCategory,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	return {
		categories,
		detail,
		setDetailId,
		isAlert,
		formik,
		deleteData,
		errors,
		setErrors,
	};
};

export const useAddSubCategories = (id) => {
	const [subCategories, setSubCategories] = useState([]);
	const [isAlert, setIsAlert] = useState(false);
	const [detail, setDetail] = useState([]);
	const [detailId, setDetailId] = useState("");
	const [errors, setErrors] = useState("");

	const showDataSubCategories = async () => {
		const category = await axios.get("http://localhost:5000/sub-category");

		setSubCategories(category.data.data);
	};

	const showDetail = async () => {
		const detail = await axios.get(
			`http://localhost:5000/product-sub-category/${id}`
		);

		setDetail(detail.data.data);
	};

	useEffect(() => {
		showDataSubCategories();
		showDetail();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const storeData = async (values) => {
		try {
			await axios.post("http://localhost:5000/product-sub-category", {
				productId: id,
				subCategoryId: values.category,
			});

			setTimeout(() => {
				formik.resetForm();
				setIsAlert(true);
				showDetail();
			}, 200);
			setTimeout(() => {
				setIsAlert(false);
			}, 1500);
		} catch (error) {
			console.log(error.response);
			setErrors("Category has been used");
		}
	};

	const deleteData = async () => {
		await axios.delete(
			`http://localhost:5000/product-sub-category/${detailId}`
		);

		showDetail();
	};

	const formik = useFormik({
		initialValues: {
			category: "",
		},
		validationSchema: validationCategory,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	return {
		subCategories,
		detail,
		setDetailId,
		isAlert,
		formik,
		deleteData,
		errors,
		setErrors,
	};
};
