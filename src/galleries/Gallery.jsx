import React from "react";
import "./gallery.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ButtonExtend from "../components/ButtonExtend";
import { useFetch } from "./gallery.hook";

function Gallery() {
	const {
		isImageModal,
		setIsImageModal,
		imagePreview,
		images,
		handleImageModal,
	} = useFetch();

	return (
		<div className="galleries">
			<ButtonExtend />
			<Hero />

			<div className={isImageModal ? "modal active" : "modal"}>
				<div
					className="modal-content"
					onClick={() => setIsImageModal(false)}
				>
					<div className="modal-body">
						<img
							className="modal-img"
							src={imagePreview}
							alt="product"
							onClick={(e) => e.stopPropagation()}
						/>
					</div>
				</div>
			</div>

			<h1 className="galleries-title">Gallery</h1>
			<div className="galleries-body">
				{images.map((data, index) => {
					return (
						<div className="galleries-content" key={index}>
							<img
								className="galleries-img"
								src={data.image}
								alt="product"
								onClick={() => handleImageModal(data.image)}
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
