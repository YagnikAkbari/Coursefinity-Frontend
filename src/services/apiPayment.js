import { genrateResponse } from "../utils/helper";

export async function createStripeIntent(courseId) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/create-payment-intent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ courseId: courseId }),
      }
    );

    return genrateResponse(response);
  } catch (err) {
    console.error(`${err.message}💥💥💥💥💥💥`);
  }
}
