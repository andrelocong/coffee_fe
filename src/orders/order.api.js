import instance from "../config/axios/axios.config";

export const findDataProductApi = () => {
	return instance.get("/product");
};

export const findDataProductMainCategoryApi = (id) => {
	return instance.get(`/product-main-category/${id}`);
};

export const findDataProductCategoryApi = (id) => {
	return instance.get(`/product-category/${id}`);
};

export const findDataProductSubCategoryApi = (id) => {
	return instance.get(`/product-sub-category/${id}`);
};

export const findDataQuantityApi = () => {
	return instance.get("/quantity");
};

export const storeDataApi = (
	name,
	phone,
	email,
	productId,
	mainCategoryId,
	categoryId,
	subCategoryId,
	quantityId,
	note
) => {
	return instance.post("/order", {
		name,
		phone,
		email,
		productId,
		mainCategoryId,
		categoryId,
		subCategoryId,
		quantityId,
		note,
	});
};
