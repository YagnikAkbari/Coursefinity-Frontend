import { get, post, remove } from "../apiConfig/apiWrapper";

export async function getCourseList() {
  try {
    const response = await get("/courseList");
    return response?.data;
  } catch (err) {
    console.error(`${err.message}💥💥💥💥💥💥`);
    throw err;
  }
}

export async function getCourseById(courseId) {
  try {
    const response = await get(`/course/${courseId}`);
    return response?.data;
  } catch (err) {
    throw err;
  }
}

export async function getFavouriteCourses() {
  try {
    const response = await get("/favouriteCourseList");
    return response?.data;
  } catch (err) {
    console.error(`${err.message}💥💥💥💥💥💥`);
    throw err;
  }
}
export async function getFavouriteCoursesIdList() {
  try {
    const response = await get("/favouriteCourseIdList");
    return response?.data;
  } catch (err) {
    console.error(`${err.message}💥💥💥💥💥💥`);
    throw err;
  }
}

export async function favouriteCourse(courseId) {
  try {
    const response = await post("/addfavouriteCourse", { courseId });

    return response?.data;
  } catch (err) {
    throw err;
  }
}

export async function removefavouriteCourse(courseId) {
  try {
    const response = await remove(`/removefavouriteCourse/${courseId}`);

    return response?.data;
  } catch (err) {
    throw err;
  }
}

export async function getMyCourses() {
  try {
    const response = await get("/mycourses");
    return response?.data;
  } catch (err) {
    throw err;
  }
}

export async function getMyCreatedCourses() {
  try {
    const response = await get("/mycreatedcourses");

    return response?.data;
  } catch (err) {
    throw err;
  }
}

export async function deleteCourse(id) {
  try {
    const response = await remove(`/deletecourse/${id}`);

    return response?.data;
  } catch (err) {
    throw err;
  }
}

export async function createCourse(courseData) {
  try {
    const response = await post("/createCourse", courseData);

    return response?.data;
  } catch (err) {
    throw err;
  }
}

export async function uploadCourseThumbnail(payload) {
  try {
    const response = await post("/upload/assets", payload, null, {
      "Content-Type": "multipart/form-data",
    });

    return response?.data;
  } catch (err) {
    throw err;
  }
}
