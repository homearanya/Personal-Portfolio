import React from "react"

// import post1 from "../assets/img/post-1.jpg";
// import post2 from "../assets/img/post-2.jpg";
// import post3 from "../assets/img/post-3.jpg";
// import sidebarAvatar from "../assets/img/sidebar-avatar.jpg";
// import avatar from "../assets/img/avatar.jpg";

export default function BlogArea() {
  return (
    <section className="single-section blog-area" id="blog-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <h2 className="section-title">My Blog</h2>
              <p className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="card">
              <a href="#0">
                {/* <img className="card-img-top" src={post1} alt="Card image cap" /> */}
              </a>
              <div className="card-body">
                <a href="#0">
                  <h5 className="card-title">5 tips for Photographers</h5>
                </a>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore, porro rem quod illo quam, eum alias id, repellendus
                  magni, quas.
                </p>
                <div className="media post-summary">
                  <a className="align-self-center" href="#0">
                    {/* <img
                      src={sidebarAvatar}
                      alt="Author"
                      className="img-fluid rounded-circle author-avatar"
                    /> */}
                  </a>
                  <div className="media-body align-self-center">
                    <a href="#0">
                      <h6 className="author-name">Carlos Gonzalez</h6>
                    </a>
                    <span className="post-date">15 Aug 18</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card">
              <a href="#0">
                {/* <img
                  className="card-img-top"
                  src={post2}
                  alt="Card image cap"
                /> */}
              </a>
              <div className="card-body">
                <a href="#0">
                  <h5 className="card-title">Take a tour of my office</h5>
                </a>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore, porro rem quod illo quam, eum alias id, repellendus
                  magni, quas.
                </p>
                <div className="media post-summary">
                  <a className="align-self-center" href="#0">
                    {/* <img
                      src={avatar}
                      alt="Author"
                      className=" img-fluid rounded-circle author-avatar"
                    /> */}
                  </a>
                  <div className="media-body align-self-center">
                    <a href="#0">
                      <h6 className="author-name">Carlos Gonzalez</h6>
                    </a>
                    <span className="post-date">8 Aug 18</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card mb-0">
              <a href="#0">
                {/* <img
                  className="card-img-top"
                  src={post3}
                  alt="Card image cap"
                /> */}
              </a>
              <div className="card-body">
                <a href="#0">
                  <h5 className="card-title">How i became a Web Designer</h5>
                </a>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore, porro rem quod illo quam, eum alias id, repellendus
                  magni, quas.
                </p>
                <div className="media post-summary">
                  <a className="align-self-center" href="#0">
                    <img
                      src="img/avatar.jpg"
                      alt="Author"
                      className=" img-fluid rounded-circle author-avatar"
                    />
                  </a>
                  <div className="media-body align-self-center">
                    <a href="#0">
                      <h6 className="author-name">Carlos Gonzalez</h6>
                    </a>
                    <span className="post-date">27 July 18</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
