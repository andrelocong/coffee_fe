import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logo.8dfda37d.png";

const Sidebar = () => {
	return (
		<div className="sidebar width-270 height-100vh bg-white sticky">
			<div className="width-full justify-center my-20">
				<img className="width-120 height-80" src={Logo} alt="logo" />
			</div>

			<div className="width-242 mx-auto">
				<ul className="list-none m-0 p-0">
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-white cursor-pointer bg-orange decoration-none"
									: "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-black cursor-pointer decoration-none"
							}
							exact="true"
							to="/admin/order-list"
						>
							<div className="ml-20 width-70 justify-center">
								<i className="fas fa-list"></i>
							</div>
							<span>Order List</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-white cursor-pointer bg-orange decoration-none"
									: "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-black cursor-pointer decoration-none"
							}
							exact="true"
							to="/admin/product-list"
						>
							<div className="ml-20 width-70 justify-center">
								<i className="fas fa-boxes"></i>
							</div>
							<span>Product</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-white cursor-pointer bg-orange decoration-none"
									: "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-black cursor-pointer decoration-none"
							}
							exact="true"
							to="/admin/input-gallery"
						>
							<div className="ml-20 width-70 justify-center">
								<i className="fas fa-images"></i>
							</div>
							<span>Gallery</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-white cursor-pointer bg-orange decoration-none"
									: "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-black cursor-pointer decoration-none"
							}
							exact="true"
							to="/admin/sosmed-list"
						>
							<div className="ml-20 width-70 justify-center">
								<i className="fas fa-share-alt"></i>
							</div>
							<span>Sosial Media</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-white cursor-pointer bg-orange decoration-none"
									: "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-black cursor-pointer decoration-none"
							}
							exact="true"
							to="/admin/team-list"
						>
							<div className="ml-20 width-70 justify-center">
								<i className="fas fa-users"></i>
							</div>
							<span>Team</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-white cursor-pointer bg-orange decoration-none"
									: "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-black cursor-pointer decoration-none"
							}
							exact="true"
							to="/admin/user-list"
						>
							<div className="ml-20 width-70 justify-center">
								<i className="fas fa-user"></i>
							</div>
							<span>User</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-white cursor-pointer bg-orange decoration-none"
									: "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-black cursor-pointer decoration-none"
							}
							exact="true"
							to="/admin/main-category"
						>
							<div className="ml-20 width-70 justify-center">
								<i className="fas fa-shapes"></i>
							</div>
							<span>Main Category</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-white cursor-pointer bg-orange decoration-none"
									: "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-black cursor-pointer decoration-none"
							}
							exact="true"
							to="/admin/category"
						>
							<div className="ml-20 width-70 justify-center">
								<i className="fas fa-shapes"></i>
							</div>
							<span>Category</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-white cursor-pointer bg-orange decoration-none"
									: "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-black cursor-pointer decoration-none"
							}
							exact="true"
							to="/admin/sub-category"
						>
							<div className="ml-20 width-70 justify-center">
								<i className="fas fa-shapes"></i>
							</div>
							<span>Sub-Category</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-white cursor-pointer bg-orange decoration-none"
									: "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-black cursor-pointer decoration-none"
							}
							exact="true"
							to="/admin/quantity"
						>
							<div className="ml-20 width-70 justify-center">
								<i className="fas fa-balance-scale"></i>
							</div>
							<span>Quantity</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-white cursor-pointer bg-orange decoration-none"
									: "width-full height-50 my-10 border-radius-10 flex alig-item-center font-20 font-weight-700 color-black cursor-pointer decoration-none"
							}
							exact="true"
							to="/admin/role"
						>
							<div className="ml-20 width-70 justify-center">
								<i className="fas fa-user-cog"></i>
							</div>
							<span>Role</span>
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
