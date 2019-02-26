import React, { Component } from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import AboutArea from "../components/AboutArea";
import ServicesArea from "../components/ServicesArea";
import HireArea from "../components/HireArea";
import PortfolioArea from "../components/PortfolioArea";
// import TestimonialsArea from "../components/TestimonialsArea";
// import BlogArea from "../components/BlogArea";
import ContactArea from "../components/ContactArea";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSidebar: false
    };
    this.moreDetailsRef = React.createRef();
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState(prevState => {
      return {
        openSidebar: !prevState.openSidebar
      };
    });
  }
  // export default function({ data }) {
  render() {
    const { siteMetadata } = this.props.data.SiteMetaDataQuery;
    const {
      headerArea,
      aboutArea,
      servicesArea,
      hireArea,
      portfolioArea,
      contactArea
    } = this.props.data.homePageQuery.frontmatter;
    return (
      <Layout
        siteMetadata={siteMetadata}
        headerArea={headerArea}
        contactArea={contactArea}
        toggleSidebar={this.toggleSidebar}
        openSidebar={this.state.openSidebar}
        moreDetailsRef={this.moreDetailsRef}
      >
        <AboutArea
          aboutArea={aboutArea}
          toggleSidebar={this.toggleSidebar}
          moreDetailsRef={this.moreDetailsRef}
        />
        <ServicesArea servicesArea={servicesArea} />
        <HireArea hireArea={hireArea} />
        <PortfolioArea portfolioArea={portfolioArea} />
        {/* <TestimonialsArea />
      <BlogArea /> */}
        <ContactArea contactArea={contactArea} />
      </Layout>
    );
  }
}

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    SiteMetaDataQuery: site {
      siteMetadata {
        title
        defaultTitle
        description
        canonicalUrl
        image
        author {
          name
          minibio
        }
        organization {
          name
          url
          logo
          phone
        }
        siteUrl
      }
    }
    homePageQuery: markdownRemark(id: { eq: $id }) {
      frontmatter {
        headerArea {
          heroImage {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1920, maxHeight: 924) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
          heroImageMobile {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 992) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
          sidebarAvatarImage {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 300) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
        aboutArea {
          aboutImage {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 540) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        servicesArea {
          heading
          blurb
          services {
            iconClasses
            serviceName
            blurb
          }
        }
        hireArea {
          heading
          blurb
          hireImage {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1920, maxHeight: 902) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        portfolioArea {
          heading
          blurb
          projects {
            projectImage {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 450) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            name
            github
            siteUrl
            type
          }
        }
        contactArea {
          address
          phone
          email
        }
      }
    }
  }
`;
