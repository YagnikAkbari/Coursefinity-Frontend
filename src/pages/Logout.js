import { redirect } from "react-router-dom";
import { logout } from "../features/auth/auth-slice";
import { logoutUser } from "../services/apiAuth";
import store from "../store/store";

export async function action({ request }) {
  store.dispatch(logout());
  const data = await logoutUser();
  console.log(data);
  console.log(Request);
  return redirect("/");
}
