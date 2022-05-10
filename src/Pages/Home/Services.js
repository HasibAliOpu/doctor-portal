import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
const Services = () => {
  const serviceInfo = [
    {
      id: 1,
      img: fluoride,
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      img: cavity,
      title: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      img: whitening,
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="text-center my-10">
      <div className="mb-14 mt-20">
        <h3 className="uppercase text-2xl font-bold text-primary">
          Our Services
        </h3>
        <h1 className="text-4xl py-2">Services We Provide</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
        {serviceInfo.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
