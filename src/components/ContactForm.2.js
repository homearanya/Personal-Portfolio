import React from "react";

export default function ContactForm() {
  return (
    <div className="col-12 col-lg-7">
      <form
        className="contact-form"
        id="contact-form"
        method="post"
        action="php/contact.php"
      >
        <h4 className="form-title">Message Me</h4>
        <div className="row">
          <div className="col-12 col-md-6 form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              id="contact-name"
              placeholder="Name"
              required
            />
          </div>
          <div className="col-12 col-md-6 form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              id="contact-email"
              placeholder="Email"
              required
            />
          </div>
          <div className="col-12 form-group">
            <input
              type="text"
              name="subject"
              className="form-control"
              id="contact-subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className="col-12 form-group custom-margin">
            <textarea
              name="message"
              className="form-control"
              id="contact-message"
              placeholder="Message"
              rows="5"
              required
            />
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn button-scheme"
              id="contact-submit"
            >
              Submit
            </button>
            <p className="feedback-error">
              Oops! Something went wrong. Please try again.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
