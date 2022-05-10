import React from "react";

const InfoCard = ({ img, bg, cardTitle, description }) => {
  return (
    <div className={`card lg:card-side pl-8  ${bg} shadow-xl text-white`}>
      <figure className="pt-5 lg:pt-0">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
