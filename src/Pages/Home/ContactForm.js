import React from "react";
import appointment from "../../assets/images/appointment.png";
import GradientButton from "../Shared/GradientButton";

const ContactForm = () => {
  return (
    <div
      style={{ backgroundImage: `url(${appointment})` }}
      className="min-h-screen flex flex-col justify-center items-center gap-2"
    >
      <div className="text-center mb-5 px-3 lg:px-0">
        <h3 className="text-primary text-2xl">Contact Us</h3>
        <h1 className="text-white text-4xl">Stay connected with us</h1>
      </div>
      <form className="px-8 lg:px-0">
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered input-info w-full max-w-xl"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered input-info w-full max-w-xl my-3"
        />
        <textarea
          type="text"
          placeholder="Your message"
          className="input input-bordered input-info w-full max-w-xl mb-2 h-36"
        />
      </form>
      <GradientButton>Submit</GradientButton>
    </div>
  );
};

export default ContactForm;
