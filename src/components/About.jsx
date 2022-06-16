import React from "react";

function About() {
  const d = new Date();
  let time = d.getHours();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var dayName = days[d.getDay()];

  if (time > 12) {
    var day = "Afternoon";
  }

  if (time > 18 && time < 24) {
    day = "Night";
  } else {
    day = "Morning";
  }
  return (
    <div id="about">
      <div className="About">
        <h3>
          {" "}
          <u> About Me </u>
        </h3>
        <div className="rcorners">
          <p> Good {day}, Fellow Developer &#128075; </p>
          <p>
            {" "}
            This Is Kanakam Venkata Vishnu Swaroop. I am a Sophomore at
            IIITV-ICD. I am passionate about leveraging my diverse backgrounds
            to decipher challenging problems and create delightful experiences.
            I honed my skills at web & Android development, UI Designing and SEO
            analytics.{" "}
          </p>
          <p>This Is Some Info About Me, Have a Good {dayName} &#128512; </p>
          <a href="/about">
            <button type="button" class="btn btn-outline-dark btn-lg">
              Read More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
