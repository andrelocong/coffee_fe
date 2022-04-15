import React from "react";
import SuccessAlert from "../components/SuccessAlert";
import { TextField } from "../components/formField";

const QuantityCreate = (props) => {
	const formik = props.formik;

	return (
		<div className="create-quantity">
			<SuccessAlert
				isAlert={props.isAlert}
				text="Quantity was created!"
			/>

			<div className={props.isCreateModal ? "modal active" : "modal"}>
				<form onSubmit={formik.handleSubmit}>
					<div className="flex-center">
						<div className="block width-338 height-auto bg-white border-radius-10 mt-100">
							<div className="border-bottom-1 border-grey">
								<p className="ml-20 font-20 my-20">
									Create Quantity
								</p>
							</div>

							<TextField
								name="quantity"
								type="text"
								placeholder="Input quantity"
								containerClassName="width-268 mx-auto my-20"
								onChange={formik.handleChange}
								value={formik.values.quantity}
								onBlur={formik.handleBlur}
								errorMessage={formik.errors.quantity}
								touched={formik.touched.quantity}
							/>

							<div className="flex py-20 border-top-1 border-grey">
								<button
									className="bg-orange px-10 py-5 border-none border-radius-5 cursor-pointer font-16 ml-20 color-white"
									type="submit"
								>
									Save
								</button>
								<button
									className="bg-grey px-10 py-5 border-none border-radius-5 cursor-pointer font-16 ml-20 color-white"
									onClick={() => {
										props.setIsCreateModal(false);
									}}
									type="button"
								>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default QuantityCreate;
