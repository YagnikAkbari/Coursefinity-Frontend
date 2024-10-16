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
      }
    );

    return genrateResponse(response);
  } catch (err) {
    console.log(`${err.message}💥💥💥💥💥💥`);
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
        body: JSON.stringify({ id: courseId }),
      }
    );
    return genrateResponse(response);
  } catch (err) {
    throw err;
  }
}

export async function getFavouriteCoursesId() {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/favouriteCourseList`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return genrateResponse(response);
  } catch (err) {
    console.log(`${err.message}💥💥💥💥💥💥`);
  }
}

export async function favouriteCourse(courseId) {
  try {
    console.log(courseId);
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/addfavouriteCourse`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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

export async function getMyCreatedCourses() {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/mycreatedcourses`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
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

export async function deleteCourse(id) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/deletecourse`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );
    // if (!response.ok) {
    //   throw new Error("can't Delete course now. please try again later.");
    // }
    return genrateResponse(response);
  } catch (err) {
    throw err;
  }
}
