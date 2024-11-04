import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import { createStripeIntent } from "../services/apiPayment";
import store from "../store/store";
import { clearFavouriteCourseList } from "../features/course/favorite-slice";
import { logout } from "../features/auth/auth-slice";

const stripePromise = loadStripe(
  "pk_test_51NdZ2MSHE4fCvIOPgfs0EaVDl1LCqGefzW00xIAcIt0kVHD40RWdayMSoBxQ3c4cFSH41SCjrrWeiF93JNZlMQDf00QdGRFEkc"
);

export default function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");
  const params = useParams();

  useEffect(() => {
    const getIntentData = async () => {
      try {
        const response = await createStripeIntent(params.courseId);

        console.log("response", response);
        if (!response?.ok) {
          if (response?.statusCode === 401) {
            store.dispatch(logout());
            store.dispatch(clearFavouriteCourseList());
            window.localStorage.removeItem("user");
            window.location.replace("/auth/signin?mode=learner");
          }
          throw new Error("Error Fetching Intent");
        }
        setClientSecret(response?.body?.data?.clientSecret);
      } catch (err) {
        console.error("ERROR FETCHING STIPE INTENT", err);
      }
    };
    getIntentData();
  }, [params.courseId]);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };
  console.log("clientSecret", clientSecret);

  return (
    <div className="">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm courseId={params.courseId} />
        </Elements>
      )}
    </div>
  );
}
