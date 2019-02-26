import React, { Component } from "react";
import Sticky from "react-sticky-el";
import { Link as ScrollTo } from "react-scroll";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import Menu from "./Menu";
import Sidebar from "./Sidebar";

const StyledScrollTo = styled(ScrollTo)`
  cursor: pointer;
`;

const StyledSpan = styled.span`
  color: ${props => (props.isSticky ? "#222" : "#fff")};
  font-size: 20px;
  @media (min-width: 992px) {
    font-size: 24px;
  }
`;
const MenuDesktop = styled(Menu)`
  &&& {
    display: none !important;
    @media (min-width: 992px) {
      display: flex !important;
    }
  }
`;

let documentGlobal;
if (typeof window !== "undefined" && typeof document !== "undefined") {
  documentGlobal = document;
}

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false,
      sticky: false,
      toggleTransform: false
    };
    this.menuButtonRef = React.createRef();
    this.menuRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.onFixedToggle = this.onFixedToggle.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.toggleTransform = this.toggleTransform.bind(this);
  }
  handleClick(index) {
    this.setState({ toggleMenu: false });
  }

  toggleMenu() {
    this.setState(prevState => {
      return {
        toggleMenu: !prevState.toggleMenu
      };
    });
  }

  // toggleTransform() {
  //   this.setState(prevState => {
  //     return { toggleTransform: false };
  //   });
  // }

  onFixedToggle() {
    this.setState(prevState => {
      return { sticky: !prevState.sticky };
    });
  }
  componentDidMount() {
    this.setState({ toggleTransform: true });
  }
  componentWillMount() {
    if (documentGlobal) {
      documentGlobal.addEventListener("mousedown", this.handleClickOutside);
    }
  }

  componentWillUnmount() {
    if (documentGlobal) {
      documentGlobal.removeEventListener("mousedown", this.handleClickOutside);
    }
  }

  handleClickOutside(event) {
    if (
      this.menuRef.current &&
      !this.menuRef.current.contains(event.target) &&
      this.menuButtonRef.current &&
      !this.menuButtonRef.current.contains(event.target)
    ) {
      this.toggleMenu();
    }
  }

  render() {
    let stickyStyle = {
      zIndex: 1
    };
    if (this.state.toggleTransform) {
      stickyStyle.transform = "none";
    }
    let navClasses = "navbar navbar-expand-lg navbar-dark fixed-top";
    if (this.state.sticky) {
      navClasses = "navbar navbar-expand-lg navbar-dark fixed-top scrolled";
    }
    let sidebarButtonClasses = "hamburger hamburger--slider";
    if (this.props.openSidebar) {
      sidebarButtonClasses = "hamburger hamburger--slider is-active";
    }
    let menuButtonClasses = "navbar-toggler ml-auto collapsed ";
    let ariaExpanded = "false";
    if (this.state.toggleMenu) {
      menuButtonClasses = "navbar-toggler ml-auto";
      ariaExpanded = "true";
    }
    return (
      <Sticky onFixedToggle={this.onFixedToggle} style={stickyStyle}>
        <nav id="navbar" className={navClasses}>
          <div className="container">
            <StyledScrollTo
              to="header-area"
              className="navbar-brand"
              data-scroll
              smooth={true}
              duration={500}
            >
              <StyledSpan isSticky={this.state.sticky}>
                Carlos Gonzalez
              </StyledSpan>
            </StyledScrollTo>
            <button
              className={menuButtonClasses}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={ariaExpanded}
              aria-label="Toggle navigation"
              onClick={this.toggleMenu}
              ref={this.menuButtonRef}
            >
              <span className="nav-btn">Menu</span>
            </button>
            <div className="d-flex flex-row  order-0 order-lg-1">
              <div className="navbar-nav flex-row">
                <button
                  id="navBtn"
                  className={sidebarButtonClasses}
                  type="button"
                  onClick={this.props.toggleSidebar}
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
            </div>
            <MenuDesktop
              mobile={false}
              handleClick={this.handleClick}
              isSticky={this.state.sticky}
            />
            <CSSTransition
              in={this.state.toggleMenu}
              classNames="SlideInFromTop"
              timeout={300}
              unmountOnExit
            >
              <Menu
                mobile={true}
                openMenu={this.state.toggleMenu}
                handleClick={this.handleClick}
                isSticky={this.state.sticky}
                menuRef={this.menuRef}
              />
            </CSSTransition>
            <CSSTransition
              in={this.props.openSidebar}
              classNames="SlideInFromRight"
              timeout={300}
              unmountOnExit
            >
              <Sidebar
                toggleSidebar={this.props.toggleSidebar}
                // openSidebar={this.props.openSidebar}
                sidebarAvatarImage={this.props.sidebarAvatarImage}
                contactArea={this.props.contactArea}
                moreDetailsRef={this.props.moreDetailsRef}
              />
            </CSSTransition>
          </div>
        </nav>
      </Sticky>
    );
  }
}

export default Navbar;
