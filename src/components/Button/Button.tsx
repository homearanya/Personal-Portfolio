import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Link as ScrollTo } from "react-scroll"

const StyledButton = styled.button.attrs(() => ({ type: "button" }))<{
  backgroundColor: string
}>`
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.backgroundColor};
  border-radius: 30px;
  color: ${(props) => props.color};
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.5px;
  margin: 0 9px;
  outline: none;
  padding: 9px 20px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;

  :focus {
    outline: none;
  }

  @media (min-width: 360px) {
    padding: 9px 38px;
  }
`

export interface ButtonProps {
  onClick?: () => void
  whereTo: string
  text: string
  color: string
  backgroundColor: string
}

export default function Button({
  whereTo,
  color,
  text,
  backgroundColor,
  onClick,
}: ButtonProps) {
  return (
    <React.Fragment>
      {whereTo[0] === "#" ? (
        <ScrollTo
          to={whereTo.split("#")[1]}
          smooth={true}
          duration={500}
          onClick={onClick}
        >
          <StyledButton color={color} backgroundColor={backgroundColor}>
            {text}
          </StyledButton>
        </ScrollTo>
      ) : (
        <Link to={whereTo} onClick={onClick}>
          <StyledButton
            color={color}
            backgroundColor={backgroundColor}
            onClick={onClick}
          >
            {text}
          </StyledButton>
        </Link>
      )}
    </React.Fragment>
  )
}
