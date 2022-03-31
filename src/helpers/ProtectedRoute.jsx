import { useContext } from "react";
import { AuthContext } from "../api/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
//import only Navigate because we want to navigate
//use navigate hook redirects
//include the myprofile inside Protected route in streambasedRoutes
const ProtectedRoute = ({ children }) => {
  let location = useLocation();
  if (sessionStorage.getItem("TOKEN")) {
    return children;
  } else {
    return <Navigate to="/signin" state={{ from: location }} replace />
  }

  
};
export default ProtectedRoute;
