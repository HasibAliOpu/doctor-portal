import React from "react";
import appointment from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";
import GradientButton from "../Shared/GradientButton";

const MakeAppointment = () => {
  return (
    <section
      style={{ backgroundImage: `url(${appointment})` }}
      className="flex justify-center items-center my-32"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-130px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 md:font-bold p-5 lg:p-0 ">
        <h3 className="text-xl text-primary">Appointment</h3>
        <h2 className="text-4xl text-white py-3">Make an Appointment Today</h2>
        <p className="text-white mb-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit, asperiores, cupiditate reiciendis saepe beatae sit
          nulla accusamus vel veritatis, blanditiis eveniet dolorum illo quas
          consectetur quasi. Iste labore illum saepe.
        </p>
        <GradientButton>Get Started</GradientButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
