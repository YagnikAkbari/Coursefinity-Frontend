import { genrateResponse } from "../utils/helper";

export async function getCourseList() {
  try {
    const response = await fetch("/courseList", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return genrateResponse(response);
  } catch (err) {
    console.log(`${err.message}💥💥💥💥💥💥`);
  }
}

export async function getCourseById(courseId) {
  try {
    const response = await fetch(`/courseById`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: courseId }),
    });
    return genrateResponse(response);
  } catch (err) {
    throw err;
  }
}
