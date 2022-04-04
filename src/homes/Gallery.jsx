import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Gallery = () => {
	const [isModal, setIsModal] = useState(false);
	const [imgTmp, setImgTmp] = useState("");
	const [image, setImage] = useState([]);

	const showImage = async () => {
		const image = await axios.get("http://localhost:5000/gallery/data");
		console.log(image);
		if (!image.data) {
			console.log("image empty");
		} else {
			setImage(image.data.data);
		}

	};

	useEffect(() => {
		showImage();
	}, []);

	const handleModal = (img, alt) => {
		setImgTmp(img);
		setIsModal(true);
	};

	return (
		<div className="gallery container">
			<div
				className={isModal ? "modal active" : "modal"}
				onClick={() => setIsModal(false)}
			>
				<div className="modal-content">
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

			<div className="container-body text-center">
				<h3 className="home-title">GALLERY</h3>
				<div className="gallery-img">
					{image.map((data, index) => {
						return (
							<div className="gallery-img-body" key={index}>
								<img
									src={data.image}
									alt="product"
									onClick={() => handleModal(data.image)}
								/>
							</div>
						);
					})}
				</div>
				<Link to="/gallery">
					<button className="btn bg-orange">View gallery</button>
				</Link>
			</div>
		</div>
	);
};

export default Gallery;
