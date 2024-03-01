"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

const ImageEditor = () => {
	const imageRef = useRef(null);
	const canvasRef = useRef(null);
	const [image, setImage] = useState(null);
	const [text, setText] = useState("");
	const [textColor, setTextColor] = useState("#000000");
	const [fontSize, setFontSize] = useState(20);
	const [theme, setTheme] = useState("default");
	const [imageEffect, setImageEffect] = useState("none");
	const [addBorder, setAddBorder] = useState(false);

	const handleChange = () => {
		const file = imageRef.current.files[0];
		setImage(file);
	};

	const handleSaveImage = () => {
		const canvas = canvasRef.current;
		const dataUrl = canvas.toDataURL("image/png");
		const link = document.createElement("a");
		link.href = dataUrl;
		link.download = "edited_image.png";
		link.click();
	};

	const handleTextChange = (event) => {
		setText(event.target.value);
	};

	const handleTextColorChange = (event) => {
		setTextColor(event.target.value);
	};

	const handleFontSizeChange = (event) => {
		setFontSize(parseInt(event.target.value));
	};

	const handleApplyTextOverlay = (e) => {
		e.preventDefault();
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, 300, 300);
		const img = document.createElement("img");
		img.onload = () => {
			canvas.width = 300;
			canvas.height = 300;
			let scale = 1;
			if (img.width > img.height) {
				scale = 300 / img.width;
			} else {
				scale = 300 / img.height;
			}
			const newWidth = img.width * scale;
			const newHeight = img.height * scale;
			const offsetX = (300 - newWidth) / 2;
			const offsetY = (300 - newHeight) / 2;
			ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
			ctx.font = `${fontSize}px Arial`;
			ctx.fillStyle = textColor;
			ctx.fillText(text, 100, 100);
			if (addBorder) {
				ctx.strokeStyle = "black";
				ctx.lineWidth = 5;
				ctx.strokeRect(offsetX, offsetY, newWidth, newHeight);
			}
		};
		img.src = URL.createObjectURL(image);
	};

	const handleClick = (e) => {
		e.preventDefault();
		imageRef.current.click();
	};

	const handleThemeChange = (selectedTheme) => {
		setTheme(selectedTheme);
	};

	const handleImageEffectChange = (selectedEffect) => {
		setImageEffect(selectedEffect);
	};

	const handleAddBorder = () => {
		setAddBorder(true);
	};

	return (
		<div
			className={`py-24 ${theme === "dark" ? "bg-gray-900 text-white" : ""}`}
		>
			<div className="flex justify-center   items-center w-full">
				<form className=" flex flex-col items-center p-8 bg-[#151821]">
					<div className="flex justify-center items-center">
						<h1 className="text-3xl my-4 text-white font-semibold">
							Image Editor
						</h1>
					</div>
					{image && (
						<div
							className={`image-container flex gap-4 ${
								imageEffect !== "none" ? imageEffect : ""
							}`}
						>
							<Image
								src={URL.createObjectURL(image)}
								width={300}
								height={300}
								alt="Editable Image"
							/>
							<canvas
								ref={canvasRef}
								width={300}
								height={300}
								className="mt-4 border border-gray-400 object-contain "
							></canvas>
						</div>
					)}
					<div className="mt-4">
						<input
							type="file"
							className="hidden"
							onChange={handleChange}
							ref={imageRef}
						/>
						<button
							type="button"
							className={`px-4 py-2 border-2 hover:bg-blue-700 rounded-md ${
								theme === "dark"
									? "bg-blue-800 border-blue-900 text-white"
									: "bg-blue-500 border-blue-800"
							}`}
							onClick={handleClick}
						>
							Upload Image
						</button>
					</div>
					<div className="mt-4 flex gap-4 items-center">
						<textarea
							value={text}
							onChange={handleTextChange}
							placeholder="Enter text to overlay"
							className="border border-gray-400 rounded-md p-2"
						></textarea>
						<input
							type="color"
							value={textColor}
							onChange={handleTextColorChange}
							className="mt-2"
						/>
						<input
							type="range"
							min="10"
							max="50"
							value={fontSize}
							onChange={handleFontSizeChange}
							className="mt-2"
						/>
						<button
							type="button"
							onClick={handleApplyTextOverlay}
							className={`px-4 py-2 border-2 hover:bg-blue-700 rounded-md ${
								theme === "dark"
									? "bg-blue-800 border-blue-900 text-white"
									: "bg-blue-500 border-blue-800"
							}`}
						>
							Apply Text Overlay
						</button>
					</div>
					<div className="mt-4 flex gap-4">
						<button
							type="button"
							onClick={() => handleThemeChange("default")}
							className="px-4 py-2 border-2 bg-blue-700 rounded-md mr-2"
						>
							Default Theme
						</button>
						<button
							type="button"
							onClick={() => handleThemeChange("dark")}
							className="px-4 py-2 border-2 bg-blue-700 rounded-md"
						>
							Dark Theme
						</button>
						<button
							type="button"
							onClick={() => handleImageEffectChange("none")}
							className="px-4 py-2 border-2 bg-blue-700 rounded-md mr-2"
						>
							No Effect
						</button>
						<button
							type="button"
							onClick={() => handleImageEffectChange("border")}
							className="px-4 py-2 border-2 bg-blue-700 rounded-md mr-2"
						>
							Add Border
						</button>
					</div>

					<div className="mt-4">
						<button
							type="button"
							onClick={handleSaveImage}
							className={`px-4 py-2 border-2 hover:bg-blue-700 rounded-md ${
								theme === "dark"
									? "bg-blue-800 border-blue-900 text-white"
									: "bg-blue-500 border-blue-800"
							}`}
						>
							Save Image
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ImageEditor;
