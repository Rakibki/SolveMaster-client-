import { useContext } from "react";
import { authContext } from "../provider/authProvider/AuthProvider";
import Loader from "../components/loader/Loader";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loadding } = useContext(authContext);
  const navigate = useNavigate();

  if (loadding) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return navigate("/login");
};

export default PrivateRoute;