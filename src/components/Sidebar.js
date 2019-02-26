import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const IconWrapper = styled.div`
  color: ${props => props.inputColor};
  display: inline-block;
  font-size: 21px;
  margin: 0 5px;
  line-height: 100%;
`;

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.menuRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentWillMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (
      this.menuRef.current &&
      !this.menuRef.current.contains(event.target) &&
      this.props.moreDetailsRef.current &&
      !this.props.moreDetailsRef.current.contains(event.target)
    ) {
      this.props.toggleSidebar();
    }
  }

  render() {
    return (
      <div className="sidebar" id="sidebar" ref={this.menuRef}>
        <button
          id="sidebarBtn"
          className="hamburger hamburger--slider is-active"
          type="button"
          onClick={this.props.toggleSidebar}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <div className="about-me">
          <Img
            className="img-fluid img-thumbnail d-block mx-auto avatar"
            fluid={this.props.sidebarAvatarImage.image.childImageSharp.fluid}
            alt={this.props.sidebarAvatarImage.alt}
          />
          <address>
            <ul className="list-unstyled">
              <li>
                <span>Name</span>
                <p>Carlos Gonzalez</p>
              </li>
              <li>
                <span>Curriculum Vitae</span>
                <p>
                  <a href="/cv-carlos-gonzalez.pdf" download>
                    Download CV
                  </a>
                </p>
              </li>
              <li>
                <span>Skills</span>
                <p>JavaScript, React, HTML, CSS</p>
              </li>
              <li>
                <span>Email</span>
                <p>
                  <a href={`mailto:${this.props.contactArea.email}`}>
                    {this.props.contactArea.email}
                  </a>
                </p>
              </li>
              <li>
                <span>Address</span>
                <p>
                  <a
                    href={`https://maps.google.com/?q=${
                      this.props.contactArea.address
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {this.props.contactArea.address}
                  </a>
                </p>
              </li>
              {/* <li>
              <span>Age</span>
              <p>21</p>
            </li> */}
              <li>
                <span>Date of Birth</span>
                <p>10 February 1973</p>
              </li>
              <li>
                <span>Phone</span>
                <p>
                  <a
                    href={`tel:${this.props.contactArea.phone.replace(
                      / /g,
                      ""
                    )}`}
                  >
                    {this.props.contactArea.phone}
                  </a>
                </p>
              </li>
              <li>
                <span>Residence</span>
                <p>South Africa</p>
              </li>
              <li>
                <span>Freelance Status</span>
                <p>Available</p>
              </li>
            </ul>
          </address>
          <div className="social-medias">
            <a
              href="https://github.com/homearanya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper inputColor="#6e5494">
                <i className="fab fa-github" />
              </IconWrapper>
            </a>
            <a
              href="https://www.linkedin.com/in/carlos-david-gonzalez-vicente/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper inputColor="#0077b5">
                <i className="fab fa-linkedin" />
              </IconWrapper>
            </a>
            <a
              href="https://twitter.com/CarlosD32433232"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper inputColor="#1DA1F2">
                <i className="fab fa-twitter" />
              </IconWrapper>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
