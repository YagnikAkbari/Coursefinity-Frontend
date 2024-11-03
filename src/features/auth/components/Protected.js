import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuthenticated } from "../auth-slice";

function Protected({ children }) {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const { isCheckAuth } = useSelector((state) => state.auth);

  if (isCheckAuth && !isAuthenticated) {
    return <Navigate to="/auth/signin?mode=learner" replace={true}></Navigate>;
  }
  return children;
}

export default Protected;
