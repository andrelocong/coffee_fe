import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children, ...props }) => {
	const location = useLocation();
	const token = useSelector((state) => state.token.accessToken);
	console.log(token);
	if (!token) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}
	return children;
};

export default Private;
