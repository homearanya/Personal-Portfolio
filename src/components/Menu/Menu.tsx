import React from "react"
import { StaticQuery, graphql } from "gatsby"

import MenuItems from "../MenuItems"

interface Props {
  mobile: boolean
  openMenu?: boolean
  handleClick: () => void
  isSticky: boolean
  menuRef?: React.RefObject<HTMLDivElement>
  className?: string
}

export default function Menu(props: Props) {
  let menuClasses = "navbar-collapse order-1 order-lg-0 collapse"
  if (props.openMenu) {
    menuClasses = "navbar-collapse order-1 order-lg-0 collapse show"
  }
  menuClasses = props.className
    ? `${props.className} ${menuClasses}`
    : menuClasses
  return (
    <StaticQuery<GatsbyTypes.MenuQueryQuery>
      query={graphql`
        query MenuQuery {
          markdownRemark(fields: { slug: { eq: "/main-menu/" } }) {
            frontmatter {
              menuItems {
                link
                name
              }
            }
          }
        }
      `}
      render={(data) => {
        const menuItems = data?.markdownRemark?.frontmatter?.menuItems
        return (
          <div
            id="navbarSupportedContent"
            className={menuClasses}
            style={{ overflow: "hidden" }}
          >
            <ul className="navbar-nav ml-auto">
              {props.mobile ? (
                <div ref={props.menuRef}>
                  <MenuItems
                    menuItems={
                      menuItems as GatsbyTypes.MarkdownRemarkFrontmatterMenuItems[]
                    }
                    isSticky={props.isSticky}
                    handleClick={props.handleClick}
                  />
                </div>
              ) : (
                <MenuItems
                  menuItems={
                    menuItems as GatsbyTypes.MarkdownRemarkFrontmatterMenuItems[]
                  }
                  isSticky={props.isSticky}
                  handleClick={props.handleClick}
                />
              )}
            </ul>
          </div>
        )
      }}
    />
  )
}
