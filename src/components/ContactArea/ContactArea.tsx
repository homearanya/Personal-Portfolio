import React from 'react'

import ContactForm from '../ContactForm'
import ContactDetails from '../ContactDetails'

declare interface Props {
  contactArea: ContactAreaProps
}

export default function ContactArea(props: Props) {
  return (
    <section className="single-section contact-area silver-bg" id="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <h2 className="section-title">Get in Touch</h2>
              <p className="section-description">
                Let&apos;s work together. I look forward to hear from you!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <ContactForm subject="" />
          <ContactDetails contactArea={props.contactArea} />
        </div>
      </div>
    </section>
  )
}
