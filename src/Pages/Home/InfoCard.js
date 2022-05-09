import React from "react";

const InfoCard = ({ img, bg, header, detail }) => {
  return (
    <div className={`card lg:card-side pl-8  ${bg} shadow-xl text-white`}>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{header}</h2>
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default InfoCard;
