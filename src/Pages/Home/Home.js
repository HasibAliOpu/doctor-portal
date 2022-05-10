import React from "react";
import MakeAppointment from "./MakeAppointment";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";
import PatientReviews from "./PatientReviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <PatientReviews />
    </div>
  );
};

export default Home;
