import React from "react";
import SuccessAlert from "../components/SuccessAlert";
import { TextField, TextAreaField } from "../components/formField";
import { useUpdate } from "./team.hook";

const TeamEdit = (props) => {
	const setIsEditModal = props.setIsEditModal;
	const showData = props.showData;
	const values = props.values;

	const { formik, isAlert } = useUpdate(setIsEditModal, showData, values);

	return (
		<div className="edit-team">
			<SuccessAlert isAlert={isAlert} text="Data was updated!" />

			<div className={props.isEditModal ? "modal active" : "modal"}>
				<form onSubmit={formik.handleSubmit}>
					<div className="flex-center">
						<div className="block width-550 heigth-auto bg-white border-radius-10 mt-100">
							<div className="height-60 border-bottom-1 border-grey alig-item-center">
								<p className="ml-20 font-20">Input Team Data</p>
							</div>

							<div className="border-bottom-1 border-grey">
								<TextField
									name="name"
									type="text"
									placeholder="Name, ex: Lala Lalisa."
									containerClassName="width-530 mx-auto my-10"
									onChange={formik.handleChange}
									value={formik.values.name}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.name}
									touched={formik.touched.name}
								/>
								<TextField
									name="position"
									type="text"
									placeholder="Positions, ex: Co-Founder."
									containerClassName="width-530 mx-auto my-10"
									onChange={formik.handleChange}
									value={formik.values.position}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.position}
									touched={formik.touched.position}
								/>
								<TextAreaField
									name="desc"
									placeholder="Descriptions"
									containerClassName="width-530 mx-auto my-10"
									onChange={formik.handleChange}
									value={formik.values.desc}
									onBlur={formik.handleBlur}
									errorMessage={formik.errors.desc}
									touched={formik.touched.desc}
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

export default TeamEdit;
