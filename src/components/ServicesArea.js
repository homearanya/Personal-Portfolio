import React from "react";
import styled from "styled-components";

const IconWrapper = styled.span`
  color: #007bff;
  display: inline-block;
  font-size: 50px;
  line-height: 100%;
  margin-bottom: 23px;
`;

export default function ServicesArea(props) {
  return (
    <section
      className="single-section silver-bg services-area"
      id="services-area"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <h2 className="section-title">{props.servicesArea.heading}</h2>
              <p className="section-description">{props.servicesArea.blurb}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {props.servicesArea.services.map((service, index) => {
            return (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="single-service">
                  <IconWrapper>
                    <i className={service.iconClasses} />
                  </IconWrapper>
                  <div className="service-body">
                    <h6 className="service-title">{service.serviceName}</h6>
                    <p className="service-description">{service.blurb}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
