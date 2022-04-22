import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearAccessToken } from "../../stores/reducers/token.reducer";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import avatarImage from "../../img/—Pngtree—avatar icon profile icon member_5247852.png";
import { findImageProfileApi } from "../../api/user.api";

const NavBar = () => {
	const [menu, setMenu] = useState(false);
	const [avatar, setAvatar] = useState("");

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const token = useSelector((state) => state.token.accessToken);

	const decode = jwtDecode(token);

	const showImageProfile = async () => {
		const res = await findImageProfileApi(decode.userId);

		if (!res.data.data.image) {
			setAvatar(avatarImage);
		} else {
			setAvatar(res.data.data.image);
		}
	};

	useEffect(() => {
		showImageProfile();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleLogout = () => {
		dispatch(clearAccessToken());

		navigate("/login");
	};

	return (
		<div className="nav-bar width-full height-100 justify-end border-bottom-1">
			<div className="p-20">
				<div className="height-60 width-60 mr-20">
					<img
						className="width-full height-full object-fit-cover object-position-center border-radius-50 cursor-pointer"
						src={avatar}
						alt="admin profile"
						onClick={() => setMenu(!menu)}
					/>
					<div
						className={
							menu
								? "visibility-visible position-fixed right-57 top-83 z-index-10"
								: "visibility-hidden"
						}
					>
						<div
							className="width-100 height-auto justify-center bg-white border-radius-20"
							onClick={(e) => e.stopPropagation()}
						>
							<ul className="list-none p-0">
								<li className="mb-10">
									<Link
										className="text-decoration-none"
										to="/admin/profile"
										onClick={() => setMenu(!menu)}
									>
										Profil
									</Link>
								</li>
								<li
									className="cursor-pointer"
									onClick={() => handleLogout()}
								>
									Logout
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
