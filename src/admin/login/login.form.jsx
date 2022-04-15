import React from "react";
import { TextField } from "../components/formField";
import { useLogin } from "./login.hook";

const LoginForm = () => {
	const { formik, error } = useLogin();
	return (
		<div className="width-full">
			<div className="px-20">
				<form onSubmit={formik.handleSubmit}>
					<div className="block">
						<div className="color-red text-center mb-10">
							{error}
						</div>
						<TextField
							name="username"
							type="text"
							placeholder="Username"
							containerClassName="width-full pb-10"
							onChange={formik.handleChange}
							value={formik.values.username}
							onBlur={formik.handleBlur}
							errorMessage={formik.errors.username}
							touched={formik.touched.username}
						/>
						<TextField
							name="password"
							type="password"
							placeholder="Password"
							containerClassName="width-full pb-10"
							onChange={formik.handleChange}
							value={formik.values.password}
							onBlur={formik.handleBlur}
							errorMessage={formik.errors.password}
							touched={formik.touched.password}
						/>
						<div className="width-full justify-center mb-20">
							<button
								className="width-300 bg-orange border-none border-radius-20 font-16 color-white height-40 cursor-pointer outline-none"
								type="submit"
							>
								Login
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
