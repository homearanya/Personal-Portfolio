import React from 'react'

import SEO from '../SEO'
import Header from '../Header'
import Footer from '../Footer'
import ScrollUp from '../ScrollUp'

import '../../assets/css/bootstrap-custom.min.css'
import '../../assets/css/hamburgers-custom.min.css'
import '../../assets/css/main.css'
import '../../assets/css/custom.css'
import '../../assets/css/colors/main-blue.css'

export default function Layout(props: LayoutProps) {
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
  )
}
