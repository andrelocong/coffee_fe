import React from "react";
import Navbar from "./Navbar";
import Img from "../img/pexels-michael-burrows-7125709.jpg";

const Hero = () => {
	return (
		<div className="hero">
			<Navbar />

			<div className="hero-content">
				<div className="hero-bg"></div>
				<img className="hero-img" src={Img} alt="hero" />
			</div>
		</div>
	);
};

export default Hero;
