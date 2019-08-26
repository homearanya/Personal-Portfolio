import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'

import Button from '../components/Button/Button'

const StyledSection = styled.section<{backgroundImage: string}>`
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
`

interface Props {
  data: PageQueryData
}

export default function NotFound(props: Props) {
  const {
    notFoundArea: {notFoundImage, heading, blurb},
  } = props.data.file.childMarkdownRemark.frontmatter
  return (
    <StyledSection
      className="single-section section-fixed-bg section-overlay-bg hire-area"
      id="hire-area"
      backgroundImage={notFoundImage.image.childImageSharp.fluid.src}>
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

interface PageQueryData {
  file: {
    childMarkdownRemark: {
      frontmatter: {
        notFoundArea: NotFoundArea
      }
    }
  }
}

export const pageQuery = graphql`
  query NotFoundPage {
    file(relativePath: {eq: "index.md"}) {
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
`
