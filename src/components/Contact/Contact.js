import "./contact.css";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formHandler = useRef();
  const [submitted, setSubmitted] = useState(false);

  const submitHanlder = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8nbyulq",
        "template_qjrmw3q",
        formHandler.current,
        "user_VmRQbigCtQtSFsl0slWwM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    formHandler.current.reset();
  };
  return (
    <div className="contact">
      {/* <div className="contact-bg"></div> */}
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's get in touch</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <i className="fas fa-mobile-alt contact-icon"></i>
              <p>+1 832-852-6424</p>
            </div>

            <div className="contact-info-item">
              <i className="far fa-envelope contact-icon"></i>
              <p>contact@mohammedsummers.com</p>
            </div>

            <div className="contact-info-item">
              <i className="far fa-map contact-icon"></i>
              <p>Houston, TX</p>
            </div>
          </div>

          {/* <div className="social">
            <a
              href="https://github.com/mohammed-summers"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <i class="fab fa-github"></i>
            </a>

            <a
              href="https://github.com/mohammed-summers"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <i class="fab fa-youtube"></i>
            </a>

            <a
              href="https://github.com/mohammed-summers"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </div> */}
        </div>

        <div className="contact-right">
          <p className="contact-desc">
            Submit the form below so I can get back to you as soon as possible
          </p>
          <form ref={formHandler} onSubmit={submitHanlder}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {submitted && "Thank You!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
