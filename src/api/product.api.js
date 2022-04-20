import instance from "../config/axios/axios.config";

//Api For Product Hook Start
export const findDataApi = () => {
	return instance.get("/admin/product");
};

export const deleteDataApi = (id) => {
	return instance.delete(`/admin/product/${id}`);
};

export const findDataByName = (search) => {
	return instance.get(`/admin/product/find?search=${search}`);
};

export const storeDataApi = (name, category) => {
	return instance.post("/admin/product", {
		name,
		category,
	});
};

export const updateDataApi = (id, name, category) => {
	return instance.patch(`/admin/product/${id}`, {
		name,
		category,
	});
};
//Api For Product Hook End

//Api For Product Detail Hook Start
export const findDataByIdApi = (id) => {
	return instance.get(`/admin/product/${id}`);
};

export const findDataMainCategoryByIdApi = (id) => {
	return instance.get(`/admin/product-main-category/${id}`);
};

export const findDataCategoryByIdApi = (id) => {
	return instance.get(`/admin/product-category/${id}`);
};

export const findDataSubCategoryByIdApi = (id) => {
	return instance.get(`/admin/product-sub-category/${id}`);
};
//Api For Product Detail Hook End

//Api For Main Categories Start
export const storeDataProductMainCategoryApi = (productId, mainCategoryId) => {
	return instance.post("/admin/product-main-category", {
		productId,
		mainCategoryId,
	});
};

export const DeleteDataProductMainCategoryApi = (id) => {
	return instance.delete(`/admin/product-main-category/${id}`);
};
//Api For Main Categories End

//Api For Categories Start
export const storeDataProductCategoryApi = (productId, categoryId) => {
	return instance.post("/admin/product-category", {
		productId,
		categoryId,
	});
};

export const DeleteDataProductCategoryApi = (id) => {
	return instance.delete(`/admin/product-category/${id}`);
};
//Api For Categories End

//Api For Sub Categories Start
export const storeDataProductSubCategoryApi = (productId, subCategoryId) => {
	return instance.post("/admin/product-sub-category", {
		productId,
		subCategoryId,
	});
};

export const DeleteDataProductSubCategoryApi = (id) => {
	return instance.delete(`/admin/product-sub-category/${id}`);
};
//Api For Sub Categories End
