import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import AboutArea from "../components/AboutArea/AboutArea"
import ServicesArea from "../components/ServicesArea/ServicesArea"
import HireArea from "../components/HireArea/HireArea"
import PortfolioArea from "../components/PortfolioArea/PortfolioArea"
import ContactArea from "../components/ContactArea/ContactArea"

interface State {
  openSidebar: boolean
}
interface Props {
  readonly data: GatsbyTypes.HomePageQuery
}

export default class HomePage extends Component<Props, State> {
  private moreDetailsRef: React.RefObject<HTMLButtonElement>
  constructor(props: Props) {
    super(props)
    this.state = {
      openSidebar: false,
    }
    this.moreDetailsRef = React.createRef()
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  toggleSidebar() {
    this.setState((prevState) => {
      return {
        openSidebar: !prevState.openSidebar,
      }
    })
  }

  render() {
    const siteMetadata = this.props.data.site?.siteMetadata
    const headerArea = this.props.data.markdownRemark?.frontmatter?.headerArea
    const aboutArea = this.props.data.markdownRemark?.frontmatter?.aboutArea
    const servicesArea =
      this.props.data.markdownRemark?.frontmatter?.servicesArea
    const hireArea = this.props.data.markdownRemark?.frontmatter?.hireArea
    const portfolioArea =
      this.props.data.markdownRemark?.frontmatter?.portfolioArea
    const contactArea = this.props.data.markdownRemark?.frontmatter?.contactArea

    return (
      <Layout
        siteMetadata={siteMetadata as GatsbyTypes.SiteSiteMetadata}
        headerArea={
          headerArea as GatsbyTypes.MarkdownRemarkFrontmatterHeaderArea
        }
        contactArea={
          contactArea as GatsbyTypes.MarkdownRemarkFrontmatterContactArea
        }
        toggleSidebar={this.toggleSidebar}
        openSidebar={this.state.openSidebar}
        moreDetailsRef={this.moreDetailsRef}
      >
        <AboutArea
          aboutArea={
            aboutArea as GatsbyTypes.MarkdownRemarkFrontmatterAboutArea
          }
          toggleSidebar={this.toggleSidebar}
          moreDetailsRef={this.moreDetailsRef}
        />
        <ServicesArea
          servicesArea={
            servicesArea as GatsbyTypes.MarkdownRemarkFrontmatterServicesArea
          }
        />
        <HireArea
          hireArea={hireArea as GatsbyTypes.MarkdownRemarkFrontmatterHireArea}
        />
        <PortfolioArea
          portfolioArea={
            portfolioArea as GatsbyTypes.MarkdownRemarkFrontmatterPortfolioArea
          }
        />
        <ContactArea
          contactArea={
            contactArea as GatsbyTypes.MarkdownRemarkFrontmatterContactArea
          }
        />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query HomePage($id: String!) {
    site {
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
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        headerArea {
          heroImage {
            alt
            image {
              childImageSharp {
                gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
              }
            }
          }
          heroImageMobile {
            alt
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 992
                  placeholder: NONE
                  layout: CONSTRAINED
                )
              }
            }
          }
          sidebarAvatarImage {
            alt
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  height: 300
                  placeholder: NONE
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
        aboutArea {
          aboutImage {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 540, layout: CONSTRAINED)
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
                gatsbyImageData(layout: FULL_WIDTH)
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
                  gatsbyImageData(width: 450, layout: CONSTRAINED)
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
`
