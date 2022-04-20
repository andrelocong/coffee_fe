import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validation } from "./order.validation";
import {
	findDataProductApi,
	findDataProductMainCategoryApi,
	findDataProductCategoryApi,
	findDataProductSubCategoryApi,
	findDataQuantityApi,
	storeDataApi,
} from "./order.api";

export const useShowProduct = () => {
	const [products, setProducts] = useState([]);

	const showProduct = async () => {
		const product = await findDataProductApi();

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

	const showMainCategory = async (id, formik) => {
		const mainCategory = await findDataProductMainCategoryApi(id);

		if (mainCategory.data.data.length === 0) {
			setIsMainCategory(false);
			formik.setFieldValue("mainCategory", 0);
		} else if (mainCategory.data.data.length > 0) {
			setIsMainCategory(true);
			formik.setFieldValue("mainCategory", "");
			setMainCategories(mainCategory.data.data);
		}
	};

	return { showMainCategory, isMainCategory, mainCategories };
};

export const useShowCategory = () => {
	const [isCategory, setIsCategory] = useState(false);
	const [categories, setCategories] = useState([]);

	const showCategory = async (id, formik) => {
		const category = await findDataProductCategoryApi(id);

		if (category.data.data.length === 0) {
			setIsCategory(false);
			formik.setFieldValue("category", 0);
		} else if (category.data.data.length > 0) {
			setIsCategory(true);
			formik.setFieldValue("category", "");
			setCategories(category.data.data);
		}
	};

	return { showCategory, isCategory, categories };
};

export const useShowSubCategory = () => {
	const [isSubCategory, setIsSubCategory] = useState(false);
	const [subCategories, setSubCategories] = useState([]);

	const showSubCategory = async (id, formik) => {
		const subCategory = await findDataProductSubCategoryApi(id);

		if (subCategory.data.data.length === 0) {
			setIsSubCategory(false);
			formik.setFieldValue("subCategory", 0);
		} else if (subCategory.data.data.length > 0) {
			setIsSubCategory(true);
			formik.setFieldValue("subCategory", "");
			setSubCategories(subCategory.data.data);
		}
	};

	return { showSubCategory, isSubCategory, subCategories };
};

export const useShowQuantity = () => {
	const [quantities, setQuantities] = useState([]);

	const showQuantity = async () => {
		const quantity = await findDataQuantityApi();

		setQuantities(quantity.data.data);
	};

	useEffect(() => {
		showQuantity();
	}, []);

	return { quantities };
};

export const useCreate = (setIsAlert) => {
	const storeData = async (values) => {
		await storeDataApi(
			values.name,
			values.phone,
			values.email,
			values.product,
			values.mainCategory,
			values.category,
			values.subCategory,
			values.quantity,
			values.note
		);

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
