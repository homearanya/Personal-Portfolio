import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledProject = styled.div`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 20px 0px;
`;

const StyledAnchor = styled.a`
  &&& {
    display: inline-block !important;
    outline: none !important;
    text-decoration: none !important;
    margin: 0 8px !important;
  }
`;

const IconWrapper = styled.span`
  line-height: 40px;
  font-size: 21px;
  color: #fff;
  display: inline-block;
`;

export default function PortfolioProjects(props) {
  return (
    <div className="shufflejs" id="shufflejs" ref={props.element}>
      {props.projects.map((project, index) => {
        return (
          <div
            key={index}
            className="js-item col-6 col-lg-4"
            data-groups={`["${project.type}"]`}
          >
            <StyledProject className="item-overlay">
              <Img
                className="img-fluid"
                alt={project.projectImage.alt}
                fluid={project.projectImage.image.childImageSharp.fluid}
              />
              <div className="overlay-content">
                <h6 className="overlay-title">{project.name}</h6>
                <div className="overlay-icons">
                  <StyledAnchor
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconWrapper>
                      <i className="fab fa-github" />
                    </IconWrapper>
                  </StyledAnchor>
                  <StyledAnchor
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconWrapper>
                      <i className="fas fa-link" />
                    </IconWrapper>
                  </StyledAnchor>
                </div>
              </div>
            </StyledProject>
          </div>
        );
      })}
      <div className="col-6 col-lg-4 sizer-element" ref={props.sizer} />
    </div>
  );
}
