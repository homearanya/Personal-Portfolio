import React from 'react'
import styled from 'styled-components'

import Button from '../Button'

const StyledSection = styled.section<{backgroundImage: string}>`
  background-image: ${props => `url(${props.backgroundImage})`};
`
interface Props {
  hireArea: HireAreaProps
}
export default function HireArea(props: Props) {
  const {heading, blurb, hireImage} = props.hireArea
  return (
    <StyledSection
      className="single-section section-fixed-bg section-overlay-bg hire-area"
      id="hire-area"
      backgroundImage={hireImage.image.childImageSharp.fluid.src}>
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h1 className="hire-title">{heading}</h1>
            <p className="hire-description">{blurb}</p>
            <Button whereTo="#contact-area" text="Hire Me" color="#222" backgroundColor="#fff" />
          </div>
        </div>
      </div>
    </StyledSection>
  )
}
