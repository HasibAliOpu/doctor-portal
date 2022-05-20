import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Loading";

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const { data, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const { patientName, treatment, date, slot, price } = data;
  return (
    <div>
      <div class="card mx-w-md bg-base-100 shadow-xl my-5">
        <div class="card-body">
          <p className="text-lg font-bold text-secondary">
            Hello, {patientName}
          </p>
          <h2 class="card-title">Please Pay for {treatment}</h2>
          <p className="text-xl">
            Your Appointment: {date} at {slot}
          </p>
          <p>
            Please Pay:{" "}
            <span className=" text-orange-300 font-mono font-bold text-lg">
              {price}$
            </span>
          </p>
        </div>
      </div>
      <div class="card mx-w-md bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
