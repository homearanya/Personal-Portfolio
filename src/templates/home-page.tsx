import React, {Component} from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout/Layout'
import AboutArea from '../components/AboutArea/AboutArea'
import ServicesArea from '../components/ServicesArea/ServicesArea'
import HireArea from '../components/HireArea/HireArea'
import PortfolioArea from '../components/PortfolioArea/PortfolioArea'
import ContactArea from '../components/ContactArea/ContactArea'

interface State {
  openSidebar: boolean
}
interface Props {
  readonly data: PageQueryData
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
    this.setState(prevState => {
      return {
        openSidebar: !prevState.openSidebar,
      }
    })
  }

  render() {
    const {siteMetadata} = this.props.data.site
    const {
      headerArea,
      aboutArea,
      servicesArea,
      hireArea,
      portfolioArea,
      contactArea,
    } = this.props.data.markdownRemark.frontmatter
    return (
      <Layout
        siteMetadata={siteMetadata}
        headerArea={headerArea}
        contactArea={contactArea}
        toggleSidebar={this.toggleSidebar}
        openSidebar={this.state.openSidebar}
        moreDetailsRef={this.moreDetailsRef}>
        <AboutArea
          aboutArea={aboutArea}
          toggleSidebar={this.toggleSidebar}
          moreDetailsRef={this.moreDetailsRef}
        />
        <ServicesArea servicesArea={servicesArea} />
        <HireArea hireArea={hireArea} />
        <PortfolioArea portfolioArea={portfolioArea} />
        <ContactArea contactArea={contactArea} />
      </Layout>
    )
  }
}
interface PageQueryData {
  readonly site: {
    siteMetadata: SiteMetadata
  }
  markdownRemark: {
    frontmatter: {
      headerArea: HeaderAreaProps
      aboutArea: AboutAreaProps
      servicesArea: ServicesAreaProps
      hireArea: HireAreaProps
      portfolioArea: PorfolioAreaProps
      contactArea: ContactAreaProps
    }
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
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        headerArea {
          heroImage {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1920, maxHeight: 924) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          heroImageMobile {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 992) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          sidebarAvatarImage {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 300) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
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
                  ...GatsbyImageSharpFluid_withWebp
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
                  ...GatsbyImageSharpFluid_withWebp
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
                    ...GatsbyImageSharpFluid_withWebp
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
`
