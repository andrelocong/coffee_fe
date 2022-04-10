import React from "react";
import SuccessAlert from "../components/SuccessAlert";
import { TextField } from "../components/formField";
import { useUpdate } from "./sosmed.hook";

const SosmedEdit = (props) => {
	const setIsEditModal = props.setIsEditModal;
	const showData = props.showData;
	const value = props.values;
	const id = props.id;

	const { formik, isAlert } = useUpdate(setIsEditModal, showData, id, value);

	return (
		<div className="update-sosmed">
			<SuccessAlert isAlert={isAlert} text="Sosmed data has changed!" />

			<div className={props.isEditModal ? "modal active" : "modal"}>
				<form onSubmit={formik.handleSubmit}>
					<div className="flex-center">
						<div className="block width-300 heigth-auto bg-white border-radius-10 mt-100">
							<div className="height-60 border-bottom-1 border-grey alig-item-center">
								<p className="ml-20 font-20">
									Edit Sosial Media
								</p>
							</div>

							<div className="border-bottom-1 border-grey">
								<TextField
									name="sosmed"
									type="text"
									placeholder="Input sosial media name"
									containerClassName="width-268 mx-auto my-20"
									onChange={formik.handleChange}
									value={formik.values.sosmed}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.sosmed}
									touched={formik.touched.sosmed}
								/>
								<TextField
									name="address"
									type="text"
									placeholder="Input sosial media address"
									containerClassName="width-268 mx-auto my-20"
									onChange={formik.handleChange}
									value={formik.values.address}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.address}
									touched={formik.touched.address}
								/>
							</div>

							<div className="height-60 alig-item-center">
								<button
									className="bg-orange px-10 py-5 border-none border-radius-5 cursor-pointer font-16 ml-20 color-white"
									type="submit"
								>
									Save
								</button>
								<button
									className="bg-grey px-10 py-5 border-none border-radius-5 cursor-pointer font-16 ml-20 color-white"
									type="button"
									onClick={() => {
										props.setIsEditModal(false);
										formik.resetForm();
									}}
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

export default SosmedEdit;
