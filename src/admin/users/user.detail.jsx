import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Photo from "../../img/—Pngtree—avatar icon profile icon member_5247852.png";
import EditDataUser from "./user.edit";
import ChangeImage from "./user.changeImage";
import DangerAlert from "../components/DangerAlert";

function UserDetail() {
	const { id } = useParams();
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		phone: "",
		role: "",
	});
	const [image, setImage] = useState("");
	const [isEditModal, setIsEditModal] = useState(false);
	const [isChangeImageModal, setIsChangeImageModal] = useState(false);
	const navigate = useNavigate();
	const [isBgAlert, setIsBgAlert] = useState(false);
	const [isDangerAlert, setIsDangerAlert] = useState(false);

	const showDataById = async () => {
		let users = await axios.get(`http://localhost:5000/user/${id}`);
		const user = users.data.data;
		if (users.data.data === null) {
			console.log("empty");
		} else {
			setData({
				firstName: user.first_name,
				lastName: user.last_name,
				username: user.username,
				email: user.email,
				phone: user.phone,
				role: user.role.name,
			});
			if (user.image === null) {
				setImage(Photo);
			} else {
				setImage(user.image);
			}
		}
	};

	useEffect(() => {
		showDataById();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleDelete = async () => {
		await axios.delete(`http://localhost:5000/user/${id}`);

		navigate("/admin/user-list");
		showDataById();
	};

	return (
		<div className="detail-user">
			<EditDataUser
				id={id}
				isEditModal={isEditModal}
				setIsEditModal={setIsEditModal}
				showDataById={showDataById}
			/>

			<ChangeImage
				isChangeImageModal={isChangeImageModal}
				setIsChangeImageModal={setIsChangeImageModal}
				id={id}
				showDataById={showDataById}
			/>

			<DangerAlert
				isBgAlert={isBgAlert}
				isDangerAlert={isDangerAlert}
				setIsBgAlert={setIsBgAlert}
				setIsDangerAlert={setIsDangerAlert}
				deleteData={handleDelete}
			/>

			<h1 className="my-40">Detail User</h1>

			<div className="justify-space-between">
				<div className="width-350 height-300 bg-white justify-center border-radius-10">
					<div className="block heigth-full mt-40">
						<div className="width-150 height-150 border-radius-100 text-center">
							<img
								className="width-full height-full border-radius-100 object-fit-cover object-position-center"
								src={image}
								alt="user"
							/>
							<h1 className="font-20 text-capitalize">
								{data.firstName} {data.lastName}
							</h1>
							<p>{data.email}</p>
						</div>
					</div>
				</div>

				<div className="width-739 height-auto bg-white border-radius-10">
					<div className="width-700 mx-auto mt-20">
						<h2 className="font-20 ml-6">Full Name</h2>
						<div className="width-full border-bottom-1 border-grey">
							<p className="ml-6 text-capitalize">
								{data.firstName} {data.lastName}
							</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Username</h2>
							<p className="ml-6">{data.username}</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Email</h2>
							<p className="ml-6">{data.email}</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Phone</h2>
							<p className="ml-6">{data.phone}</p>
						</div>
						<div className="width-full border-bottom-1 border-grey">
							<h2 className="font-20 ml-6">Role</h2>
							<p className="ml-6 text-capitalize">{data.role}</p>
						</div>

						<div className="width-full flex my-20">
							<button
								onClick={() => setIsEditModal(true)}
								className="bg-orange px-10 py-5 border-none cursor-pointer font-16 mr-5 border-radius-5 color-white"
							>
								Edit
							</button>
							<button
								className="bg-orange px-10 py-5 border-none cursor-pointer font-16 mr-5 border-radius-5 color-white"
								onClick={() => {
									setIsChangeImageModal(true);
								}}
							>
								Change Image
							</button>
							<button className="bg-orange px-10 py-5 border-none cursor-pointer font-16 mr-5 border-radius-5 color-white">
								Change Password
							</button>
							<button
								className="bg-red px-10 py-5 border-none cursor-pointer font-16 mr-5 border-radius-5 color-white"
								onClick={() => {
									setIsBgAlert(true);
									setIsDangerAlert(true);
								}}
							>
								Delete
							</button>
							<Link
								className="bg-grey px-10 py-5 border-none cursor-pointer font-16 mr-5 border-radius-5 color-white text-decoration-none"
								to="/admin/user-list"
							>
								Back
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserDetail;
