import { genrateResponse } from "../utils/helper";

export async function registerUser(registerData, requestUrl) {
  const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/${requestUrl}SignUp`;

  try {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });
    return genrateResponse(response);
  } catch (err) {
    throw err;
  }
}

export async function loginUser(loginData, requestUrl) {
  const url = `${process.env.REACT_APP_BACKEND_BASE_URL}/${requestUrl}SignIn`;

  try {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
      credentials: "include",
    });

    return genrateResponse(response);
  } catch (err) {
    throw err;
  }
}

export async function logoutUser() {
  try {
 

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/logout`,
      {
        method: "post",
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

export async function resetPassword(resetPasswordData) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/resetPassword`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resetPasswordData),
      }
    );
    return genrateResponse(response);
  } catch (err) {
    console.error(`${err.message}💥💥💥💥💥💥`);
  }
}

export async function resetEmail(resetEmailData) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/resetEmail`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resetEmailData),
      }
    );
    return genrateResponse(response);
  } catch (err) {
    console.error(`${err.message}💥💥💥💥💥💥`);
  }
}

export async function getUserDetails() {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/userDetails`,
      {
        method: "get",
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

export async function getInstructorDetails() {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/instructorDetails`,
      {
        method: "get",
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
