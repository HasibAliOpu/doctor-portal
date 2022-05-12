import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ date, treatment }) => {
  const [user] = useAuthState(auth);
  const { name, slots } = treatment;
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
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
