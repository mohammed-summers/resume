import "./contact.css";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const isEmpty = (value) => value.trim() === "";
const isThreeChars = (value) => value.trim().length >= 3;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    subject: true,
    email: true,
    message: true,
  });

  const formHandler = useRef();

  const nameInputRef = useRef();
  const subjectInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const submitHanlder = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredSubject = subjectInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const enteredNameIsValid = isThreeChars(enteredName);
    const enteredSubjectIsValid = isThreeChars(enteredSubject);
    const enteredEmailIsValid = isThreeChars(enteredEmail);
    const enteredMessageIsValid = isThreeChars(enteredMessage);

    setFormInputValidity({
      name: enteredNameIsValid,
      subject: enteredSubjectIsValid,
      email: enteredEmailIsValid,
      message: enteredMessageIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredSubjectIsValid &&
      enteredEmailIsValid &&
      enteredMessageIsValid;

    if (!formIsValid) {
      return;
    }
    // emailjs
    //   .sendForm(
    //     "service_8nbyulq",
    //     "template_qjrmw3q",
    //     formHandler.current,
    //     "user_VmRQbigCtQtSFsl0slWwM"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       setSubmitted(true);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    formHandler.current.reset();
  };
  return (
    <div className="contact" id="contact">
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
        </div>

        <div className="contact-right">
          <h2 className="contact-desc">
            Submit the form below so I can get back to you as soon as possible
          </h2>
          <form ref={formHandler} onSubmit={submitHanlder}>
            <div>
              <input
                type="text"
                placeholder="Name"
                name="user_name"
                ref={nameInputRef}
              />
              {!formInputValidity.name && <p>Please enter a valid name</p>}
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                name="user_subject"
                ref={subjectInputRef}
              />
              {!formInputValidity.subject && (
                <p>Please enter a valid subject</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                name="user_email"
                ref={emailInputRef}
              />
              {!formInputValidity.email && <p>Please enter a valid email</p>}
            </div>
            <div>
              <textarea
                rows="5"
                placeholder="Message"
                name="message"
                ref={messageInputRef}
              />
              {!formInputValidity.message && <p>Please leave a message</p>}
            </div>
            <button>Submit</button>
            {submitted && "Thank You!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
