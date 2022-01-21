import React from "react"
import styled from "styled-components"
import Particles from "react-tsparticles"
import TextLoop from "react-text-loop"
import { Link as ScrollTo } from "react-scroll"
import { getSrc } from "gatsby-plugin-image"

import Navbar from "../Navbar"
import Button from "../Button"

const StyledSection = styled.section<{
  backgroundImageMobile?: string
  backgroundImage?: string
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
  headerArea: GatsbyTypes.MarkdownRemarkFrontmatterHeaderArea
  contactArea: GatsbyTypes.MarkdownRemarkFrontmatterContactArea
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
        sidebarAvatarImage={
          sidebarAvatarImage as GatsbyTypes.MarkdownRemarkFrontmatterHeaderAreaSidebarAvatarImage
        }
        contactArea={props.contactArea}
        toggleSidebar={props.toggleSidebar}
        openSidebar={props.openSidebar}
        moreDetailsRef={props.moreDetailsRef}
      />
      {/* <!-- Header Area (Home) --> */}
      <StyledSection
        className="header-area section-fixed-bg section-overlay-bg"
        id="header-area"
        backgroundImage={
          heroImage?.image?.childImageSharp?.gatsbyImageData
            ? getSrc(heroImage.image.childImageSharp.gatsbyImageData)
            : ""
        }
        backgroundImageMobile={
          heroImageMobile?.image?.childImageSharp?.gatsbyImageData
            ? getSrc(heroImageMobile.image.childImageSharp.gatsbyImageData)
            : ""
        }
      >
        <Particles
          id="tsparticles"
          className="particles-wrapper"
          canvasClassName="particles-canvas"
          options={{
            fpsLimit: 60,
            particles: {
              size: { value: 4, random: true },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 30,
              },
              opacity: {
                value: 0.3,
              },
            },
            interactivity: {
              events: { onhover: { enable: true, mode: "grab" } },
            },
            detectRetina: true,
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
