import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import useToastify from "../../Toast/Toast";
import Loading from "../../Loading";

const CheckoutForm = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [processing, setProcessing] = useState(false);

  const [clientSecret, setClientSecret] = useState("");
  const [Toast] = useToastify();

  const { _id, price, patient, patientName } = appointment;

  useEffect(() => {
    fetch(
      "https://fathomless-temple-21605.herokuapp.com/create-payment-intent",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error?.message) {
      Toast.fire({
        icon: "error",
        title: error.message,
      });
    }
    setProcessing(true);
    // // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patient,
          },
        },
      });
    if (intentError) {
      setProcessing(false);
      Toast.fire({
        icon: "error",
        title: intentError.message,
      });
    } else {
      Toast.fire({
        icon: "success",
        title: "congrats! Your payment is completed",
      });
      // store payment on database
      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };
      fetch(`https://fathomless-temple-21605.herokuapp.com/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ payment }),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
        });
    }
  };
  if (processing) {
    return <Loading />;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
