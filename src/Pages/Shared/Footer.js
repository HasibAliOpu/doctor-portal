import React from "react";
import { Link } from "react-router-dom";
import footerImg from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: `url(${footerImg})` }}
      className="footer p-10"
    >
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
    </footer>
  );
};

export default Footer;
