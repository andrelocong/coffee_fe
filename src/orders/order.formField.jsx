import React from "react";
import "./order.css";

export const TextField = ({ title, errorMessage, touched, ...props }) => {
	let isError = "";

	if (touched === true) {
		isError = errorMessage;
	}

	return (
		<div className="form-group">
			<p className="form-title">{title}</p>
			<div
				className={`width-99percen justify-center border-radius-5 border-1 ${
					isError && "border-red border-2"
				}`}
			>
				<input
					className="py-8 border-none outline-none font-16 width-95percen"
					{...props}
					autoComplete="off"
				/>
			</div>
			{isError ? (
				<div className="font-13 color-red">{errorMessage}</div>
			) : null}
		</div>
	);
};

export const SelectField = ({
	title,
	placeholder,
	option,
	errorMessage,
	touched,
	...props
}) => {
	let isError = "";

	if (touched === true) {
		isError = errorMessage;
	}

	return (
		<div className="form-group">
			<p className="form-title">{title}</p>
			<div
				className={`width-99percen justify-center font-16 outline-none border-radius-5 border-1 ${
					isError && "outline-red border-red border-2"
				}`}
			>
				<select
					className="py-10 font-16 outline-none border-none width-95percen appearance-none cursor-pointer"
					{...props}
				>
					<option value="" hidden>
						{placeholder}
					</option>
					{option}
				</select>
			</div>
			{isError ? (
				<div className="font-13 color-red">{errorMessage}</div>
			) : null}
		</div>
	);
};

export const TextAreaField = ({ title, errorMessage, touched, ...props }) => {
	let isError = "";

	if (touched === true) {
		isError = errorMessage;
	}
	return (
		<div className="form-group">
			<p className="form-title">{title}</p>
			<div
				className={`width-99percen justify-center border-radius-5 border-1 height-auto ${
					isError && "border-red border-2"
				}`}
			>
				<textarea
					className="py-8 border-none outline-none font-16 width-95percen height-108 resize-none line-height-22"
					{...props}
				></textarea>
			</div>
			{isError ? (
				<div className="font-13 color-red">{errorMessage}</div>
			) : null}
		</div>
	);
};
