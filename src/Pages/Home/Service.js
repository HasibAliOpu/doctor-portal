import React from "react";

const Service = ({ service }) => {
  const { img, title, description } = service;
  return (
    <div class="card glass shadow-md  text-center">
      <figure className="pt-6">
        <img src={img} alt="services!" />
      </figure>
      <div class="card-body">
        <h2 class="text-2xl font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
