import axios from "axios";
import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

import useToastify from "../../Toast/Toast";

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const [user] = useAuthState(auth);
  const { _id, name, slots, price } = treatment;
  const formattedDate = format(date, "PP");

  const [Toast] = useToastify();

  const handleBooking = async (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      price,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };

    const { data } = await axios.post("http://localhost:5000/booking", booking);
    if (data.success) {
      Toast.fire({
        icon: "success",
        title: `Appointment is set, ${formattedDate} at ${slot}`,
      });
    } else {
      Toast.fire({
        icon: "warning",
        title: `Already have an Appointment on ${data.exists?.date} at ${data.exists?.slot}`,
      });
    }
    refetch();
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-center text-xl text-secondary">
            Booking For: {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 mt-4 gap-2 justify-items-center"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-success w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              disabled
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              value={user?.email}
              disabled
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              // required
              placeholder="Phone Number"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary text-white w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
