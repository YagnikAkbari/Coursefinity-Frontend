import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getIsAuthenticated } from "../auth-slice";
import { useEffect } from "react";

function Protected({ children }) {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const navigate = useNavigate();
  const { isCheckAuth } = useSelector((state) => state.auth);
  const checkAuth = async () => {
    try {
      let data = localStorage.getItem("user") ?? null;

      if (!data) {
        navigate("/auth/signin?mode=learner");
      }
    } catch (error) {
      navigate("/auth/signin?mode=learner");
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);

  if (isCheckAuth && !isAuthenticated) {
    return <Navigate to="/auth/signin?mode=learner" replace={true}></Navigate>;
  }
  return children;
}

export default Protected;
