import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function Admin() {
	return (
		<div className="admin width-full min-height-100vh max-height-auto bg-grey pb-20 overflow-hidden">
			<Sidebar />

			<div className="width-1125 height-auto pl-270">
				<div className="width-1100 mx-auto">
					<NavBar />

					<div className="content">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Admin;
