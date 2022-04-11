import { TextField, SelectField, TextAreaField } from "./order.formField";
import {
	useShowProduct,
	useShowMainCategory,
	useShowCategory,
	useShowSubCategory,
	useShowQuantity,
	useCreate,
} from "./order.hook";

const OrderForm = (props) => {
	const { products } = useShowProduct();
	const { showMainCategory, isMainCategory, mainCategories } =
		useShowMainCategory();
	const { showCategory, isCategory, categories } = useShowCategory();
	const { showSubCategory, isSubCategory, subCategories } =
		useShowSubCategory();
	const { quantities } = useShowQuantity();
	const { formik } = useCreate(props.setIsAlert);

	return (
		<form className="order-form" onSubmit={formik.handleSubmit}>
			<div className="order-card">
				<div className="order-card-body">
					<p className="order-text font-nunito">
						Please send us an inquiry for any products that you are
						looking to purchase by filling out the order form below.
						You can add any specifications or additional information
						in the comments section and we will make this work for
						you. Let’s do business together.
					</p>
					<div className="order-content">
						<div className="left-content">
							<div className="form-order">
								<TextField
									title="Full Name"
									name="name"
									type="text"
									value={formik.values.name}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.name}
									touched={formik.touched.name}
								/>

								<TextField
									title="Email"
									name="email"
									type="email"
									value={formik.values.email}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.email}
									touched={formik.touched.email}
								/>

								<SelectField
									title="Main Category"
									name="mainCategory"
									placeholder="Choose main category"
									disabled={isMainCategory ? "" : "disabled"}
									value={formik.values.mainCategory}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.mainCategory}
									touched={formik.touched.mainCategory}
									option={mainCategories.map(
										(data, index) => {
											return (
												<option
													value={
														data.main_category_id
													}
													key={index}
												>
													{data.main_category.name}
												</option>
											);
										}
									)}
								/>

								<SelectField
									title="Sub Category"
									name="subCategory"
									placeholder="Choose sub category"
									disabled={isSubCategory ? "" : "disabled"}
									value={formik.values.subCategory}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.subCategory}
									touched={formik.touched.subCategory}
									option={subCategories.map((data, index) => {
										return (
											<option
												value={data.sub_category_id}
												key={index}
											>
												{data.sub_category.name}
											</option>
										);
									})}
								/>

								<SelectField
									title="Quantity"
									name="quantity"
									placeholder="Choose quantity"
									value={formik.values.quantity}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.quantity}
									touched={formik.touched.quantity}
									option={quantities.map((data, index) => {
										return (
											<option
												value={data.quantity_id}
												key={index}
											>
												{data.quantity}
											</option>
										);
									})}
								/>
							</div>
						</div>

						<div className="right-content">
							<div className="form-order">
								<TextField
									title="Phone Number"
									name="phone"
									type="text"
									value={formik.values.phone}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.phone}
									touched={formik.touched.phone}
								/>

								<SelectField
									title="Product"
									name="product"
									placeholder="Choose product"
									value={formik.values.product}
									onChange={(e) => {
										formik.setFieldValue(
											"product",
											e.target.value
										);
										showMainCategory(e.target.value);
										showCategory(e.target.value);
										showSubCategory(e.target.value);
									}}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.product}
									touched={formik.touched.product}
									option={products.map((data, index) => {
										return (
											<option
												value={data.product_id}
												key={index}
											>
												{data.name}
											</option>
										);
									})}
								/>

								<SelectField
									title="Category"
									name="category"
									placeholder="Choose category"
									disabled={isCategory ? "" : "disabled"}
									value={formik.values.category}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.category}
									touched={formik.touched.category}
									option={categories.map((data, index) => {
										return (
											<option
												value={data.category_id}
												key={index}
											>
												{data.category.name}
											</option>
										);
									})}
								/>

								<TextAreaField
									title="Comment"
									name="note"
									placeholder="Descriptions"
									onChange={formik.handleChange}
									value={formik.values.note}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.note}
									touched={formik.touched.note}
								/>
							</div>
						</div>
					</div>
					<button className="btn bg-orange" type="submit">
						Send my order
					</button>
				</div>
			</div>
		</form>
	);
};

export default OrderForm;
