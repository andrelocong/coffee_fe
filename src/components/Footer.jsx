import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-body">
				<div className="footer-group">
					<h3 className="footer-title">Bali bean spice</h3>
					<p className="footer-text mb-20">
						For more information, you can contact us with one of our
						contact below.
					</p>
					<h4 className="font-nunito mb-10 mt-10">
						PT Alam Rempah Nusantara
					</h4>
					<div className="flex mb-10 mt-10">
						<i className="fas fa-map-marker-alt color-red mr-10 mt-4"></i>
						<p className="footer-text m-0">
							Benoa Square 2nd Floor Jl Bypass Ngurah Rai No 21A,
							Kedonganan Kuta - Bali 80361 Indonesia
						</p>
					</div>
					<div className="sosmed flex mt-20">
						<div className="bg-rounded bg-orange">
							<i className="fab fa-instagram icon-brand"></i>
						</div>
						<div className="bg-rounded bg-orange">
							<i className="fab fa-telegram-plane icon-brand"></i>
						</div>
						<div className="bg-rounded bg-orange">
							<i className="fab fa-whatsapp icon-brand"></i>
						</div>
						<div className="bg-rounded bg-orange">
							<i className="fab fa-facebook-f icon-brand"></i>
						</div>
					</div>
				</div>
				<div className="footer-group">
					<h3 className="footer-title">Sitemap</h3>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/order">Order</Link>
						</li>
						<li>
							<Link to="/product">Product</Link>
						</li>
						<li>
							<Link to="/gallery">Gallery</Link>
						</li>
						<li>
							<Link to="/contact">Contact Us</Link>
						</li>
					</ul>
				</div>
				<div className="footer-group">
					<h3 className="footer-title">quicklink</h3>
					<p className="decoration-underline">FAQ</p>
				</div>
				<div className="footer-group">
					<h3 className="footer-title">Business with us</h3>
					<Link to="/contact">Contact Us</Link>
					<h4 className="footer-sub-title">SET LANGUAGE</h4>
					<select name="" id="">
						<option value="">Indonesia</option>
						<option value="">English</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default Footer;
