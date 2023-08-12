import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const user = useSelector((state) => state.auth.isAuthenticated);

  if (!user) {
    return <Navigate to="/auth/signin?mode=learner" replace={true}></Navigate>;
  }
  return children;
}

export default Protected;
