import React from "react";

import client1 from "../assets/img/client-1.jpg";
import client2 from "../assets/img/client-2.jpg";
import client3 from "../assets/img/client-3.jpg";

export default function TestimonialsArea() {
  return (
    <section
      className="single-section section-fixed-bg section-overlay-bg testimonials-area"
      id="testimonials-area"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading only-title">
              <h2 className="section-title">Testimonials</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="owl-carousel owl-theme">
            <div className="col-12 col-md-8 offset-md-2">
              <div className="single-review text-center">
                <i className="icon ion-md-quote quote-icon" />
                <p className="client-review">
                  Carlos did an excellent job, creative, addressing my request,
                  and also providing his own graphic insight. Quick and
                  professional. I would highly recommend, and also will use
                  again!
                </p>
                <div className="flex-row client-details">
                  <div className="media justify-content-center">
                    <img
                      src={client1}
                      alt="Client"
                      className="img-fluid rounded-circle client-avatar"
                    />
                    <div className="align-self-center">
                      <h6 className="client-name">Julia Sakura</h6>
                      <span className="client-role">Envato Customer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 offset-md-2">
              <div className="single-review text-center">
                <i className="icon ion-md-quote quote-icon" />
                <p className="client-review">
                  Carlos did an excellent job, creative, addressing my request,
                  and also providing his own graphic insight. Quick and
                  professional. I would highly recommend, and also will use
                  again!
                </p>
                <div className="flex-row client-details">
                  <div className="media justify-content-center">
                    <img
                      src={client2}
                      alt="Client"
                      className="img-fluid rounded-circle client-avatar"
                    />
                    <div className="align-self-center">
                      <h6 className="client-name">John Santana</h6>
                      <span className="client-role">Entrepreneur</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 offset-md-2">
              <div className="single-review text-center">
                <i className="icon ion-md-quote quote-icon" />
                <p className="client-review">
                  Carlos did an excellent job, creative, addressing my request,
                  and also providing his own graphic insight. Quick and
                  professional. I would highly recommend, and also will use
                  again!
                </p>
                <div className="flex-row client-details">
                  <div className="media justify-content-center">
                    <img
                      src={client3}
                      alt="Client"
                      className="img-fluid rounded-circle client-avatar"
                    />
                    <div className="align-self-center">
                      <h6 className="client-name">Maria Wilson</h6>
                      <span className="client-role">Envato Customer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
