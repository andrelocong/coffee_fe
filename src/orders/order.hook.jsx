import axios from "axios";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validation } from "./order.validation";

export const useShowProduct = () => {
	const [products, setProducts] = useState([]);

	const showProduct = async () => {
		const product = await axios.get("http://localhost:5000/product");

		setProducts(product.data.products);
	};

	useEffect(() => {
		showProduct();
	}, []);

	return { products };
};

export const useShowMainCategory = () => {
	const [isMainCategory, setIsMainCategory] = useState(false);
	const [mainCategories, setMainCategories] = useState([]);

	const showMainCategory = async (id) => {
		const mainCategory = await axios.get(
			`http://localhost:5000/product-main-category/${id}`
		);

		if (mainCategory.data.data.length === 0) {
			setIsMainCategory(false);
		} else if (mainCategory.data.data.length > 0) {
			setIsMainCategory(true);
			setMainCategories(mainCategory.data.data);
		}
	};

	return { showMainCategory, isMainCategory, mainCategories };
};

export const useShowCategory = () => {
	const [isCategory, setIsCategory] = useState(false);
	const [categories, setCategories] = useState([]);

	const showCategory = async (id) => {
		const category = await axios.get(
			`http://localhost:5000/product-category/${id}`
		);

		if (category.data.data.length === 0) {
			setIsCategory(false);
		} else if (category.data.data.length > 0) {
			setIsCategory(true);
			setCategories(category.data.data);
		}
	};

	return { showCategory, isCategory, categories };
};

export const useShowSubCategory = () => {
	const [isSubCategory, setIsSubCategory] = useState(false);
	const [subCategories, setSubCategories] = useState([]);

	const showSubCategory = async (id) => {
		const subCategory = await axios.get(
			`http://localhost:5000/product-sub-category/${id}`
		);

		if (subCategory.data.data.length === 0) {
			setIsSubCategory(false);
		} else if (subCategory.data.data.length > 0) {
			setIsSubCategory(true);
			setSubCategories(subCategory.data.data);
		}
	};

	return { showSubCategory, isSubCategory, subCategories };
};

export const useShowQuantity = () => {
	const [quantities, setQuantities] = useState([]);

	const showQuantity = async () => {
		const quantity = await axios.get("http://localhost:5000/quantity");

		setQuantities(quantity.data.data);
	};

	useEffect(() => {
		showQuantity();
	}, []);

	return { quantities };
};

export const useCreate = (setIsAlert) => {
	const storeData = async (values) => {
		await axios.post("http://localhost:5000/order", {
			name: values.name,
			phone: values.phone,
			email: values.email,
			productId: values.product,
			mainCategoryId: values.mainCategory,
			categoryId: values.category,
			subCategoryId: values.subCategory,
			quantityId: values.quantity,
			note: values.note,
		});

		setTimeout(() => {
			formik.resetForm();
			setIsAlert(true);
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			phone: "",
			email: "",
			product: "",
			mainCategory: "",
			category: "",
			subCategory: "",
			quantity: "",
			note: "",
		},
		validationSchema: validation,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	return { formik };
};
