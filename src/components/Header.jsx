import React from "react";

function Header() {
  const url = "https://i.ibb.co/TvNd5b9/Capture.png";


  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-light navbar-custom"
    >
      <a className="navbar-brand" href="#Home">
        <img src={url} alt="VishnuSwaroop" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse custom" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#home">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>{" "}
      <div className="line">
        <a
          href="https://github.com/Vswaroop04"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i class="fa-brands fa-github"></i>{" "}
        </a>
        <a
          href="https://www.instagram.com/vswaroop04/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com/vishnus27071772"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i class="fa-brands fa-twitter"></i>
        </a>

        <div class="vertical"></div>
      </div>
      <div className="line-right">
        <a
          href="mailto:vswaroop04@gmail.com?subject = Feedback&body = Message"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-envelope"></i>
        </a>
        <div class="vertical-right"></div>
      </div>
      <a id="myBtn" href="#navbar">
        {" "}
        <i class="fa-solid fa-circle-up"></i>
      </a>
    </nav>
  );
}

export default Header;
