import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [isShowNavbar, setShowNavbar] = useState(false);

	const handleScroll = () => {
		if (window.scrollY >= 822) {
			setShowNavbar(true);
		} else {
			setShowNavbar(false);
		}
	};

	const handleScrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	window.addEventListener("scroll", handleScroll);

	return (
		<div className={isShowNavbar ? "navbar active" : "navbar"}>
			<ul>
				<li className="nav-menu">
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav-link active" : "nav-link"
						}
						exact="true"
						to="/"
						onClick={() => handleScrollTop()}
					>
						Home
					</NavLink>
				</li>
				<li className="nav-menu">
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav-link active" : "nav-link"
						}
						exact="true"
						to="/order"
						onClick={() => handleScrollTop()}
					>
						Order
					</NavLink>
				</li>
				<li className="nav-menu">
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav-link active" : "nav-link"
						}
						exact="true"
						to="/product"
						onClick={() => handleScrollTop()}
					>
						Product
					</NavLink>
				</li>
				<li className="nav-menu">
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav-link active" : "nav-link"
						}
						exact="true"
						to="/gallery"
						onClick={() => handleScrollTop()}
					>
						Gallery
					</NavLink>
				</li>
				<li className="nav-menu">
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav-link active" : "nav-link"
						}
						exact="true"
						to="/contact"
						onClick={() => handleScrollTop()}
					>
						Contact Us
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
