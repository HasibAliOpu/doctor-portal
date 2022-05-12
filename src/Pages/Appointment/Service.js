import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary text-2xl">{name}</h2>
        <p className="font-semibold">
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Sorry! Try Another Date.</span>
          )}
        </p>
        <p className="font-bold  text-sm text-slate-700">
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div className="card-actions mt-2">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            className="btn btn-secondary text-white"
          >
            booked appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
