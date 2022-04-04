import axios from "axios";
import React, { useEffect, useState } from "react";

const EditDataUser = (props) => {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		phone: "",
		role: "",
	});
	const [showRoles, setShowRoles] = useState([]);

	console.log(values);

	const showRole = async () => {
		const role = await axios.get("http://localhost:5000/role");

		setShowRoles(role.data.data);
	};

	const showDataEdit = async () => {
		let users = await axios.get(`http://localhost:5000/user/${props.id}`);
		const user = users.data.data;

		setValues({
			firstName: user.first_name,
			lastName: user.last_name,
			username: user.username,
			email: user.email,
			phone: user.phone,
			role: user.role_id,
		});
		// setFirstName(user.first_name);
		// setLastName(user.last_name);
		// setUsername(user.username);
		// if (user.email === null) {
		// 	setEmail("");
		// } else {
		// 	setEmail(user.email);
		// }
		// if (user.phone === null) {
		// 	setPhone("");
		// } else {
		// 	setPhone(user.phone);
		// }
		// setStatus(user.status);
	};

	useEffect(() => {
		showRole();
		showDataEdit();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const updateData = async (e) => {
		e.preventDefault();
		// await axios.patch(`http://localhost:5000/user/${props.id}`, {
		// 	firstName: firstName,
		// 	lastName: lastName,
		// 	username: username,
		// 	email: email,
		// 	phone: phone,
		// 	status: status,
		// });

		// props.setIsEditModal(false);
		// props.showDataById();
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
										name="firstName"
										placeholder="First name, ex: Lala"
										value={values.firstName}
										onChange={handleChange}
									/>
								</div>
								<div className="width-464 height-39 alig-item-center ml-20 pt-20">
									<input
										className="width-full height-full font-20 px-15"
										type="text"
										name="lastName"
										placeholder="Last name, ex: Lalisa"
										value={values.lastName}
										onChange={handleChange}
									/>
								</div>
								<div className="width-464 height-39 alig-item-center ml-20 pt-20">
									<input
										className="width-full height-full font-20 px-15"
										type="text"
										name="username"
										placeholder="Username, ex: lalalisa"
										value={values.username}
										onChange={handleChange}
									/>
								</div>
								<div className="width-464 height-39 alig-item-center ml-20 pt-20">
									<input
										className="width-full height-full font-20 px-15"
										type="text"
										name="email"
										placeholder="Email"
										value={values.email}
										onChange={handleChange}
									/>
								</div>
								<div className="width-464 height-39 alig-item-center ml-20 pt-20">
									<input
										className="width-full height-full font-20 px-15"
										type="text"
										name="phone"
										placeholder="Phone"
										value={values.phone}
										onChange={handleChange}
									/>
								</div>
								<div className="width-464 height-39 alig-item-center ml-20 pt-20">
									<select
										className="width-full height-full font-20 px-15 cursor-pointer"
										name="role"
										value={values.role}
										onChange={handleChange}
									>
										<option value="" hidden>
											Choose status
										</option>
										{showRoles.map((role, index) => {
											return (
												<option
													value={role.role_id}
													key={index}
												>
													{role.name}
												</option>
											);
										})}
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

export default EditDataUser;
