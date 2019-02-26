import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  //   UncontrolledDropdown,
  //   DropdownToggle,
  //   DropdownMenu,
  //   DropdownItem
} from "reactstrap";

import Sidebar from "./Sidebar";

export default class ReactstrapNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar
        id="navbar"
        className="navbar navbar-expand-lg navbar-dark fixed-top"
      >
        <div className="container">
          <NavbarBrand className="navbar-brand" data-scroll href="#header-area">
            Carlos Gonzalez
          </NavbarBrand>
          <NavbarToggler
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.toggle}
          >
            <span className="nav-btn">Menu</span>
          </NavbarToggler>
          <div className="d-flex flex-row  order-0 order-lg-1">
            <div className="navbar-nav flex-row">
              <button
                id="navBtn"
                className="hamburger hamburger--slider"
                type="button"
                onClick={this.props.collapsed}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
          <Collapse
            in={this.state.Open}
            timeout={5000}
            id="navbarSupportedContent"
            // className="collapse navbar-collapse order-1 order-lg-0"
            className="order-1 order-lg-0"
            isOpen={this.state.isOpen}
            navbar
          >
            <Nav className="navbar-nav ml-auto">
              <NavItem className="nav-item active">
                <NavLink className="nav-link" href="#header-area">
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink className="nav-link" href="#about-area">
                  About
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink className="nav-link" href="#services-area">
                  Services
                </NavLink>
              </NavItem>
              <NavItem className="nav-item">
                <NavLink className="nav-link" href="#portfolio-area">
                  Portfolio
                </NavLink>
              </NavItem>
              {/* <NavItem className="nav-item">
                <a className="nav-link" href="#testimonials-area">
                  Clients
                </a>
              </NavItem>
              <NavItem className="nav-item">
                <a className="nav-link" href="#blog-area">
                  Blog
                </a>
              </NavItem> */}
              <NavItem className="nav-item">
                <NavLink className="nav-link" href="#contact-area">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
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
            />
          </CSSTransition>
        </div>
      </Navbar>
    );
  }
}
