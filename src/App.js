import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./homes/Home";
import Order from "./orders/Order";
import Product from "./products/Product";
import Gallery from "./galleries/Gallery";
import Contact from "./contact/Contact";
import Admin from "./admin/Index";
import OrderList from "./admin/orderLists/OrderList";
import DetailOrder from "./admin/orderLists/order.detail";
import ProductList from "./admin/productList/product";
import DetailProduct from "./admin/productList/product.detail";
import GalleryList from "./admin/galleries/gallery";
import Sosmed from "./admin/sosmeds/sosmed";
import Team from "./admin/teams/team";
import User from "./admin/users/user";
import DetailUser from "./admin/users/user.detail";
import MainCategory from "./admin/mainCategories/mainCategory";
import Category from "./admin/categories/category";
import SubCategory from "./admin/subCategories/SubCategory";
import Quantity from "./admin/quantities/quantity";
import Role from "./admin/roles/role";
import DetailRole from "./admin/roles/role.detail";
import Login from "./admin/login/login";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/order" element={<Order />} />
					<Route path="/product" element={<Product />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/admin" element={<Admin />}>
						<Route
							path="/admin/order-list"
							element={<OrderList />}
						/>
						<Route
							path="/admin/order-list/detail/:id"
							element={<DetailOrder />}
						/>
						<Route
							path="/admin/product-list"
							element={<ProductList />}
						/>
						<Route
							path="/admin/product-detail/:id"
							element={<DetailProduct />}
						/>
						<Route
							path="/admin/gallery"
							element={<GalleryList />}
						/>
						<Route path="/admin/sosmed-list" element={<Sosmed />} />
						<Route path="/admin/team-list" element={<Team />} />
						<Route path="/admin/user-list" element={<User />} />
						<Route
							path="/admin/user-list/detail/:id"
							element={<DetailUser />}
						/>
						<Route
							path="/admin/main-category"
							element={<MainCategory />}
						/>
						<Route path="/admin/category" element={<Category />} />
						<Route
							path="/admin/sub-category"
							element={<SubCategory />}
						/>
						<Route path="/admin/quantity" element={<Quantity />} />
						<Route path="/admin/role" element={<Role />} />
						<Route
							path="/admin/role/detail/:id"
							element={<DetailRole />}
						/>
					</Route>
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
