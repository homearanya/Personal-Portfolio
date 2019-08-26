declare const __PATH_PREFIX__: string

declare interface Edge<T> {
  readonly node: T
}

declare interface Markdown {
  readonly id: string
  readonly body: string
  readonly excerpt?: string
  readonly fields: {
    readonly slug: string
  }
  readonly frontmatter: {
    readonly date?: string
    readonly draft?: boolean
    readonly path: string
    readonly tags?: string[]
    readonly title?: string
  }
  readonly parent?: {
    readonly absolutePath?: string
    readonly accessTime?: string
    readonly base?: string
    readonly birthTime?: string
    readonly changeTime?: string
    readonly extension?: string
    readonly modifiedTime?: string
    readonly name?: string
    readonly relativeDirectory?: string
    readonly relativePath?: string
    readonly size?: number
    readonly sourceInstanceName?: string
  }
}
declare interface Organization {
  name: string
  url: string
  logo: string
  phone: string
}
declare interface SiteMetadata {
  title: string
  defaultTitle: string
  description: string
  canonicalUrl: string
  image: string
  author: {
    name: string
    minibio: string
  }
  organization: Organization
  siteUrl: string
}

declare interface GatsbyImageSharpFluid {
  base64: string
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}
declare interface GatsbyImageSharpFluid_withWebp {
  base64: string
  aspectRatio: number
  src: string
  srcSet: string
  srcWebp: string
  srcSetWebp: string
  sizes: string
}
declare interface GatsbyImageSharpFluid_withWebp_noBase64 {
  aspectRatio: number
  src: string
  srcSet: string
  srcWebp: string
  srcSetWebp: string
  sizes: string
}

declare interface NotFoundArea {
  heading: string
  blurb: string
  notFoundImage: {
    alt: string
    image: {
      childImageSharp: {
        fluid: GatsbyImageSharpFluid
      }
    }
  }
}

declare module 'react-scroll-up' {
  interface ScrollUpProps {
    showUnder: number
    topPosition?: number
    easing?: string
    duration?: number
    style?: {}
  }
  class ScrollUp extends React.Component<ScrollUpProps> {}
  export default ScrollUp
}

declare module 'react-loader-spinner' {
  interface LoaderProps {
    color?: string
    width?: number
    height?: number
    type:
      | 'Audio'
      | 'Ball-Triangle'
      | 'Bars'
      | 'Circles'
      | 'Grid'
      | 'Hearts'
      | 'Oval'
      | 'Puff'
      | 'Rings'
      | 'TailSpin'
      | 'ThreeDots'
  }
  class Loader extends React.Component<LoaderProps> {}

  export default Loader
}
declare module 'react-text-loop' {
  interface SpringConfig {
    stifness?: number
    damping?: number
    precission?: number
  }
  interface TextLoopProps {
    interval?: number | number[]
    delay?: number
    adjustingSpeed?: number
    fade?: boolean
    mask?: boolean
    noWrap?: boolean
    springConfig?: SpringConfig
    className?: string
    children?: React.ReactNode[]
  }
  class TextLoop extends React.Component<TextLoopProps> {}

  export default TextLoop
}

declare interface ImageGatsbyImageSharpFluid_withWebp {
  alt: string
  image: {
    childImageSharp: {
      fluid: GatsbyImageSharpFluid_withWebp
    }
  }
}

declare interface ImageGatsbyImageSharpFluid_withWebp_noBase64 {
  alt: string
  image: {
    childImageSharp: {
      fluid: GatsbyImageSharpFluid_withWebp_noBase64
    }
  }
}

declare interface NavBarProps {
  sidebarAvatarImage: ImageGatsbyImageSharpFluid_withWebp_noBase64
  contactArea: ContactAreaProps
  toggleSidebar: () => void
  openSidebar: boolean
  moreDetailsRef: React.RefObject<HTMLButtonElement>
}

declare interface AboutAreaProps {
  aboutImage: ImageGatsbyImageSharpFluid_withWebp
}

declare interface ButtopProps {
  whereTo: string
  text: string
  color: string
  backgroundColor: string
}
declare interface HeaderAreaProps {
  heroImage: ImageGatsbyImageSharpFluid_withWebp_noBase64
  heroImageMobile: ImageGatsbyImageSharpFluid_withWebp_noBase64
  sidebarAvatarImage: ImageGatsbyImageSharpFluid_withWebp_noBase64
}

declare interface ContactAreaProps {
  address: string
  phone: string
  email: string
}

declare interface HireAreaProps {
  heading: string
  blurb: string
  hireImage: ImageGatsbyImageSharpFluid_withWebp
}

declare interface ProjectProps {
  projectImage: ImageGatsbyImageSharpFluid_withWebp
  name: string
  github: string
  siteUrl: string
  type: string
}

declare interface PorfolioAreaProps {
  heading: string
  blurb: string
  projects: ProjectProps[]
}

declare interface ServiceProps {
  iconClasses: string
  serviceName: string
  blurb: string
}
declare interface ServicesAreaProps {
  heading: string
  blurb: string
  services: ServiceProps[]
}

declare interface LayoutProps {
  siteMetadata: SiteMetadata
  headerArea: HeaderAreaProps
  contactArea: ContactAreaProps
  toggleSidebar: () => void
  openSidebar: boolean
  moreDetailsRef: React.RefObject<HTMLButtonElement>
  children?: React.ReactNode[]
}

declare interface MenuItemProps {
  link: string
  name: string
}
declare interface MenuItemsProps {
  menuItems: MenuItemProps[]
}
