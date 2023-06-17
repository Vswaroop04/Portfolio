import React from "react";

function Contact() {

  console.log("Contact Form")
  return (
    <div id="contact">
      <div className="contact">
        <h3>
          {" "}
          <u> Contact Me </u>{" "}
        </h3>
        <div className="rcornersforcontact">
          <div class="contactContainer sectionContainer">
            <h2>
              {" "}
              <u> Get in Touch </u>
            </h2>
            <div class="contactTypes">
              <div class="flexContainer">
                <div class="typeBox">
                  <i class="lni lni-envelope fa-solid fa-envelope"></i>{" "}
                  <a href="mailto:vswaroop04@gmail.com">vswaroop04@gmail.com</a>
                  <p> Email Me  </p>
                </div>
              </div>
              <div class="flexContainer">
                <div class="typeBox">
                  <i class="lni lni-calendar fa-solid fa-calendar-days"></i>
                  <a
                    href="https://calendly.com/vswaroop04/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Calendly
                  </a>
                  <p>Schedule a Meeting</p>
                </div>
              </div>
            </div>
            <div class="contactFormContainer">
              <h2>
                {" "}
                <u> Contact Form </u>{" "}
              </h2>

              <form
                id="contactForm"
                action="https://formspree.io/f/xdobjwvz"
                method="POST"
              >
                <label for="nameInput" class="srOnly"></label>
                <input
                  type="name"
                  id="nameInput"
                  name="nameInput"
                  class="nameInput"
                  required
                  placeholder="Your Name*"
                />
                <label for="emailInput" class="srOnly"></label>
                <input
                  type="email"
                  id="emailInput"
                  name="emailInput"
                  class="emailInput"
                  required
                  placeholder="Your Email*"
                />
                <label for="subjectInput" class="srOnly"></label>
                <input
                  type="text"
                  id="subjectInput"
                  name="subjectInput"
                  class="subjectInput"
                  required
                  placeholder="Subject*"
                />
                <label for="messageInput" class="srOnly"></label>
                <textarea
                  class="messageInput"
                  name="messageInput"
                  id="messageInput"
                  required
                  placeholder="Your Message*"
                ></textarea>
              </form>

              <button
                type="submit"
                class="formSend"
                target="_blank"
                form="contactForm"
                rel="noopener noreferrer"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
