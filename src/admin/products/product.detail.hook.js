import { useState, useEffect } from "react";
import {
	findDataByIdApi,
	findDataCategoryByIdApi,
	findDataMainCategoryByIdApi,
	findDataSubCategoryByIdApi,
} from "../../api/product.api";

export const useFetchDetail = (id) => {
	const [product, setProduct] = useState("");
	const [category, setCategory] = useState("");
	const [mainCategories, setMainCategories] = useState([]);
	const [categories, setCategories] = useState([]);
	const [subCategories, setSubCategories] = useState([]);

	const showProductById = async () => {
		const product = await findDataByIdApi(id);
		setProduct(product.data.data.name);
		setCategory(product.data.data.category);
	};

	const showMainCategory = async () => {
		const mainCategory = await findDataMainCategoryByIdApi(id);
		setMainCategories(mainCategory.data.data);
	};

	const showCategories = async () => {
		const categories = await findDataCategoryByIdApi(id);

		setCategories(categories.data.data);
	};

	const showSubCategories = async () => {
		const subCategories = await findDataSubCategoryByIdApi(id);

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
