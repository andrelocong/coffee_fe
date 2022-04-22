import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
	const location = useLocation();
	const token = useSelector((state) => state.token.accessToken);
	if (!token) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}
	return children;
};

export default Private;
