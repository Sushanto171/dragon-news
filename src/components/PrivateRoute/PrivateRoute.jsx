import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);
    const path = useLocation();

    if(! user){
        return <Navigate state={{from:path.pathname}} to="/login" />
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;