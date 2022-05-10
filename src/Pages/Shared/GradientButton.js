import React from "react";

const GradientButton = ({ children }) => {
  return (
    <div>
      <button className="btn bg-gradient-to-r from-secondary to-primary text-white border-none uppercase">
        {children}
      </button>
    </div>
  );
};

export default GradientButton;
