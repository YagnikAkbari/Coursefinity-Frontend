import { logout } from "../features/auth/auth-slice";
import { clearFavouriteCourseList } from "../features/course/favorite-slice";
import store from "../store/store";
import { genrateResponse } from "../utils/helper";

export async function getCourseList() {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/courseList`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    return genrateResponse(response);
  } catch (err) {
    console.error(`${err.message}💥💥💥💥💥💥`);
  }
}

export async function getCourseById(courseId) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/courseById`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ id: courseId }),
      }
    );
    return genrateResponse(response);
  } catch (err) {
    throw err;
  }
}

export async function getFavouriteCourses() {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/favouriteCourseList`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    return genrateResponse(response);
  } catch (err) {
    console.error(`${err.message}💥💥💥💥💥💥`);
  }
}
export async function getFavouriteCoursesIdList() {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/favouriteCourseIdList`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    return genrateResponse(response);
  } catch (err) {
    console.error(`${err.message}💥💥💥💥💥💥`);
  }
}

export async function favouriteCourse(courseId) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/addfavouriteCourse`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ courseId }),
      }
    );

    if (!response.ok) {
      throw new Error("can't possible add to favourite.");
    }
    return genrateResponse(response);
  } catch (err) {
    throw err;
  }
}

export async function removefavouriteCourse(courseId) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/removefavouriteCourse`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ courseId }),
      }
    );
    if (!response.ok) {
      throw new Error("can't possible to remomve item.");
    }
    return genrateResponse(response);
  } catch (err) {
    throw err;
  }
}

export async function getMyCourses() {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/mycourses`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    if (!response?.ok) {
      if (response?.status === 401) {
        store.dispatch(logout());
        store.dispatch(clearFavouriteCourseList());
        window.localStorage.removeItem("user");
        window.location.replace("/");
      }
      throw new Error("Can Not Get User Course");
    }
    return genrateResponse(response);
  } catch (err) {
    throw err;
  }
}

export async function getMyCreatedCourses() {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/mycreatedcourses`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error("Not able to found courses.");
    }
    return genrateResponse(response);
  } catch (err) {
    throw err;
  }
}

export async function deleteCourse(id) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/deletecourse`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ id }),
      }
    );
    if (!response.ok) {
      throw new Error("can't Delete course now. please try again later.");
    }
    return genrateResponse(response);
  } catch (err) {
    throw err;
  }
}
