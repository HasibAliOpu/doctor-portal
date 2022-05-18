import React from "react";
import useToastify from "../../Toast/Toast";

const About = () => {
  const [Toast] = useToastify();
  const handleModal = () => {
    Toast.fire({
      icon: "success",
      title: "Signed in successfully",
    });
  };
  return (
    <button onClick={handleModal} className="btn btn-primary">
      Click
    </button>
  );
};

export default About;
