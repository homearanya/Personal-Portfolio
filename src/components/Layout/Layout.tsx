import React from "react"

import SEO from "../SEO"
import Header from "../Header"
import Footer from "../Footer"
import ScrollUp from "../ScrollUp"

import "../../assets/css/bootstrap-custom.min.css"
import "../../assets/css/hamburgers-custom.min.css"
import "../../assets/css/main.css"
import "../../assets/css/custom.css"
import "../../assets/css/colors/main-blue.css"

interface LayoutProps {
  siteMetadata: GatsbyTypes.SiteSiteMetadata
  headerArea: GatsbyTypes.MarkdownRemarkFrontmatterHeaderArea
  contactArea: GatsbyTypes.MarkdownRemarkFrontmatterContactArea
  toggleSidebar: () => void
  openSidebar: boolean
  moreDetailsRef: React.RefObject<HTMLButtonElement>
}
const Layout: React.FC<LayoutProps> = ({
  children,
  siteMetadata,
  headerArea,
  contactArea,
  toggleSidebar,
  openSidebar,
  moreDetailsRef,
}) => {
  return (
    <React.Fragment>
      <SEO siteMetadata={siteMetadata} />
      <Header
        headerArea={headerArea}
        contactArea={contactArea}
        toggleSidebar={toggleSidebar}
        openSidebar={openSidebar}
        moreDetailsRef={moreDetailsRef}
      />
      {children}
      <Footer />
      <ScrollUp />
    </React.Fragment>
  )
}

export default Layout
