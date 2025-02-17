import { get, post } from "../apiConfig/apiWrapper";

export async function registerUser(registerData, requestUrl) {
  try {
    const response = await post(`/${requestUrl}SignUp`, registerData);
    return response?.data;
  } catch (err) {
    throw err;
  }
}
export async function checkAutentication(role) {
  try {
    const response = await get(`/check/auth?role=${role}`);
    return response?.data;
  } catch (err) {
    throw err;
  }
}

export async function loginUser(loginData, requestUrl) {
  try {
    const response = await post(`/${requestUrl}SignIn`, loginData);
    return response?.data;
  } catch (err) {
    console.error(`${err.message}💥💥💥💥💥💥`);
    throw err;
  }
}

export async function logoutUser() {
  try {
    const response = await post("/logout");
    return response?.data;
  } catch (err) {
    console.error(`${err.message}💥💥💥💥💥💥`);
    throw err;
  }
}

export async function resetPassword(resetPasswordData) {
  try {
    const response = await post("/resetPassword", resetPasswordData);
    return response?.data;
  } catch (err) {
    console.error(`${err.message}💥💥💥💥💥💥`);
    throw err;
  }
}

export async function resetEmail(roleParams, resetEmailData) {
  try {
    const response = await post(
      `/resetEmail?role=${roleParams}`,
      resetEmailData
    );
    return response?.data;
  } catch (err) {
    console.error(`${err.message}💥💥💥💥💥💥`);
    throw err;
  }
}

export async function getUserDetails() {
  try {
    const response = await get("/userDetails");
    return response?.data;
  } catch (err) {
    console.error(`${err.message}💥💥💥💥💥💥`);
    throw err;
  }
}

export async function getInstructorDetails() {
  try {
    const response = await get("/instructorDetails");
    return response?.data;
  } catch (err) {
    console.error(`${err.message}💥💥💥💥💥💥`);
    throw err;
  }
}
