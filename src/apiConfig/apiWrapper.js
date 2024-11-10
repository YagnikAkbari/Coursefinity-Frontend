import { logout } from "../features/auth/auth-slice";
import { clearFavouriteCourseList } from "../features/course/favorite-slice";
import store from "../store/store";
import { api } from "./rootApi";

export const get = async (url, payload, baseURL, contentType) => {
  try {
    const response = await api(baseURL, contentType).get(url);
    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    if (err?.response?.status === 401) {
      // window.history.pushState({}, "", "/auth/signin?mode=learner");
      window.history.pushState({}, "", "/auth/signin?mode=learner");
      store.dispatch(logout());
      store.dispatch(clearFavouriteCourseList());
      window.localStorage.removeItem("user");
      window.location.href = "/auth/signin?mode=learner";
    }
    console.error("ERROR GET WRAPPER", err);
    throw err;
  }
};
export const post = async (url, payload, baseURL, contentType) => {
  try {
    const response = await api(baseURL, contentType).post(url, payload);

    if (response.status === 200 || response.status === 201) {
      return response;
    }
  } catch (err) {
    if (err?.response?.status === 401) {
      // window.history.pushState({}, "", "/auth/signin?mode=learner");
      window.history.pushState({}, "", "/auth/signin?mode=learner");
      store.dispatch(logout());
      store.dispatch(clearFavouriteCourseList());
      window.localStorage.removeItem("user");
      window.location.href = "/auth/signin?mode=learner";
    }
    console.error("ERROR POST WRAPPER", err);
    throw err;
  }
};
export const remove = async (url, payload, baseURL, contentType) => {
  try {
    const response = await api(baseURL, contentType).delete(url, payload);

    if (response.status === 200) {
      return response;
    }
  } catch (err) {
    if (err?.response?.status === 401) {
      // window.history.pushState({}, "", "/auth/signin?mode=learner");
      window.history.pushState({}, "", "/auth/signin?mode=learner");
      store.dispatch(logout());
      store.dispatch(clearFavouriteCourseList());
      window.localStorage.removeItem("user");
      window.location.href = "/auth/signin?mode=learner";
    }
    console.error("ERROR DELETE WRAPPER", err);
    throw err;
  }
};
