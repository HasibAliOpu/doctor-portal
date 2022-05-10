import React from "react";
import MakeAppointment from "./MakeAppointment";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
    </div>
  );
};

export default Home;
