import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import Button from "../features/ui/Button";
import Spinner from "../features/ui/Spinner";

export default function CheckoutForm({ courseId }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.REACT_APP_FRONTEND_URL}/my-courses`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form className="stripe w-[450px]" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <Button
        disabled={isLoading || !stripe || !elements}
        type="submit"
        className="bg-primary-500 relative h-15"
      >
        <span>
          {isLoading ? (
            <Spinner parent={true} type="small" className="m-auto" />
          ) : (
            "Pay now"
          )}
        </span>
      </Button>
      {message && <div id="payment-message">{message}</div>}
    </form>
    // <div className="flex flex-col items-center justify-center h-screen">
    //   <i className="fa-solid fa-volcano text-[124px] text-gray-400 pb-8"></i>
    //   <h1 className="text-3xl">We are currently running out of money.</h1>
    //   <p className="text-gray-500">please give us time to intrducing you a payment methods</p>
    // </div>
  );
}
