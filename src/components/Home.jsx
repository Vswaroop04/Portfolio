import React from "react";

function Home() {
  const imgurl =
    "https://i.ibb.co/093svHg/e46b6154-056a-491f-b330-a6d1bc542541-removebg-preview.png";
  return (
    <div className="home" id="home">
      <div class="intro col-lg-6">
        <p>HI THERE <span> &#128075; </span> I'M</p>
        <h1> Vishnu </h1>
        <h1> Swaroop </h1>
        <h3>
          A Developer{" "}
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/man-technologist_1f468-200d-1f4bb.png"
            alt=""
          />{" "}
        </h3>
        <div className="button">
          <a href="https://www.linkedin.com/in/vishnu-swaroop-08211321b/">
            <button type="button" class="btn btn-outline-dark btn-lg">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i> Connect
              With Me
            </button>
          </a>
        </div>
        <div className="title">
          <img src={imgurl} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
