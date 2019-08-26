import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
  font-size: 40px;
  height: 40px;
  line-height: 56.4px;
  text-align: center;
  width: 40px;
  margin-right: 20px !important;

  svg {
    vertical-align: top;
  }
`

const StyledMediaBody = styled.div`
  color: #222;

  :hover,
  :focus {
    color: #0056b3;
  }
`

declare interface Props {
  contactArea: ContactAreaProps
}

export default function ContactDetails(props: Props) {
  return (
    <div className="col-12 col-lg-5">
      <div className="contact-info">
        <h4 className="info-title">Contact Info</h4>
        <p className="info-description">
          Always available for freelance work if the right project comes along, Feel free to contact
          me!
        </p>
        <ul className="list-unstyled">
          <li>
            <a
              href={`https://maps.google.com/?q=${props.contactArea.address}`}
              target="_blank"
              rel="noopener noreferrer">
              <div className="media align-items-center">
                <StyledSpan className="info-icon">
                  <i className="fas fa-map-marker-alt" />
                </StyledSpan>
                <StyledMediaBody className="media-body">
                  <h6 className="info-type">Location</h6>
                  <span className="info-details">{props.contactArea.address}</span>
                </StyledMediaBody>
              </div>
            </a>
          </li>
          <li>
            <a href={`tel:${props.contactArea.phone.replace(/ /g, '')}`}>
              <div className="media align-items-center">
                <StyledSpan className="info-icon">
                  <i className="fas fa-phone" />
                </StyledSpan>
                <StyledMediaBody className="media-body">
                  <h6 className="info-type">Call Me</h6>
                  <span className="info-details">
                    {/* <a href="tel:+441632967704"> */}
                    {props.contactArea.phone}
                    {/* </a> */}
                  </span>
                </StyledMediaBody>
              </div>
            </a>
          </li>
          <li>
            <a href={`mailto:${props.contactArea.email}`}>
              <div className="media align-items-center">
                <StyledSpan className="info-icon">
                  <i className="fas fa-envelope" />
                </StyledSpan>
                <StyledMediaBody className="media-body">
                  <h6 className="info-type">Email Me</h6>
                  <span className="info-details">
                    {/* <a href={`mailto:${props.contactArea.email}`}> */}
                    {props.contactArea.email}
                    {/* </a> */}
                  </span>
                </StyledMediaBody>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
