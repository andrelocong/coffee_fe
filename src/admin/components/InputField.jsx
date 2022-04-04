import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ className, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className={className}>
			<input
				className={`px-10 py-10 width-full font-16 outline-orange border-radius-5 border-1 ${
					meta.touched &&
					meta.error &&
					"outline-red border-red border-2"
				}`}
				{...field}
				{...props}
				autoComplete="off"
			/>
			<ErrorMessage
				component="div"
				name={field.name}
				className="font-13 color-red"
			/>
		</div>
	);
};

export const SelectField = ({ className, placeholder, option, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className={className}>
			<select
				className={`px-10 py-10 width-full font-16 outline-orange border-radius-5 border-1 cursor-pointer appearance-none ${
					meta.touched &&
					meta.error &&
					"outline-red border-red border-2"
				}`}
				{...field}
				{...props}
			>
				<option value="" hidden>
					{placeholder}
				</option>
				{option}
			</select>
			<ErrorMessage
				component="div"
				name={field.name}
				className="font-13 color-red"
			/>
		</div>
	);
};
