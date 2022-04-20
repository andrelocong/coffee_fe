import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validationCategory } from "./product.validation";
import { findDataApi as findDataMainCategoryApi } from "../../api/main-category.api";
import { findDataApi as findDataCategoryApi } from "../../api/category.api";
import { findDataApi as findDataSubCategoryApi } from "../../api/sub-category.api";
import {
	DeleteDataProductMainCategoryApi,
	DeleteDataProductCategoryApi,
	findDataCategoryByIdApi,
	findDataMainCategoryByIdApi,
	findDataSubCategoryByIdApi,
	storeDataProductMainCategoryApi,
	storeDataProductCategoryApi,
	storeDataProductSubCategoryApi,
	DeleteDataProductSubCategoryApi,
} from "../../api/product.api";

export const useAddMainCategories = (id) => {
	const [mainCategories, setMainCategories] = useState([]);
	const [detail, setDetail] = useState([]);
	const [detailId, setDetailId] = useState("");
	const [isAlert, setIsAlert] = useState(false);
	const [errors, setErrors] = useState("");

	const showDataMainCategory = async () => {
		const category = await findDataMainCategoryApi();
		setMainCategories(category.data.data);
	};

	const showDetail = async () => {
		const detail = await findDataMainCategoryByIdApi(id);

		setDetail(detail.data.data);
	};

	useEffect(() => {
		showDataMainCategory();
		showDetail();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const storeData = async (values) => {
		try {
			await storeDataProductMainCategoryApi(id, values.category);

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

	const formik = useFormik({
		initialValues: {
			category: "",
		},
		validationSchema: validationCategory,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	const deleteData = async () => {
		await DeleteDataProductMainCategoryApi(detailId);

		showDetail();
	};

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
		const category = await findDataCategoryApi();

		setCategories(category.data.data);
	};

	const showDetail = async () => {
		const detail = await findDataCategoryByIdApi(id);

		setDetail(detail.data.data);
	};

	useEffect(() => {
		showCategory();
		showDetail();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const storeData = async (values) => {
		try {
			await storeDataProductCategoryApi(id, values.category);

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

	const formik = useFormik({
		initialValues: {
			category: "",
		},
		validationSchema: validationCategory,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	const deleteData = async () => {
		await DeleteDataProductCategoryApi(detailId);

		showDetail();
	};

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
		const category = await findDataSubCategoryApi();

		setSubCategories(category.data.data);
	};

	const showDetail = async () => {
		const detail = await findDataSubCategoryByIdApi(id);

		setDetail(detail.data.data);
	};

	useEffect(() => {
		showDataSubCategories();
		showDetail();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const storeData = async (values) => {
		try {
			await storeDataProductSubCategoryApi(id, values.category);

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

	const formik = useFormik({
		initialValues: {
			category: "",
		},
		validationSchema: validationCategory,
		onSubmit: (values) => {
			storeData(values);
		},
	});

	const deleteData = async () => {
		await DeleteDataProductSubCategoryApi(detailId);
		showDetail();
	};

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
