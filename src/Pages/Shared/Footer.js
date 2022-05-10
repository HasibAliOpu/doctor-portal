import React from "react";
import { Link } from "react-router-dom";
import footerImg from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footerImg})`,
        backgroundSize: "cover",
      }}
      className="p-10"
    >
      <div className="footer ">
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Emergency Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Monthly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Weekly Checkup Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Deep Checkup
          </Link>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <Link to="/" className="link link-hover">
            Fluoride Treatment
          </Link>
          <Link to="/" className="link link-hover">
            Cavity Filling
          </Link>
          <Link to="/" className="link link-hover">
            Teeth Whitening
          </Link>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <Link to="/" className="link link-hover">
            New York - 101010 Hudson
          </Link>
        </div>
      </div>
      <div className="text-center mt-11">
        <small>
          <p>Copyright © {new Date().getFullYear()} - All Rights Reserved</p>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
