import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Loading";

const MyAppointment = () => {
  const [user] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    if (user) {
      (async () => {
        const { data } = await axios.get(
          `http://localhost:5000/booking?patient=${user?.email}`
        );
        setAppointments(data);
      })();
    }
  }, [user]);

  return (
    <div>
      <div className="overflow-x-auto my-10">
        <table className="table table-zebra w-100">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.treatment}</td>
                <td>{appointment.slot}</td>
                <td>{appointment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
