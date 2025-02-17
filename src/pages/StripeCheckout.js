import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import { useNavigate, useParams } from "react-router-dom";
import { createStripeIntent } from "../services/apiPayment";

import { toast } from "react-toastify";
import { toasterConfig } from "../utils/config";

export default function StripeCheckout() {
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");

  const params = useParams();
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PRIVATE_KEY);

  useEffect(() => {
    const getIntentData = async () => {
      try {
        const response = await createStripeIntent(params.courseId);
        if (response?.code === 200) {
          setClientSecret(response?.data?.clientSecret);
        } else {
          const error = new Error("Error Creating Intent");
          error.code = "CREATE_INTENT_ERROR";
          throw error;
        }
      } catch (err) {
        if (err?.code === "CREATE_INTENT_ERROR") {
          toast.error(err?.message ?? "Exception", toasterConfig);
        }
        if (err?.response?.status === 404) {
          toast.error(
            err?.response?.data?.message ?? "Exception",
            toasterConfig
          );
        }
        if (err?.response?.status === 500) {
          navigate("/error");
        }
        console.error("ERROR FETCHING STIPE INTENT", err);
      }
    };
    if (params.courseId) {
      getIntentData();
    }
  }, [params.courseId]);

  const appearance = {
    theme: "stripe",
    // theme: "stripe | night | flat",
  };

  const options = {
    clientSecret,
    appearance,
  };

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
