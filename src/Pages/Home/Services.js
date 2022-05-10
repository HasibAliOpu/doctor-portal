import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import GradientButton from "../Shared/GradientButton";
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
    <div className=" my-32">
      <div className="text-center mb-14 mt-20">
        <h3 className="uppercase text-2xl font-bold text-primary">
          Our Services
        </h3>
        <h1 className="text-4xl py-2">Services We Provide</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12">
        {serviceInfo.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <div className="hero min-h-screen my-32">
        <div className="hero-content flex-col lg:flex-row gap-16">
          <img
            src={treatment}
            width={"458px"}
            height={"576px"}
            className=" rounded-lg shadow-2xl"
            alt=""
          />
          <div className="px-5">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Provident cupiditate voluptatem et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.
            </p>
            <GradientButton>Get Started</GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
