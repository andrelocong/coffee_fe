import axios from "axios";
import React, { useEffect, useState } from "react";

const UserEdit = (props) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [status, setStatus] = useState("");

	// const showDataEdit = async () => {
	// 	let users = await axios.get(`http://localhost:5000/user/${props.id}`);
	// 	const user = users.data.data;

	// 	setFirstName(user.first_name);
	// 	setLastName(user.last_name);
	// 	setUsername(user.username);
	// 	if (user.email === null) {
	// 		setEmail("");
	// 	} else {
	// 		setEmail(user.email);
	// 	}
	// 	if (user.phone === null) {
	// 		setPhone("");
	// 	} else {
	// 		setPhone(user.phone);
	// 	}
	// 	setStatus(user.status);
	// };

	useEffect(() => {
		// showDataEdit();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const updateData = async (e) => {
		e.preventDefault();
		await axios.patch(`http://localhost:5000/user/${props.id}`, {
			firstName: firstName,
			lastName: lastName,
			username: username,
			email: email,
			phone: phone,
			status: status,
		});

		props.setIsEditModal(false);
		props.showDataById();
	};

	return (
		<div className="edit-data-user">
			<div className={props.isEditModal ? "modal active" : "modal"}>
				<form onSubmit={updateData}>
					<div
						className="flex-center"
						onClick={() => props.setIsEditModal(false)}
					>
						<div
							className="block width-500 heigth-auto bg-white border-radius-10 mt-100"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="height-60 border-bottom-1 border-grey alig-item-center">
								<p className="ml-20 font-20">Input Team Data</p>
							</div>

							<div className="border-bottom-1 border-grey">
								<div className="width-464 height-39 alig-item-center ml-20 pt-20">
									<input
										className="width-full height-full font-20 px-15"
										type="text"
										placeholder="First name, ex: Lala"
										value={firstName}
										onChange={(e) =>
											setFirstName(e.target.value)
										}
									/>
								</div>
								<div className="width-464 height-39 alig-item-center ml-20 pt-20">
									<input
										className="width-full height-full font-20 px-15"
										type="text"
										placeholder="Last name, ex: Lalisa"
										value={lastName}
										onChange={(e) =>
											setLastName(e.target.value)
										}
									/>
								</div>
								<div className="width-464 height-39 alig-item-center ml-20 pt-20">
									<input
										className="width-full height-full font-20 px-15"
										type="text"
										placeholder="Username, ex: lalalisa"
										value={username}
										onChange={(e) =>
											setUsername(e.target.value)
										}
									/>
								</div>
								<div className="width-464 height-39 alig-item-center ml-20 pt-20">
									<input
										className="width-full height-full font-20 px-15"
										type="text"
										placeholder="Email"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
								<div className="width-464 height-39 alig-item-center ml-20 pt-20">
									<input
										className="width-full height-full font-20 px-15"
										type="text"
										placeholder="Phone"
										value={phone}
										onChange={(e) =>
											setPhone(e.target.value)
										}
									/>
								</div>
								<div className="width-464 height-39 alig-item-center ml-20 pt-20">
									<select
										className="width-full height-full font-20 px-15 cursor-pointer"
										value={status}
										onChange={(e) =>
											setStatus(e.target.value)
										}
									>
										<option value="" hidden>
											Choose status
										</option>
										<option value="master">Master</option>
										<option value="admin">Admin</option>
									</select>
								</div>
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

export default UserEdit;
