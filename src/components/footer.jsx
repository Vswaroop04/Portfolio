import React from "react";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer>
      <ul className="list-inline text-center">
        <li className="list-inline-item">
          <a href="https://twitter.com/RahulSa03005228" target="blank">
            <span className="fa-stack fa-lg">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://www.facebook.com/profile.php?id=100009484953326"
            target="blank"
          >
            <span className="fa-stack fa-lg">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.instagram.com/kanakam_rahul_sai/" target="blank">
            <span className="fa-stack fa-lg">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
      </ul>
      <p>&copy; Vishnu Swaroop {year}</p>
    </footer>
  );
}

export default Footer;
