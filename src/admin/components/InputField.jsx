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
			<select
				className={`px-10 py-10 width-full font-16 outline-none border-radius-5 border-1 cursor-pointer appearance-none ${
					isError && "outline-red border-red border-2"
				}`}
				{...props}
			>
				<option value="" hidden>
					{placeholder}
				</option>
				{option}
			</select>
			<div></div>
			{isError ? (
				<div className="font-13 color-red">{errorMessage}</div>
			) : null}
		</div>
	);
};
