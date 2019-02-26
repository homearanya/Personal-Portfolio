import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  &&& {
    padding: 0;

    .col-12 {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .social-medias {
      font-size: 24px;
      line-height: 24px;
      a {
        height: 24px;
        width: 24px;
        margin: 0 6px;
      }
    }
    p {
      line-height: 24px;
    }
  }
`;

const IconWrapper = styled.div`
  color: ${props => props.inputColor};
  display: inline-block;
  font-size: 24px;
  line-height: 24px;
`;

// import MainFooter from "./MainFooter";

export default function Footer() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return (
    <StyledFooter className="footer-area single-section">
      <div className="container">
        {/* <MainFooter /> */}
        <div className="row mini-footer">
          <div className="col-12">
            <p className="copyright-notice">
              Copyright © {currentYear} Carlos Gonzalez.
            </p>
            <div className="social-medias">
              <a
                href="https://github.com/homearanya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWrapper inputColor="#6e5494">
                  <i className="fab fa-github" />
                </IconWrapper>
              </a>
              <a
                href="https://www.linkedin.com/in/carlos-david-gonzalez-vicente/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWrapper inputColor="#0077b5">
                  <i className="fab fa-linkedin" />
                </IconWrapper>
              </a>
              <a
                href="https://twitter.com/CarlosD32433232"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWrapper inputColor="#1DA1F2">
                  <i className="fab fa-twitter" />
                </IconWrapper>
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}
