import React from "react";
import MakeAppointment from "./MakeAppointment";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";
import PatientReviews from "./PatientReviews";
import ContactForm from "./ContactForm";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <PatientReviews />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
