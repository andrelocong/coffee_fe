import React from "react";
import IconSuccess from "../../icon/success.png";

const SuccessAlert = (props) => {
	return (
		<div className={props.isAlert ? "alert active bg-black-02" : "alert"}>
			<div className="width-full height-100vh flex-center">
				<div
					className={
						props.isAlert ? "alert-body active" : "alert-body"
					}
				>
					<div className="width-full justify-center">
						<img
							className="width-150 height-150 py-40"
							src={IconSuccess}
							alt="success"
						/>
					</div>
					<div className="width-full text-center">
						<p className="font-35 my-20">{props.text}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SuccessAlert;
