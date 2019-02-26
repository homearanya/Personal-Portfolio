import React from "react";

export default function MainFooter() {
  return (
    <div className="row main-footer">
      <div className="col-12 col-md-3">
        <h5 className="column-title">About</h5>
        <ul className="list-unstyled column-content">
          <li>
            <a data-scroll href="#header-area">
              Home
            </a>
          </li>
          <li>
            <a data-scroll href="#services-area">
              Our Services
            </a>
          </li>
          <li>
            <a data-scroll href="#portfolio-area">
              Portfolio
            </a>
          </li>
          <li>
            <a data-scroll href="#blog-area">
              My Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="col-12 col-md-3">
        <h5 className="column-title">Information</h5>
        <ul className="list-unstyled column-content">
          <li>
            <a href="#0">Terms & Condition</a>
          </li>
          <li>
            <a href="#0">Privacy Policy</a>
          </li>
          <li>
            <a href="#0">Jobs</a>
          </li>
          <li>
            <a href="#0">Partners</a>
          </li>
        </ul>
      </div>
      <div className="col-12 col-md-3">
        <h5 className="column-title">Support</h5>
        <ul className="list-unstyled column-content">
          <li>
            <a href="#0">Contact Us</a>
          </li>
          <li>
            <a href="#0">FAQs</a>
          </li>
          <li>
            <a href="#0">Report an issue</a>
          </li>
        </ul>
      </div>
      <div className="col-12 col-md-3">
        <h2 className="brand-logo">Flexi</h2>
        <p className="brand-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}
