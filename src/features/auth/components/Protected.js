import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getIsAuthenticated } from "../auth-slice";
import { useEffect } from "react";
import { checkAutentication } from "../../../services/apiAuth";

function Protected({ children }) {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const navigate = useNavigate();
  const { isCheckAuth } = useSelector((state) => state.auth);
  const checkAuth = async () => {
    try {
      let data = localStorage.getItem("user") ?? null;

      if (data) {
        let userData = JSON.parse(data);
        const response = await checkAutentication(userData?.role);
        if (response?.code !== 200) {
          navigate("/auth/signin?mode=learner");
        }
      } else {
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
