import Image from "next/image";
import React, { useState, useEffect } from "react";

const Carousel = ({ images }: { images: string[] }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, 500);
	}, []);

	return (
		<div className="carousel">
			<Image
				key={currentIndex}
				src={images[currentIndex]}
				alt="image"
				width={480}
				height={640}
				className="mx-auto rounded-xl"
			/>
		</div>
	);
};

export default Carousel;
