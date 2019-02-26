import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const HoneypotWrapper = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
`;

const ResultWrapper = styled.div`
  margin-top: 10px;
  height: 60px;
  position: relative;
  @media (min-width: 992px) {
    margin-bottom: -80px;
  }
`;
const ResultMessage = styled.div`
  background-color: #80bdff;
  bottom: 0;
  height: 100%;
  position: absolute;
  width: 100%;
`;

const StyledText = styled.div`
  color: white;
  top: 50%;
  left: 50%;
  padding: 0 10px;
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;

const LoaderContainer = styled.div`
  color: white;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;

  svg {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

const StyledButton = styled.button.attrs(() => ({ type: "button" }))`
  &&& {
    color: ${props => (props.loadSpinner ? "#007bff" : "#ffffff")};
    background-color: #007bff;
    :hover,
    :focus {
      color: ${props => (props.loadSpinner ? "#0056b3" : "#ffffff")};
      background-color: #0056b3 !important;
    }
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
  /* text-align: center; */
`;

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    let subject = "";
    if (this.props.subject) {
      subject = this.props.subject;
    }
    this.state = {
      nameaksljf: "",
      reply_toaksljf: "",
      subjectaksljf: subject,
      messageaksljf: "",
      name: "",
      reply_to: "",
      subject: "",
      message: "",
      submissionResult: null,
      loadSpinner: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch (event.target.name) {
      // real fields
      case "nameaksljf":
        this.setState({ nameaksljf: event.target.value });
        break;
      case "reply_toaksljf":
        this.setState({ reply_toaksljf: event.target.value });
        break;
      case "subjectaksljf":
        this.setState({ subjectaksljf: event.target.value });
        break;
      case "messageaksljf":
        this.setState({ messageaksljf: event.target.value });
        break;
      // Honeypot fields
      case "name":
        this.setState({ name: event.target.value });
        break;
      case "reply_to":
        this.setState({ reply_to: event.target.value });
        break;
      case "subject":
        this.setState({ subject: event.target.value });
        break;
      case "message":
        this.setState({ message: event.target.value });
        break;
      default:
        console.log("Wrong Case in Switch HandleChange");
    }
  }
  sendEmail() {
    // Check is not spam
    if (
      (this.state.name && this.state.name.length > 0) ||
      (this.state.reply_to && this.state.reply_to.length > 0) ||
      (this.state.subject && this.state.subject.length > 0) ||
      (this.state.message && this.state.message.length > 0)
    ) {
      // it's spam but let's pretend it's a successful submission!!!
      setTimeout(() => {
        this.setState({
          nameaksljf: "",
          reply_toaksljf: "",
          subjectaksljf: "",
          messageaksljf: "",
          name: "",
          reply_to: "",
          subject: "",
          message: "",
          submissionResult: "Thanks for the message. I’ll be in touch shortly.",
          loadSpinner: false
        });
      }, 2000);
      return;
    }
    // It's not spam. Let's construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://rx75h4tu7e.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer-carlos-web",
      true
    );
    xhr.setRequestHeader("Accept", "application/json; charset=utf-8");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    // Send the collected data as JSON
    xhr.send(JSON.stringify(this.state));

    // Callback function
    xhr.onloadend = response => {
      if (response.target.status === 200) {
        // The form submission was successful
        this.setState({
          nameaksljf: "",
          reply_toaksljf: "",
          subjectaksljf: "",
          messageaksljf: "",
          submissionResult: "Thanks for the message. I’ll be in touch shortly.",
          loadSpinner: false
        });
      } else {
        // The form submission failed
        this.setState({
          submissionResult: "Something went wrong",
          loadSpinner: false
        });
        console.error(response);
        // console.error(JSON.parse(response.target.response));
      }
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ loadSpinner: true, submissionResult: null }, () => {
      this.sendEmail();
    });
  };

  render() {
    return (
      <div className="col-12 col-lg-7">
        <form
          className="contact-form"
          id="contact-form"
          onSubmit={this.handleSubmit}
        >
          <h4 className="form-title">Message Me</h4>
          <div className="row">
            {/* Real Fields */}
            <div className="col-12 col-md-6 form-group">
              <input
                aria-label="Name"
                aria-required
                required
                type="text"
                name="nameaksljf"
                id="nameaksljf"
                className="form-control"
                placeholder="Name"
                value={this.state.nameaksljf}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-12 col-md-6 form-group">
              <input
                aria-label="Email Address"
                aria-required
                required
                type="email"
                name="reply_toaksljf"
                id="reply_toaksljf"
                className="form-control"
                placeholder="Email Address"
                value={this.state.reply_toaksljf}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-12 form-group">
              <input
                aria-label="Subject"
                aria-required
                required
                type="text"
                name="subjectaksljf"
                id="subjectaksljf"
                className="form-control"
                placeholder="Subject"
                value={this.state.subjectaksljf}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-12 form-group custom-margin">
              <textarea
                aria-label="Message"
                aria-required
                required
                rows="5"
                name="messageaksljf"
                id="messageaksljf"
                className="form-control"
                placeholder="Message"
                value={this.state.messageaksljf}
                onChange={this.handleChange}
              />
            </div>
            {/* Honey Pots Fields */}
            <HoneypotWrapper>
              <div className="col-12 col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Your Name"
                  autoComplete="off"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-12 col-md-6 form-group">
                <input
                  type="email"
                  name="reply_to"
                  id="reply_to"
                  className="form-control"
                  placeholder="Email Address"
                  autoComplete="off"
                  value={this.state.reply_to}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-12 form-group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="form-control"
                  placeholder="Subject"
                  autoComplete="off"
                  value={this.state.subject}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-12 form-group custom-margin">
                <textarea
                  rows="1"
                  cols="45"
                  name="message"
                  id="message"
                  className="form-control"
                  placeholder="Message"
                  autoComplete="off"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </div>
            </HoneypotWrapper>
            {/* Button Area */}
            <div className="col-12">
              <ButtonContainer className="contact-form-submit topmargin_20">
                {this.state.loadSpinner && (
                  <LoaderContainer>
                    <Loader
                      type="ThreeDots"
                      color="#ffffff"
                      height={15}
                      width={80}
                    />
                  </LoaderContainer>
                )}
                <StyledButton
                  aria-label="Submit Button"
                  type="submit"
                  name="contact_submit"
                  className="btn button-scheme"
                  id="contact-submit"
                  loadSpinner={this.state.loadSpinner}
                  disabled={this.state.loadSpinner}
                >
                  Submit
                </StyledButton>
              </ButtonContainer>
            </div>
          </div>
        </form>
        <ResultWrapper>
          <CSSTransition
            in={this.state.submissionResult !== null}
            classNames="slideUp"
            timeout={300}
            unmountOnExit
          >
            <ResultMessage>
              <StyledText>{this.state.submissionResult}</StyledText>
            </ResultMessage>
          </CSSTransition>
        </ResultWrapper>
      </div>
    );
  }
}

export default ContactForm;
