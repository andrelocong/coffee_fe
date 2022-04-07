import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddMainCategory from "./AddMainCategory";
import AddCategories from "./AddCategories";
import AddSubCategories from "./AddSubCategories";

function ProductDetail() {
	const { id } = useParams();
	const [product, setProduct] = useState("");
	const [category, setCategory] = useState("");
	const [isMainCategoryModal, setIsMainCategoryModal] = useState(false);
	const [mainCategories, setMainCategories] = useState([]);
	const [isCategoriesModal, setIsCategoriesModal] = useState(false);
	const [categories, setCategories] = useState([]);
	const [isSubCategoriesModal, setIsSubCategoriesModal] = useState(false);
	const [subCategories, setSubCategories] = useState([]);

	console.log(subCategories);

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

	return (
		<div className="detail-product">
			<AddMainCategory
				isMainCategoryModal={isMainCategoryModal}
				setIsMainCategoryModal={setIsMainCategoryModal}
				id={id}
				showMainCategory={showMainCategory}
			/>

			<AddCategories
				isCategoriesModal={isCategoriesModal}
				setIsCategoriesModal={setIsCategoriesModal}
				id={id}
				showCategories={showCategories}
			/>

			<AddSubCategories
				isSubCategoriesModal={isSubCategoriesModal}
				setIsSubCategoriesModal={setIsSubCategoriesModal}
				id={id}
				showSubCategories={showSubCategories}
			/>

			<h1>Detail Product</h1>

			<div className="width-full bg-white border-radius-20 height-100vh mb-10">
				<div className="p-30">
					<div className="flex">
						<p className="my-10 width-150 font-weight-700">Id</p>
						<p className="my-10">
							: <span>{id}</span>
						</p>
					</div>
					<div className="flex">
						<p className="my-10 width-150 font-weight-700">
							Product name
						</p>
						<p className="my-10">
							: <span className="text-capitalize">{product}</span>
						</p>
					</div>
					<div className="flex">
						<p className="my-10 width-150 font-weight-700">
							Category
						</p>
						<p className="my-10">
							:{" "}
							<span className="text-capitalize">{category}</span>
						</p>
					</div>
				</div>

				<div className="px-30 pb-20 flex">
					<button
						className="bg-orange px-15 py-10 border-none border-radius-5 cursor-pointer font-16 color-white mr-10"
						onClick={() => {
							setIsMainCategoryModal(true);
						}}
					>
						Add Main Category
					</button>
					<button
						className="bg-orange px-15 py-10 border-none border-radius-5 cursor-pointer font-16 color-white mr-10"
						onClick={() => {
							setIsCategoriesModal(true);
						}}
					>
						Add Main Category
					</button>
					<button
						className="bg-orange px-15 py-10 border-none border-radius-5 cursor-pointer font-16 color-white"
						onClick={() => {
							setIsSubCategoriesModal(true);
						}}
					>
						Add Sub Category
					</button>
				</div>

				<div className="px-30 pb-30">
					<div className="width-full flex">
						<div className="width-350 text-center">
							<div className="bg-yellow border-radius-left-10">
								<p className="py-11 m-0 font-weight-700">
									Main-Categories
								</p>
							</div>
							<div className="body">
								{mainCategories.map((data, index) => {
									return (
										<p className="py-15 m-0" key={index}>
											{data.main_category.name}
										</p>
									);
								})}
							</div>
						</div>
						<div className="width-350 text-center">
							<div className="bg-yellow">
								<p className="py-11 m-0 font-weight-700">
									Categories
								</p>
							</div>
							<div className="body">
								{categories.map((data, index) => {
									return (
										<p className="py-15 m-0" key={index}>
											{data.category.name}
										</p>
									);
								})}
							</div>
						</div>
						<div className="width-350 text-center">
							<div className="bg-yellow border-radius-right-10">
								<p className="py-11 m-0 font-weight-700">
									Sub-Categories
								</p>
							</div>
							<div className="body">
								{subCategories.map((data, index) => {
									return (
										<p className="py-15 m-0" key={index}>
											{data.sub_category.name}
										</p>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductDetail;
