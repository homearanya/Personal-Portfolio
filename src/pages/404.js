import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Button from "../components/Button";

const StyledSection = styled.section`
  &&& {
    position: relative;
    background-image: ${props => `url(${props.backgroundImage})`};
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
`;

export default function NotFound(props) {
  const {
    notFoundArea
  } = props.data.homePageQuery.childMarkdownRemark.frontmatter;
  const { notFoundImage, heading, blurb } = notFoundArea;
  return (
    <StyledSection
      className="single-section section-fixed-bg section-overlay-bg hire-area"
      id="hire-area"
      backgroundImage={notFoundImage.image.childImageSharp.fluid.src}
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
  );
}

export const homePageQuery = graphql`
  query NotFoundPage {
    homePageQuery: file(relativePath: { eq: "index.md" }) {
      childMarkdownRemark {
        frontmatter {
          notFoundArea {
            heading
            blurb
            notFoundImage {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 1920, maxHeight: 902) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
