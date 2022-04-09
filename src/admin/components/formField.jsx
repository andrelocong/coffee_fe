import React from "react";

export const TextField = ({
	containerClassName,
	errorMessage,
	touched,
	...props
}) => {
	let isError = "";

	if (touched === true) {
		isError = errorMessage;
	}

	return (
		<div className={containerClassName}>
			<div
				className={`py-8 width-99percen justify-center border-radius-5 border-1 ${
					isError && "border-red border-2"
				}`}
			>
				<input
					className="border-none outline-none font-16 width-95percen"
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
	containerClassName,
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
		<div className={containerClassName}>
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

export const TextAreaField = ({
	containerClassName,
	errorMessage,
	touched,
	...props
}) => {
	let isError = "";

	if (touched === true) {
		isError = errorMessage;
	}

	const handleAutoRize = (e) => {
		e.target.style.height = "auto";
		let scHeight = e.target.scrollHeight;
		e.target.style.height = `${scHeight}px`;
	};

	return (
		<div className={containerClassName}>
			<div
				className={`py-8 width-99percen justify-center border-radius-5 border-1 height-auto ${
					isError && "border-red border-2"
				}`}
			>
				<textarea
					className="border-none outline-none font-16 width-95percen height-full resize-none overflow-hidden line-height-22"
					onKeyUp={(e) => handleAutoRize(e)}
					{...props}
				></textarea>
			</div>
			{isError ? (
				<div className="font-13 color-red">{errorMessage}</div>
			) : null}
		</div>
	);
};
