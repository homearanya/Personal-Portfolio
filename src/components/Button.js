import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Link as ScrollTo } from "react-scroll";

const StyledButton = styled.button.attrs(() => ({ type: "button" }))`
  background-color: ${props => props.backgroundColor};
  border: 1px solid ${props => props.backgroundColor};
  border-radius: 30px;
  color: ${props => props.color};
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
`;

export default function Button(props) {
  return (
    <React.Fragment>
      {props.whereTo[0] === "#" ? (
        <ScrollTo to={props.whereTo.split("#")[1]} smooth={true} duration={500}>
          <StyledButton
            color={props.color}
            backgroundColor={props.backgroundColor}
          >
            {props.text}
          </StyledButton>
        </ScrollTo>
      ) : (
        <Link to={props.whereTo}>
          <StyledButton
            color={props.color}
            backgroundColor={props.backgroundColor}
          >
            {props.text}
          </StyledButton>
        </Link>
      )}
    </React.Fragment>
  );
}
