import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./homes/Home";
import Order from "./orders/Order";
import Product from "./products/Product";
import Gallery from "./galleries/Gallery";
import Contact from "./contact/Contact";
import Admin from "./admin/Index";
import OrderList from "./admin/order-lists/OrderList";
import DetailOrder from "./admin/order-lists/DetailOrder";
import ProductList from "./admin/product-list/ProductList";
import DetailProduct from "./admin/product-list/DetailProduct";
import InputGallery from "./admin/input-gallery/InputGallery";
import SosmedList from "./admin/sosmeds/SosmedList";
import TeamList from "./admin/teams/TeamList";
import UserList from "./admin/users/UserList";
import DetailUser from "./admin/users/DetailUser";
import MainCategory from "./admin/main-categories/mainCategory";
import Category from "./admin/categories/Category";
import SubCategory from "./admin/sub-categories/SubCategory";
import Quantity from "./admin/quantities/Quantity";
import Role from "./admin/roles/Role";
import DetailRole from "./admin/roles/DetailRole";
import Login from "./admin/login/Logins";

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
							path="/admin/input-gallery"
							element={<InputGallery />}
						/>
						<Route
							path="/admin/sosmed-list"
							element={<SosmedList />}
						/>
						<Route path="/admin/team-list" element={<TeamList />} />
						<Route path="/admin/user-list" element={<UserList />} />
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
