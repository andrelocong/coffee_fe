import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "./Gallery";
import Team from "./Team";
import Question from "./Question";
import ButtonExtend from "../components/ButtonExtend";
import ImgCoffee1 from "../img/pexels-michael-burrows-7125709.jpg";
import ImgLogo from "../img/logo.8dfda37d.png";
import ImgAboutUs from "../img/—Pngtree—roasting raw coffee beans_5794947.png";
import ImgVision from "../img/pexels-daniel-reche-1556665.jpg";
import ImgMission from "../img/pexels-michael-burrows-7125616.jpg";
import ImgProduct1 from "../img/pexels-quang-nguyen-vinh-2131905.jpg";
import ImgProduct2 from "../img/pexels-ryutaro-tsukata-5472415.jpg";
import ImgProduct3 from "../img/pexels-michael-burrows-7125733.jpg";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="home">
			<ButtonExtend />
			<Navbar />

			<div className="heros">
				<div className="logo">
					<img className="heros-logo" src={ImgLogo} alt="Logo" />
				</div>
				<img className="heros-img" src={ImgCoffee1} alt="Coffee" />
			</div>

			<div className="about-us">
				<div className="side-desc">
					<div className="side-body">
						<h3 className="home-title text-center">ABOUT US</h3>
						<p className="home-text text-right">
							Bali Bean Spice offers a variety of spices and other
							products; such as coffee, cocoa and vanilla. Our
							products are sold by the kilo and ton. Quality comes
							first and we strive to provide the best products
							with consistency in taste and aroma. We play a
							direct role in the cultivation, processing,
							packaging and logistics for domestic and foreign
							markets. In cooperation with local Indonesian
							farmers, Bali Bean Spice prioritizes product quality
							by always providing superior seed selection,
							training, maintenance and processing of the raw
							materials that go into our products.
						</p>
					</div>
				</div>
				<div className="side-img">
					<img src={ImgAboutUs} alt="about us" />
				</div>
			</div>

			<div className="vision bg-grey">
				<div className="side-desc">
					<div className="side-body">
						<h3 className="home-title text-right">Vision</h3>
						<p className="home-text text-right">
							Our vision is to help local farmers thrive by
							facilitating the marketing of farmers' crops to the
							worldwide market.
						</p>
					</div>
				</div>
				<div className="side-img">
					<img src={ImgVision} alt="vision" />
				</div>
			</div>

			<div className="mission">
				<div className="side-img">
					<img src={ImgMission} alt="missions" />
				</div>
				<div className="side-desc">
					<div className="side-body">
						<h3 className="home-title text-left">Mission</h3>
						<ul className="pl-20 list-none">
							<li className="home-text text-left flex">
								<i className="fas fa-caret-right"></i>
								To be a trustworthy company with a strong
								commitment to maintaining the environment.
							</li>
							<li className="home-text text-left flex">
								<i className="fas fa-caret-right"></i>
								To create a management team that cares deeply
								about the welfare of farmers.
							</li>
							<li className="home-text text-left flex">
								<i className="fas fa-caret-right"></i>
								To participate in national development through
								the production of high-quality products to meet
								the demand of export markets while maintaining
								the company's commitment to improve the standard
								of living of the surrounding community.
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="product container bg-grey">
				<div className="container-body">
					<h3 className="home-title text-center">Product</h3>
					<p className="home-text text-center">
						Indonesia is rich with spice potential which, if managed
						with care, will have a positive impact on it’s farmers.
						Located in the tropics, Indonesia is the center of
						spices and herbs around the world. It’s supported by
						fertile soil and appropriate climate so as to produce
						high-quality spices that can be harvested throughout the
						year. Bali Bean Spice is committed to helping farmers
						realize sustainable spice farming to consistently
						provide a variety of premium spices and grains while
						facilitating fair trade by providing reasonable and fair
						prices to Indonesian farmers.
					</p>
				</div>
				<div className="product-img">
					<div className="product-img-group">
						<img src={ImgProduct1} alt="product 1" />
						<h3 className="product-name">Coffee</h3>
					</div>
					<div className="product-img-group">
						<img src={ImgProduct2} alt="product 2" />
						<h3 className="product-name">Coffee</h3>
					</div>
					<div className="product-img-group">
						<img src={ImgProduct3} alt="product 3" />
						<h3 className="product-name">Coffee</h3>
					</div>
				</div>
				<Link to="/product">
					<button className="btn bg-orange">More Product</button>
				</Link>
			</div>

			<Gallery />

			<Team />

			<Question />

			{/* <iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15782.038406199643!2d115.39042125!3d-8.546895750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd211ef7eb83db5%3A0xac69096afe44cae!2sPuskesmas%20Banjarangkan%201!5e0!3m2!1sid!2sid!4v1645617238436!5m2!1sid!2sid"
				width="600"
				height="450"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
			></iframe> */}

			<Footer />
		</div>
	);
}

export default Home;
