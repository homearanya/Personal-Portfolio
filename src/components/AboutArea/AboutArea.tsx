import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

interface Props {
  aboutArea: GatsbyTypes.MarkdownRemarkFrontmatterAboutArea
  toggleSidebar: () => void
  moreDetailsRef: React.RefObject<HTMLButtonElement>
}

export default function AboutArea(props: Props) {
  const { aboutImage } = props.aboutArea

  return (
    <section className="single-section about-area" id="about-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="row align-items-center">
              {aboutImage?.image?.childImageSharp && (
                <div className="col-12 col-lg-5">
                  <GatsbyImage
                    image={aboutImage.image.childImageSharp.gatsbyImageData}
                    className="img-fluid img-thumbnail about-img"
                    alt={aboutImage.alt ?? ""}
                  />
                </div>
              )}
              <div className="col-12 col-lg-7">
                <div className="content-block">
                  <h2 className="about-title">About Me</h2>
                  <h6 className="about-role">I am a Front-end Web Developer</h6>
                  <p className="about-description">
                    My name is <strong>Carlos Gonzalez</strong>. I am a
                    freelancer based in sunny South Africa and I have been
                    tinkering with websites for years. My focus is on
                    modern-looking, blazing-fast loading, SEO-ready sites.
                  </p>
                  <p className="about-description last">
                    Choose an HTML5 template that you like and best applies to
                    your business, and I’ll turn it into your dream new website.
                    All my sites come with a headless CMS so that you can manage
                    your content. And guess what?, you won’t need to pay for a
                    web host.
                  </p>
                  <address>
                    <ul className="list-inline about-info">
                      <li className="list-inline-item">
                        <span>Name:</span>
                        <p>Carlos Gonzalez</p>
                      </li>
                      <li className="list-inline-item">
                        <span>Email:</span>
                        <p>
                          <a href="mailto:homearanya@outlook.com">
                            homearanya@outlook.com
                          </a>
                        </p>
                      </li>
                      <li className="list-inline-item mb-0">
                        <span>From:</span>
                        <p>Howick, South Africa</p>
                      </li>
                      <li className="list-inline-item mb-0">
                        <span>Phone:</span>
                        <p>+27 76 459 9127</p>
                      </li>
                    </ul>
                  </address>
                  <a
                    className="btn button-scheme"
                    href="/cv-carlos-gonzalez.pdf"
                    download
                    role="button"
                  >
                    Download CV
                  </a>
                  <button
                    type="button"
                    className="btn button-outline details"
                    onClick={props.toggleSidebar}
                    ref={props.moreDetailsRef}
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
