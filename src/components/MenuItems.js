import React from "react";
import { Link as ScrollTo } from "react-scroll";
import styled from "styled-components";

const StyledLi = styled.li`
  & a.active {
    color: ${props =>
      props.isSticky ? "#007bff !important" : "#fff !important"};
  }
  &&& {
    :hover,
    :focus {
      a {
        color: ${props =>
          props.isSticky ? "#007bff !important" : "#fff !important"};
      }
    }
  }
`;

const StyledScrollTo = styled(ScrollTo)`
  cursor: pointer;
`;

export default function MenuItems(props) {
  return (
    <React.Fragment>
      {props.menuItems.map((menuItem, index) => {
        return (
          <StyledLi key={index} className="nav-item" isSticky={props.isSticky}>
            <StyledScrollTo
              activeClass="active"
              className="nav-link"
              to={menuItem.link}
              smooth={true}
              duration={300}
              spy={true}
              onClick={() => props.handleClick(index)}
            >
              {menuItem.name}
            </StyledScrollTo>
          </StyledLi>
        );
      })}
    </React.Fragment>
  );
}
