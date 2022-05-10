import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import GradientButton from "../Shared/GradientButton";
const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="lg:w-1/2 rounded-lg shadow-2xl"
          alt="chair"
        />
        <div>
          <h1 className="text-5xl font-bold text-accent">
            Your New Smile Starts Here!
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <GradientButton>Get Started</GradientButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
