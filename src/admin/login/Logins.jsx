import React from "react";
import bg from "../../img/pexels-michael-burrows-7125709.jpg";
import company from "../../img/logo.8dfda37d.png";
import FormLogin from "./FormLogin";

function Login() {
	return (
		<div className="login">
			<div className="width-full height-100vh position-fixed z-index-9">
				<div className="position-fixed top-0 right-0 bottom-0 left-0 z-index-10 bg-black-06"></div>
				<img
					className="width-full height-full object-fit-cover object-position-center position-relative z-index-9"
					src={bg}
					alt="bg"
				/>
			</div>
			<div className="width-full height-100vh flex-center position-relative z-index-10">
				<div className="block bg-white border-radius-10 width-400">
					<div className="width-full justify-center my-20">
						<img
							className="width-150 height-auto"
							src={company}
							alt="company"
						/>
					</div>
					<FormLogin />
				</div>
			</div>
		</div>
	);
}

export default Login;
