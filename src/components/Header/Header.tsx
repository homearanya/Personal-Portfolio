import React from "react"
import styled from "styled-components"
import Particles from "react-particles-js"
import TextLoop from "react-text-loop"
import { Link as ScrollTo } from "react-scroll"

import Navbar from "../Navbar"
import Button from "../Button"

const StyledSection = styled.section<{
  backgroundImageMobile: string
  backgroundImage: string
}>`
  &&& {
    background-image: ${(props) => `url(${props.backgroundImageMobile})`};
    background-position: right center;
    ::before {
      background-color: rgba(0, 0, 0, 0.3);
    }
    @media (min-width: 992px) {
      background-image: ${(props) => `url(${props.backgroundImage})`};
      background-position: 65% 0;
      ::before {
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }
`

const ScrollWrapper = styled.div`
  :hover {
    cursor: pointer;
  }
`

interface Props {
  headerArea: HeaderAreaProps
  contactArea: ContactAreaProps
  toggleSidebar: () => void
  openSidebar: boolean
  moreDetailsRef: React.RefObject<HTMLButtonElement>
}

export default function Header(props: Props) {
  const { heroImage, heroImageMobile, sidebarAvatarImage } = props.headerArea
  const handleClick = () => {
    // const anonymousId = window.analytics.user().anonymousId()
    window.analytics.page("", "Home Page - Javascript", {
      email: "test@test.com",
    })

    // fetch(`/.netlify/functions/hello-world`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     eventName: "Hire Me Button",
    //     anonymousId,
    //   }),
    // }).then((res) => {
    //   if (res.status === 200) {
    //     console.log("data successfully submitted to Segment")
    //   } else {
    //     console.log("Fail to submit data to Segment")
    //   }
    // })
  }
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
        backgroundImageMobile={heroImageMobile.image.childImageSharp.fluid.src}
      >
        <Particles
          className="particles-wrapper"
          canvasClassName="particles-canvas"
          params={{
            particles: {
              size: { value: 5, random: true },
              line_linked: { opacity: 0.5, width: 1 },
            },
            interactivity: {
              events: { onhover: { enable: true, mode: "grab" } },
              detect_on: "canvas",
            },
          }}
        />
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-12 col-lg-8 home-content text-center">
              <h5 className="greet">
                Hello, my name is <strong>Carlos</strong>
              </h5>
              <h1 className="skills cd-headline clip">
                I&apos;m a<br />
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
                onClick={handleClick}
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
  )
}
