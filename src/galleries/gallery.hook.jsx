import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = () => {
	const [isImageModal, setIsImageModal] = useState(false);
	const [imagePreview, setImagePreview] = useState("");
	const [images, setImages] = useState([]);

	const showData = async () => {
		const images = await axios.get("http://localhost:5000/gallery");
		setImages(images.data.data);
	};

	useEffect(() => {
		showData();
	}, []);

	const handleImageModal = (img) => {
		setIsImageModal(true);
		setImagePreview(img);
	};

	return {
		isImageModal,
		setIsImageModal,
		imagePreview,
		images,
		handleImageModal,
	};
};
