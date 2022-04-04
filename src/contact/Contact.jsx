import React from "react";
import "./Contact.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ButtonExtend from "../components/ButtonExtend";

function Contact() {
	return (
		<div className="contact">
			<ButtonExtend />
			<Hero />
			<h1 className="contact-title">Contact Us</h1>
			<div className="contact-body">
				<p className="font-weight-700 font-18 mt-10 mb-20">Service</p>
				<p className="font-nunito m-0 font-18">
					<i className="fas fa-calendar-alt mr-8 color-yellow"></i>
					Monday-Friday
				</p>
				<p className="font-nunito m-0 font-18">
					<i className="fas fa-clock mr-5 color-yellow"></i>
					08:30-18:00 (Indonesian Central Time)
				</p>
				<p className="font-nunito m-0 font-18">
					<i className="fas fa-map-marker-alt color-red mr-10 mt-4"></i>
					Benoa Square 2nd Floor Jl Bypass Ngurah Rai No 21A,
					Kedonganan Kuta - Bali 80361 Indonesia
				</p>
				<p className="font-nunito m-0 mt-30 font-18">
					Email: info@balibeanspice.com
				</p>
				<p className="font-nunito m-0 font-18">
					WhatsApp: +6281139413003
				</p>
				<p className="font-nunito m-0 font-18">
					Office line: +623612003241
				</p>
				<div className="sosmed mt-20">
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
			<Footer />
		</div>
	);
}

export default Contact;
