import React from "react";

const Review = ({ patientReview }) => {
  const { img, name, reviews, address } = patientReview;
  return (
    <div className="card glass shadow-md  text-center">
      <div className="card-body">
        <p className="font-bold">{reviews}</p>
        <div className="flex items-center gap-5">
          <div className="avatar">
            <div className="rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <span>
            <h2 className="text-2xl font-semibold">{name}</h2>
            <hr className="border-b-0 border-primary mt-1" />
            <h3>{address}</h3>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Review;
