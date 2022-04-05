import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ className, value, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className={className}>
			<div
				className={`py-8 width-99percen justify-center border-radius-5 border-1 ${
					meta.touched && meta.error && "border-red border-2"
				}`}
			>
				<input
					className="border-none outline-none font-16 width-95percen"
					{...field}
					{...props}
					value={value}
					autoComplete="off"
				/>
			</div>
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
