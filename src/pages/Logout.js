import { redirect } from "react-router-dom";
import { logout } from "../features/auth/auth-slice";
import { clearFavouriteCourseList } from "../features/course/favorite-slice";
import { logoutUser } from "../services/apiAuth";
import store from "../store/store";

export async function action() {
  store.dispatch(logout());
  store.dispatch(clearFavouriteCourseList());
  await logoutUser();
  window.localStorage.removeItem("user");
  return redirect("/");
}
