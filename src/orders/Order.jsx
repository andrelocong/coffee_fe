import React, { useEffect, useState } from "react";
import "./Order.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
// import Image from "../img/iStock-93431682.f1aecd79.jpeg";
import ButtonExtend from "../components/ButtonExtend";
import axios from "axios";
import SuccessAlert from "../admin/components/SuccessAlert";

function Order() {
	const [product, setProduct] = useState([]);
	const [isMainCategory, setIsMainCategory] = useState(false);
	const [mainCategory, setMainCategory] = useState([]);
	const [isCategory, setIsCategory] = useState(false);
	const [category, setCategory] = useState([]);
	const [isSubCategory, setIsSubCategory] = useState(false);
	const [subCategory, setSubCategory] = useState([]);
	const [quantity, setQuantity] = useState([]);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [productValue, setProductValue] = useState("");
	const [mainCategoryValue, setMainCategoryValue] = useState("");
	const [categoryValue, setCategoryValue] = useState("");
	const [subCategoryValue, setSubCategoryValue] = useState("");
	const [quantityValue, setQuantityValue] = useState("");
	const [note, setNote] = useState("");
	const [isAlert, setIsAlert] = useState(false);

	const showProduct = async () => {
		const product = await axios.get("http://localhost:5000/product");

		setProduct(product.data.products);
	};

	const handleChangeProduct = (id) => {
		setProductValue(id);
		showMainCategory(id);
		showCategory(id);
		showSubCategory(id);
	};

	const showMainCategory = async (id) => {
		const mainCategory = await axios.get(
			`http://localhost:5000/product-main-category/${id}`
		);

		if (mainCategory.data.data.length === 0) {
			setIsMainCategory(false);
		} else if (mainCategory.data.data.length > 0) {
			setIsMainCategory(true);
			setMainCategory(mainCategory.data.data);
		}
	};

	const showCategory = async (id) => {
		const category = await axios.get(
			`http://localhost:5000/product-category/${id}`
		);

		if (category.data.data.length === 0) {
			setIsCategory(false);
		} else if (category.data.data.length > 0) {
			setIsCategory(true);
			setCategory(category.data.data);
		}
	};

	const showSubCategory = async (id) => {
		const subCategory = await axios.get(
			`http://localhost:5000/product-sub-category/${id}`
		);

		if (subCategory.data.data.length === 0) {
			setIsSubCategory(false);
		} else if (subCategory.data.data.length > 0) {
			setIsSubCategory(true);
			setSubCategory(subCategory.data.data);
		}
	};

	const showQuantity = async () => {
		const quantity = await axios.get("http://localhost:5000/quantity");

		setQuantity(quantity.data.data);
	};

	useEffect(() => {
		showProduct();
		showQuantity();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const storeData = async (e) => {
		e.preventDefault();
		await axios.post("http://localhost:5000/order", {
			name: name,
			phone: phone,
			email: email,
			productId: productValue,
			mainCategoryId: mainCategoryValue,
			categoryId: categoryValue,
			subCategoryId: subCategoryValue,
			quantityId: quantityValue,
			note: note,
		});

		setTimeout(() => {
			setName("");
			setPhone("");
			setEmail("");
			setProductValue("");
			setMainCategoryValue("");
			setCategoryValue("");
			setSubCategoryValue("");
			setQuantityValue("");
			setNote("");
			setIsAlert(true);
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	return (
		<div className="order">
			<ButtonExtend />
			<Hero />

			<SuccessAlert isAlert={isAlert} text="Order sent!" />

			<div className="order-body">
				<h1 className="order-title">make your order</h1>
				<form onSubmit={storeData}>
					<div className="order-card">
						<div className="order-card-body">
							<p className="order-text font-nunito">
								Please send us an inquiry for any products that you
								are looking to purchase by filling out the order
								form below. You can add any specifications or
								additional information in the comments section and
								we will make this work for you. Let’s do business
								together.
							</p>
							<div className="order-content">
								<div className="left-content">
									{/* <img className="order-img" src={Image} alt="order" /> */}
									<div className="form-order">
										<div className="form-group">
											<p className="form-title">Full Name</p>
											<input
												className="form-input"
												type="text"
												placeholder="Ex. Locong"
												value={name}
												onChange={(e) => setName(e.target.value)}
											/>
										</div>

										<div className="form-group">
											<p className="form-title">Email</p>
											<input
												className="form-input"
												type="email"
												placeholder="abcs@mail.com"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
										</div>

										<div className="form-group">
											<p className="form-title">Main category</p>
											<select
												className="form-select"
												disabled={isMainCategory ? "" : "disabled"}
												value={mainCategoryValue}
												onChange={(e) =>
													setMainCategoryValue(e.target.value)
												}
											>
												<option value="">
													Choose main category
												</option>
												{mainCategory.map((data, index) => {
													return (
														<option
															value={data.main_category_id}
															key={index}
														>
															{data.main_category.name}
														</option>
													);
												})}
											</select>
										</div>

										<div className="form-group">
											<p className="form-title">Quantity</p>
											<select
												className="form-select"
												value={quantityValue}
												onChange={(e) =>
													setQuantityValue(e.target.value)
												}
											>
												<option value="">Choose quantity</option>
												{quantity.map((data, index) => {
													return (
														<option
															value={data.quantity_id}
															key={index}
														>
															{data.quantity}
														</option>
													);
												})}
											</select>
										</div>

										<div className="form-group">
											<p className="form-title">Quantity</p>
											<select
												className="form-select"
												value={quantityValue}
												onChange={(e) =>
													setQuantityValue(e.target.value)
												}
											>
												<option value="">Choose quantity</option>
												{quantity.map((data, index) => {
													return (
														<option
															value={data.quantity_id}
															key={index}
														>
															{data.quantity}
														</option>
													);
												})}
											</select>
										</div>

									</div>
								</div>

								<div className="right-content">
									<div className="form-order">										
										<div className="form-group">
											<p className="form-title">Phone Number</p>
											<input
												className="form-input"
												type="text"
												placeholder="82132xxxxx"
												value={phone}
												onChange={(e) => setPhone(e.target.value)}
											/>
										</div>
										
										<div className="form-group">
											<p className="form-title">Product</p>
											<select
												className="form-select"
												value={productValue}
												onChange={(e) => {
													handleChangeProduct(e.target.value);
												}}
											>
												<option value="">Choose products</option>
												{product.map((data, index) => {
													return (
														<option
															value={data.product_id}
															key={index}
														>
															{data.name}
														</option>
													);
												})}
											</select>
										</div>
										
										<div className="form-group">
											<p className="form-title">Category</p>
											<select
												className="form-select"
												disabled={isCategory ? "" : "disabled"}
												value={categoryValue}
												onChange={(e) =>
													setCategoryValue(e.target.value)
												}
											>
												<option value="">Choose category</option>
												{category.map((data, index) => {
													return (
														<option
															value={data.category_id}
															key={index}
														>
															{data.category.name}
														</option>
													);
												})}
											</select>
										</div>
										<div className="form-group">
											<p className="form-title">Sub-category</p>
											<select
												className="form-select"
												disabled={isSubCategory ? "" : "disabled"}
												value={subCategoryValue}
												onChange={(e) =>
													setSubCategoryValue(e.target.value)
												}
											>
												<option value="">
													Choose Sub-category
												</option>
												{subCategory.map((data, index) => {
													return (
														<option
															value={data.sub_category_id}
															key={index}
														>
															{data.sub_category.name}
														</option>
													);
												})}
											</select>
										</div>
										
										<div className="form-group">
											<p className="form-title">Comment</p>
											<textarea
												className="form-textarea"
												value={note}
												onChange={(e) => setNote(e.target.value)}
											></textarea>
										</div>

									</div>
								</div>
							</div>
							<button className="btn bg-orange" type="submit">
								Send my order
							</button>
						</div>
					</div>
				</form>
			</div>

			<Footer />
		</div>
	);
}

export default Order;
