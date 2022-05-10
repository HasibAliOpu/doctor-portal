import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-10">
      <InfoCard
        img={clock}
        bg={"bg-gradient-to-r from-secondary to-primary"}
        cardTitle={"Opening Hours"}
        description={`Mon-Fri: 9:00.AM - 10:00.PM And Sat-Sun: 12:00.PM - 6:00.PM`}
      />
      <InfoCard
        img={marker}
        bg={"bg-accent"}
        cardTitle={"Visit our location"}
        description={"Brooklyn, NY 10036, United States"}
      />
      <InfoCard
        img={phone}
        bg={"bg-gradient-to-r from-secondary to-primary"}
        cardTitle={"Contact us now"}
        description={"+000 123 456789"}
      />
    </div>
  );
};

export default Info;
