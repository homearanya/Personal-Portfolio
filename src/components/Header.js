import React from "react";
import styled from "styled-components";
import Particles from "react-particles-js";
import TextLoop from "react-text-loop";
import { Link as ScrollTo } from "react-scroll";

import Navbar from "./Navbar";
import Button from "./Button";

const StyledSection = styled.section`
  background-image: ${props => `url(${props.backgroundImage})`};
  background-position: 65% 0;

  &&& {
    ::before {
      background-color: rgba(0, 0, 0, 0.7);
    }
    @media (min-width: 768px) {
      ::before {
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }
`;

const ParticlesWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ScrollWrapper = styled.div`
  :hover {
    cursor: pointer;
  }
`;

export default function Header(props) {
  const { heroImage, sidebarAvatarImage } = props.headerArea;
  return (
    <header>
      <Navbar
        sidebarAvatarImage={sidebarAvatarImage}
        contactArea={props.contactArea}
        toggleSidebar={props.toggleSidebar}
        openSidebar={props.openSidebar}
        moreDetailsRef={props.moreDetailsRef}
      />
      {/* <!-- Header Area (Home) --> */}
      <StyledSection
        className="header-area section-fixed-bg section-overlay-bg"
        id="header-area"
        backgroundImage={heroImage.image.childImageSharp.fluid.src}
      >
        <ParticlesWrapper>
          <Particles
            params={{
              particles: {
                size: { value: 5, random: true },
                line_linked: { opacity: 0.5, width: 1 },
                interactivity: {
                  onhover: { enable: true, mode: "repulse" },
                  detect_on: "canvas"
                }
              }
            }}
          />
        </ParticlesWrapper>
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-12 col-lg-8 home-content text-center">
              <h5 className="greet">
                Hello, my name is <strong>Carlos</strong>
              </h5>
              <h1 className="skills cd-headline clip">
                I'm a<br />
                <TextLoop fade={true}>
                  <strong>Web Developer</strong>
                  <strong>Freelancer</strong>
                </TextLoop>
              </h1>
              <p className="description">
                I’m a web developer with experience in the latest developing
                tools. I use GatsbyJS, a ReactJS-based static site generator, to
                create blazing-fast loading, modern-looking websites.
              </p>
              <Button
                whereTo="#portfolio-area"
                text="My Work"
                color="#222"
                backgroundColor="#fff"
              />
              <Button
                whereTo="#contact-area"
                text="Hire me"
                color="#fff"
                backgroundColor="#007bff"
              />
            </div>
            <div className="scroll-icon">
              <ScrollWrapper>
                <ScrollTo to="about-area" smooth={true} duration={300}>
                  {/* <a data-scroll href="#about-area"> */}
                  <div className="mouse">
                    <div className="wheel" />
                  </div>
                  {/* </a> */}
                </ScrollTo>
              </ScrollWrapper>
            </div>
          </div>
        </div>
      </StyledSection>
    </header>
  );
}
