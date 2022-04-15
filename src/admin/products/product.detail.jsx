import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AddMainCategory from "./AddMainCategory";
import AddCategories from "./AddCategories";
import AddSubCategories from "./AddSubCategories";
import { useFetchDetail } from "./product.hook";

function ProductDetail() {
	const { id } = useParams();
	const [isMainCategoryModal, setIsMainCategoryModal] = useState(false);
	const [isCategoriesModal, setIsCategoriesModal] = useState(false);
	const [isSubCategoriesModal, setIsSubCategoriesModal] = useState(false);

	const {
		product,
		category,
		mainCategories,
		categories,
		subCategories,
		showMainCategory,
		showCategories,
		showSubCategories,
	} = useFetchDetail(id);

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
								<p className="py-11 m-0 font-weight-700 color-white">
									Main-Categories
								</p>
							</div>
							<div className="body">
								{mainCategories.map((data, index) => {
									return (
										<p
											className="py-15 m-0 text-capitalize"
											key={index}
										>
											{data.main_category.name}
										</p>
									);
								})}
							</div>
						</div>
						<div className="width-350 text-center">
							<div className="bg-yellow">
								<p className="py-11 m-0 font-weight-700 color-white">
									Categories
								</p>
							</div>
							<div className="body">
								{categories.map((data, index) => {
									return (
										<p
											className="py-15 m-0 text-capitalize"
											key={index}
										>
											{data.category.name}
										</p>
									);
								})}
							</div>
						</div>
						<div className="width-350 text-center">
							<div className="bg-yellow border-radius-right-10">
								<p className="py-11 m-0 font-weight-700 color-white">
									Sub-Categories
								</p>
							</div>
							<div className="body">
								{subCategories.map((data, index) => {
									return (
										<p
											className="py-15 m-0 text-capitalize"
											key={index}
										>
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
