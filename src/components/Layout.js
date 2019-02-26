import React from "react";

import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";

import "../assets/css/bootstrap-custom.min.css";
// import "../assets/css/ionicons.min.css";
import "../assets/css/hamburgers-custom.min.css";
// import "../assets/css/lity.min.css";
// import "../assets/css/owl.carousel.min.css";
// import "../assets/css/owl.theme.default.min.css";
import "../assets/css/main.css";
import "../assets/css/custom.css";
import "../assets/css/colors/main-blue.css";
// import "../assets/css/variants/particles.css";

export default function Layout(props) {
  return (
    <React.Fragment>
      <SEO siteMetadata={props.siteMetadata} />
      <Header
        headerArea={props.headerArea}
        contactArea={props.contactArea}
        toggleSidebar={props.toggleSidebar}
        openSidebar={props.openSidebar}
        moreDetailsRef={props.moreDetailsRef}
      />
      {props.children}
      <Footer />
      <ScrollUp />
    </React.Fragment>
  );
}
