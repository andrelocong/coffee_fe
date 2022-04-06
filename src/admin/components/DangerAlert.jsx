import React, { useState } from "react";
import IconDanger from "../../icon/exclamation-mark.png";
import IconSuccess from "../../icon/success.png";

const DangerAlert = (props) => {
	const [isNotifAlert, setIsNotifAlert] = useState(false);

	return (
		<div className="danger-alert">
			<div
				className={
					props.isAlert.bgAlert ? "alert active bg-black-02" : "alert"
				}
			></div>
			<div
				className={props.isAlert.dangerAlert ? "alert active" : "alert"}
			>
				<div className="width-full height-100vh flex-center">
					<div
						className={
							props.isAlert.dangerAlert
								? "alert-body active"
								: "alert-body"
						}
					>
						<div className="width-full justify-center">
							<img
								className="width-100 height-100 py-40"
								src={IconDanger}
								alt="danger"
							/>
						</div>
						<div className="width-full text-center">
							<p className="font-35 m-0">Are you sure?</p>
							<p className="font-18 my-20">
								You won't be able to revert this!
							</p>
						</div>
						<div className="width-full justify-center pb-40">
							<button
								className="px-15 py-10 mx-10 border-none border-radius-5 bg-orange color-white font-20 cursor-pointer"
								onClick={() => {
									props.deleteData();
									props.setIsAlert({
										dangerAlert: false,
									});
									setIsNotifAlert(true);
								}}
								type="submit"
							>
								Yes, delete it!
							</button>
							<button
								className="px-15 py-10 mx-10 border-none border-radius-5 bg-grey color-white font-20 cursor-pointer"
								onClick={() => {
									props.setIsAlert({
										bgAlert: false,
										dangerAlert: false,
									});
								}}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className={isNotifAlert ? "alert active" : "alert"}>
				<div className="width-full height-100vh flex-center">
					<div
						className={
							isNotifAlert ? "alert-body active" : "alert-body"
						}
					>
						<div className="width-full justify-center">
							<img
								className="width-100 height-100 py-40"
								src={IconSuccess}
								alt="Success"
							/>
						</div>
						<div className="width-full text-center">
							<p className="font-35 m-0">Deleted!</p>
							<p className="font-18 my-20">
								Your file has been deleted.
							</p>
						</div>
						<div className="width-full justify-center pb-40">
							<button
								className="px-15 py-10 mx-10 border-none border-radius-5 bg-grey color-white font-20 cursor-pointer"
								onClick={() => {
									setIsNotifAlert(false);
									props.setIsAlert({
										bgAlert: false,
									});
								}}
								type="submit"
							>
								Oke
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DangerAlert;
