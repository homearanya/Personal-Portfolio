import React, { Component } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const IconWrapper = styled.div<{ inputColor: string }>`
  color: ${(props) => props.inputColor};
  display: inline-block;
  font-size: 21px;
  margin: 0 5px;
  line-height: 100%;
`
interface Props {
  toggleSidebar: () => void
  sidebarAvatarImage: GatsbyTypes.MarkdownRemarkFrontmatterHeaderAreaSidebarAvatarImage
  contactArea: GatsbyTypes.MarkdownRemarkFrontmatterContactArea
  moreDetailsRef: React.RefObject<HTMLButtonElement>
}

export class Sidebar extends Component<Props> {
  private menuRef: React.RefObject<HTMLDivElement>
  constructor(props: Props) {
    super(props)
    this.menuRef = React.createRef()
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }
  componentWillMount() {
    document.addEventListener("mousedown", this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside)
  }

  handleClickOutside(event: MouseEvent) {
    if (
      this.menuRef.current &&
      !this.menuRef.current.contains(event.target as Node) &&
      this.props.moreDetailsRef.current &&
      !this.props.moreDetailsRef.current.contains(event.target as Node)
    ) {
      this.props.toggleSidebar()
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
          aria-label="Sidebar Menu"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <div className="about-me">
          {this.props.sidebarAvatarImage.image?.childImageSharp && (
            <GatsbyImage
              image={
                this.props.sidebarAvatarImage.image.childImageSharp
                  .gatsbyImageData
              }
              className="img-fluid img-thumbnail d-block mx-auto avatar"
              alt={this.props.sidebarAvatarImage.alt ?? ""}
            />
          )}
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
                    href={`https://maps.google.com/?q=${this.props.contactArea.address}`}
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
              {this.props.contactArea.phone && (
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
              )}
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
              href="https://twitter.com/CGonzalezWebDev"
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
    )
  }
}

export default Sidebar
