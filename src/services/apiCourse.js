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
