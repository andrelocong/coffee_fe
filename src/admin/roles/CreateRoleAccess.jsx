import React, { useState } from "react";
import axios from "axios";
import SuccessAlert from "../components/SuccessAlert";

const CreateRoleAccess = (props) => {
	const [isAlert, setIsAlert] = useState(false);
	const [menu, setMenu] = useState("");
	console.log(menu);

	const storeData = async (e) => {
		e.preventDefault();
		await axios.post("http://localhost:5000/role-access", {
			menu: menu,
			roleId: props.id,
		});

		props.setIsModal(false);
		setTimeout(() => {
			setMenu("");
			setIsAlert(true);
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
		props.showData();
	};

	const handleChange = (e) => {
		setMenu(e.target.value);
	};

	const handleCancel = () => {
		props.setIsModal(false);
		setTimeout(() => {
			setMenu("");
		}, 200);
	};
	return (
		<div className="create-role-access">
			<SuccessAlert isAlert={isAlert} text="Main category was created!" />

			<div className={props.isModal ? "modal active" : "modal"}>
				<form onSubmit={storeData}>
					<div className="flex-center">
						<div className="block width-338 height-auto bg-white border-radius-10 mt-100">
							<div className="border-bottom-1 border-grey">
								<p className="ml-20 font-20 my-20">
									Create Role Access
								</p>
							</div>

							<div className="height-auto justify-center py-20 border-bottom-1 border-grey">
								<select
									className="width-268 py-10 px-15 font-18"
									value={menu}
									onChange={(e) => handleChange(e)}
								>
									<option value="" hidden>
										Choose menu
									</option>
									<option value="order list">
										Order List
									</option>
									<option value="product">Product</option>
									<option value="gallery">Gallery</option>
									<option value="sosial media">
										Sosial Media
									</option>
									<option value="team">Team</option>
									<option value="user">User</option>
									<option value="main category">
										Main Category
									</option>
									<option value="category">Category</option>
									<option value="sub category">
										Sub Category
									</option>
									<option value="quantity">Quantity</option>
									<option value="role">Role</option>
								</select>
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

export default CreateRoleAccess;
