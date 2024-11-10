import { post } from "../apiConfig/apiWrapper";

export async function createStripeIntent(courseId) {
  try {
    const response = await post("/create-payment-intent", { courseId });
    return response?.data;
  } catch (err) {
    console.error(`${err.message}💥💥💥💥💥💥`);
    throw err;
  }
}
