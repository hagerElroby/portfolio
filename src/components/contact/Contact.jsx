import "./contact.css";
import Githup from "../../img/github-512.webp";
import Email from "../../img/email.png";
import Linkedin from "../../img/linkedin-vector-icon-4.jpg";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_aoyu8na",
        "template_ulqtg7x",
        formRef.current,
        "NEak1a5JpzBZRQ0qE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
            <a href = "mailto:hagerelroby.az2020@gmail.com">
              <img src={Email} alt="" className="c-icon" />
              </a>
            </div>
            <div className="c-info-item">
              <a href="http://linkedin.com/in/hager-ahmed-91a8ab194" target="_blanck">
                <img className="c-icon" src={Linkedin} alt="" />
                </a>
            </div>
            <div className="c-info-item">
              <a href="https://github.com/hagerElroby" target="_blanck">
                 <img className="c-icon" src={Githup} alt="" />
                 </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && " DONE !Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;