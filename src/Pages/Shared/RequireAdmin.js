import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../Auth/Firebase.init";
import Loading from "./Loading";
import useAdmin from "./useAdmin";

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()
    const [admin, adminLoading] = useAdmin(user)

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!user || !admin) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;