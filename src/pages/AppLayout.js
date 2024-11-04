import { useDispatch } from "react-redux";
import MainNavbar from "../features/MainNavbar/MainNavbar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { checkAuth, login } from "../features/auth/auth-slice";

function AppLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    let data = localStorage.getItem("user") ?? null;
    let userData;
    if (data) {
      userData = JSON.parse(data);
    }

    if (userData) {
      dispatch(login({ role: userData.role ?? "" }));
      dispatch(checkAuth({ isCheckAuth: true }));
    }
  }, [dispatch]);
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
}

export default AppLayout;
