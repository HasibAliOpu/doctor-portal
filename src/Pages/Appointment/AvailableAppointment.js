import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import BookingModal from "./BookingModal";
import Service from "./Service";
import Loading from "../../Loading";

const AvailableAppointment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery("available", () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-32">
      <h2 className="text-secondary text-xl font-bold text-center">
        Available Appointments on {formattedDate}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-20 mt-24">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
        {treatment && (
          <BookingModal
            treatment={treatment}
            setTreatment={setTreatment}
            date={date}
            refetch={refetch}
          ></BookingModal>
        )}
      </div>
    </div>
  );
};

export default AvailableAppointment;
