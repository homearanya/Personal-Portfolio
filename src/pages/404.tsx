import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { getSrc } from "gatsby-plugin-image"

import Button from "../components/Button/Button"

const StyledSection = styled.section<{ backgroundImage?: string }>`
  &&& {
    position: relative;
    background-image: ${(props) => `url(${props.backgroundImage})`};
    height: 100vh;
    padding: 0;
    margin: auto;

    .container {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
    }
  }
`

interface Props {
  data: GatsbyTypes.NotFoundPageQuery
}

export default function NotFound(props: Props) {
  const notFoundImage =
    props.data?.file?.childMarkdownRemark?.frontmatter?.notFoundArea
      ?.notFoundImage
  const heading =
    props.data?.file?.childMarkdownRemark?.frontmatter?.notFoundArea?.heading
  const blurb =
    props.data?.file?.childMarkdownRemark?.frontmatter?.notFoundArea?.blurb

  return (
    <StyledSection
      className="single-section section-fixed-bg section-overlay-bg hire-area"
      id="hire-area"
      backgroundImage={
        notFoundImage?.image?.childImageSharp?.gatsbyImageData
          ? getSrc(notFoundImage.image.childImageSharp.gatsbyImageData)
          : ""
      }
    >
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h1 className="hire-title">{heading}</h1>
            <p className="hire-description">{blurb}</p>
            <Button
              whereTo="/"
              text="Take me back home, baby!"
              color="#222"
              backgroundColor="#fff"
            />
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

export const pageQuery = graphql`
  query NotFoundPage {
    file(relativePath: { eq: "index.md" }) {
      childMarkdownRemark {
        frontmatter {
          notFoundArea {
            heading
            blurb
            notFoundImage {
              alt
              image {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
  }
`
