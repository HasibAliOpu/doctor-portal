import React from "react";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import quote from "../../assets/icons/quote.svg";
import Review from "./Review";
const PatientReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "winson Herry",
      address: "California",
      img: people1,
      reviews:
        "Very professional with a focus on a warm, kind and knowledgeable environment.",
    },
    {
      id: 2,
      name: "Eva Wilson",
      address: "8732 Fairview St",
      img: people2,
      reviews:
        "Dr Barnes and her staff were friendly, accommodating, and went above and beyond in their standard of care.",
    },
    {
      id: 3,
      name: "Melinda Kelly",
      address: "4179 W Sherman Dr",
      img: people3,
      reviews:
        "Best care available! Dr. Barnes and her staff are the most professional and caring. God bless you all!",
    },
  ];
  return (
    <div className="my-32 px-14">
      <div className="flex justify-between mb-24">
        <div className="">
          <h3 className="text-primary text-2xl">Testimonial</h3>
          <h1 className="text-4xl">What Our Patients Says</h1>
        </div>
        <div className="">
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((patientReview) => (
          <Review key={patientReview.id} patientReview={patientReview}></Review>
        ))}
      </div>
    </div>
  );
};

export default PatientReviews;
