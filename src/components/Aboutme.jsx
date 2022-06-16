import React from "react";
import Header from "./Header";

function Aboutme() {
  return (
    <section>
      <Header />

      <div
        className="aboutcontent w3-content w3-margin-top"
        style={{ maxWidth: "1400px" }}
      >
        <div className="w3-row-padding">
          <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container">
                <img
                  src="https://i.ibb.co/mhD6m2f/Capture.png"
                  style={{ width: "100%" }}
                  alt="Kanakam Vishnu Swaroop"
                />
                <div className="w3-display-topleft w3-container w3-text-black">
                  <h2>Kanakam Vishnu Swaroop</h2>
                </div>
              </div>
              <div className="w3-container">
                <p>
                  <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  Web Developer
                </p>
                <p>
                  <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  Vijayawada,India
                </p>
                <p>
                  <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  vswaroop04@gmail.com
                </p>
                <p>
                  <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
                  8247490377
                </p>
                <hr />

                <p className="w3-large">
                  <b>
                    <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
                    Skills
                  </b>
                </p>
                <p>Frontend : Html, Css, Bootstrap, Js, Jquery, ReactJs</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div className="w3-container w3-center w3-round-xlarge w3-teal">
                    90%
                  </div>
                </div>
                <br />
                <p>Backend : NodeJS,Sql,MongoDB,Mongoose </p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "80%" }}
                  >
                    <div className="w3-center w3-text-white">80%</div>
                  </div>
                </div>
                <br />
                <p>Java</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "75%" }}
                  >
                    75%
                  </div>
                </div>
                <br />
                <p>SEO</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    className="w3-container w3-center w3-round-xlarge w3-teal"
                    style={{ width: "50%" }}
                  >
                    50%
                  </div>
                </div>
                <br />

                <p className="w3-large w3-text-theme">
                  <b>
                    <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>
                    Languages
                  </b>
                </p>
                <p>Telugu</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-teal"
                    style={{ height: "24px", width: "90%" }}
                  ></div>
                </div>
                <p>Hindi</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-teal"
                    style={{ height: "24px", width: "85%" }}
                  ></div>
                </div>
                <p>English</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-teal"
                    style={{ height: "24px", width: "80%" }}
                  ></div>
                </div>
                <br />
              </div>
            </div>
            <br />
          </div>

          <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                Work Experience
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Front End Developer / fiverr.com</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                  Jan 2015 -{" "}
                  <span className="w3-tag w3-teal w3-round">Current</span>
                </h6>
                <p>
                  I am an independent freelancer, helping clients by providing
                  services on web development. I am professional website
                  developer and designer, having passable knowledge on different
                  web programming languages. My main expertise is Website
                  development.
                </p>

                <p>This includes:</p>
                <ul style={{ listStyleType: "none" }}>
                  <li> # Html/Css Website theme </li>
                  <li> # Designing Web Apps Using React and node</li>
                  <li>
                    {" "}
                    # WordPress Theme,Plugin Customization & Development{" "}
                  </li>
                  <li> # WordPress Solutions </li>
                  <li> # SEO </li>
                </ul>
                <p>
                  I am responsible, understand the importance of deadlines and
                  manage them well. Trust is an important element in freelance
                  work and I work hard to build it. I am here to keep long-term
                  relationships and be successful by helping my clients succeed
                  in their web endeavors. Thank you for visiting my profile. I
                  look forward to hearing from you.
                </p>

                <a
                  style={{ paddingLeft: "35%", textDecoration: "none" }}
                  href="https://www.fiverr.com/vishnuswaroo674"
                >
                  <button
                    type="button"
                    className="btn btn-secondary btn-lg btn-block"
                  >
                    ContactMe for Work
                  </button>
                </a>
                <hr />
              </div>
            </div>
            <div className="w3-container w3-card w3-white">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
                Education
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>IIIT Vadodara ICD</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                  2020-2024
                </h6>
                <p>
                  Right now I am Pursuing my College Degree in{" "}
                  <strong>
                    Indian Institute Of Information Technology Vadodara
                  </strong>{" "}
                  International Campus DIU
                </p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Fiitjee Junior College, Vijayawada</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                  2018 - 2020
                </h6>
                <p>Intermediate</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Bhashyam High School, Guntur</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                  2016 - 2018
                </h6>
                <p>School</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="aboutfooter w3-container w3-teal w3-center w3-margin-top">
        <p>Find me on social media.</p>
        <a href="https://www.facebook.com/kanakam.vishnu.5">
          <i className="fa fa-facebook-official w3-hover-opacity"></i>
        </a>
        <a href="https://www.instagram.com/vswaroop04/">
          <i className="fa fa-instagram w3-hover-opacity"></i>
        </a>
        <a href="https://www.snapchat.com/add/kvvishnuswaroop?share_id=yZwKsFFimTc&locale=en-IN">
          <i className="fa fa-snapchat w3-hover-opacity"></i>
        </a>
        <a href="https://twitter.com/vishnus27071772">
          <i className="fa fa-twitter w3-hover-opacity"></i>
        </a>
        <a href="https://www.linkedin.com/in/vishnu-swaroop-08211321b/">
          <i className="fa fa-linkedin w3-hover-opacity"></i>
        </a>
      </footer>
    </section>
  );
}

export default Aboutme;
