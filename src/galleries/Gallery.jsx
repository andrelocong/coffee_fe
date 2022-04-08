import React, { useEffect, useState } from "react";
import "./gallery.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ButtonExtend from "../components/ButtonExtend";
import axios from "axios";

function Gallery() {
	const [isModal, setIsModal] = useState(false);
	const [imgTmp, setImgTmp] = useState("");
	const [image, setImage] = useState([]);

	const showImage = async () => {
		const image = await axios.get("http://localhost:5000/gallery");

		setImage(image.data.gallery);
	};

	useEffect(() => {
		showImage();
	}, []);

	const handleModal = (img) => {
		setIsModal(true);
		setImgTmp(img);
	};

	return (
		<div className="galleries">
			<ButtonExtend />
			<Hero />

			<div className={isModal ? "modal active" : "modal"}>
				<div
					className="modal-content"
					onClick={() => setIsModal(false)}
				>
					<div className="modal-body">
						<img
							className="modal-img"
							src={imgTmp}
							alt="product"
							onClick={(e) => e.stopPropagation()}
						/>
					</div>
				</div>
			</div>

			<h1 className="galleries-title">Gallery</h1>
			<div className="galleries-body">
				{image.map((data, index) => {
					return (
						<div className="galleries-content" key={index}>
							<img
								className="galleries-img"
								src={data.image}
								alt="product"
								onClick={() => handleModal(data.image)}
							/>
						</div>
					);
				})}
			</div>
			<div className="galleries-footer">
				<div className="list-border cursor-disabled">
					<i className="fas fa-chevron-double-left icon"></i>
				</div>
				<div className="list-border cursor-disabled">
					<i className="fas fa-chevron-left icon"></i>
				</div>
				<div className="list-border bg-orange list-font">1</div>
				<div className="list-border cursor-disabled">
					<i className="fas fa-chevron-right icon"></i>
				</div>
				<div className="list-border cursor-disabled">
					<i className="fas fa-chevron-double-right icon"></i>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Gallery;
