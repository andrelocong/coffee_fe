import axios from "axios";
import React, { useState } from "react";
import SuccessAlert from "../components/SuccessAlert";

const UpdateMainCategory = (props) => {
	const [isAlert, setIsAlert] = useState(false);

	const updateDataMainCategory = async (e) => {
		e.preventDefault();
		await axios.patch(
			`http://localhost:5000/main-category/${props.categoryId}`,
			{
				name: props.name,
			}
		);

		props.setIsUpdateModal(false);
		setTimeout(() => {
			setIsAlert(true);
			props.showData();
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const handleCancel = () => {
		props.setIsUpdateModal(false);
	};

	return (
		<div className="update-main-category">
			<SuccessAlert isAlert={isAlert} text="Main category was updated!" />

			<div className={props.isUpdateModal ? "modal active" : "modal"}>
				<form onSubmit={updateDataMainCategory}>
					<div className="flex-center">
						<div className="block width-338 height-auto bg-white border-radius-10 mt-100">
							<div className="border-bottom-1 border-grey">
								<p className="ml-20 font-20 my-20">
									Create Main Category
								</p>
							</div>

							<div className="height-auto justify-center py-20 border-bottom-1 border-grey">
								<input
									className="width-268 py-10 px-15 font-18"
									type="text"
									placeholder="Input main category"
									value={props.name}
									onChange={(e) =>
										props.setName(e.target.value)
									}
								/>
							</div>

							<div className="flex py-20">
								<button
									className="bg-orange px-10 py-5 border-none border-radius-5 cursor-pointer font-16 ml-20 color-white"
									type="submit"
								>
									Save
								</button>
								<button
									className="bg-grey px-10 py-5 border-none border-radius-5 cursor-pointer font-16 ml-20 color-white"
									onClick={() => handleCancel()}
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

export default UpdateMainCategory;
