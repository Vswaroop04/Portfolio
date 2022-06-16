import React from "react";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer>
      <ul className="list-inline text-center">
        <li className="list-inline-item">
          <a href="https://twitter.com/vishnus27071772" target="blank">
            <span className="fa-stack fa-lg">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.facebook.com/kanakam.vishnu.5" target="blank">
            <span className="fa-stack fa-lg">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.instagram.com/vswaroop04/" target="blank">
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
