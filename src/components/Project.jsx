import React from "react";

// <a href="https://ibb.co/ZmHg93J"><img src="https://i.ibb.co/ZmHg93J/digicerti.png" alt="digicerti" border="0"></a>
//  <a href="https://ibb.co/4Y0K0bs"><img src="https://i.ibb.co/4Y0K0bs/Gaivi.png" alt="Gaivi" border="0"></a>
//   <a href="https://ibb.co/ZGvTRrt"><img src="https://i.ibb.co/ZGvTRrt/hackc.png" alt="hackc" border="0"></a>
//    <a href="https://ibb.co/P9Wptnr"><img src="https://i.ibb.co/P9Wptnr/horizon.png" alt="horizon" border="0"></a>
//    <a href="https://ibb.co/DDCWXz3"><img src="https://i.ibb.co/DDCWXz3/India3.png" alt="India3" border="0"></a>

function Project(props) {
  return (
    <div className="Project">
      <h3>
        {" "}
        <u> My Projects </u>
      </h3>
      <div className="rcornersforProjectoutside">
        {/* {1} */}
        <div className="rcornersforProject">
          <div class="worksContainer sectionContainer">
            <article class="workBox">
              <div class="workImageContainer">
                <img
                  src="https://i.ibb.co/ZmHg93J/digicerti.png"
                  alt="digicerti"
                  border="0"
                />
              </div>
              <div class="workDescribeContainer">
                <h3> Digicerti </h3>
                <h4>
                  Technologies Used: <span class="techStack">React</span>,
                  <span class="techStack">Solidity</span>,
                  <span class="techStack">Express</span>,
                  <span class="techStack">MongoDB</span>,
                </h4>
                <ul>
                  <li>A Block chain based Certificate Verification Platform</li>
                  <li>
                    Issuer and User are the two entities where issuer can issue
                    certificates And user can check and verify the certificates
                  </li>
                  <li>
                    Entirely Built with Solidity, React, Web3Storage, and Ipfs
                  </li>
                </ul>
                <div class="workLinks">
                  <a
                    href="http://vswaroop04.centralindia.cloudapp.azure.com:3000/"
                    class="liveLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/Vswaroop04/Digicerti"
                    class="repoLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
        {/* {2} */}
        <div className="rcornersforProject">
          <div class="worksContainer sectionContainer">
            <article class="workBox">
              <div class="workImageContainer">
                <img
                  src="https://i.ibb.co/DDCWXz3/India3.png"
                  alt="India3"
                  border="0"
                />
              </div>
              <div class="workDescribeContainer">
                <h3>India 3</h3>
                <h4>
                  Technologies Used: <span class="techStack">Solidity</span>,{" "}
                  <span class="techStack">React</span>,{" "}
                  <span class="techStack">Polybase</span>
                  <span class="techStack">The Graph</span>
                  <span class="techStack">Push Protocol</span>
                </h4>
                <ul>
                  <li>
                    India3 is a decentralized platform where we can verify the
                    demographic data of a person.{" "}
                  </li>
                  <li>
                    This system uses decentralized technology such as blockchain
                    to ensure the accuracy and validity of demographic data,
                    such as name, age, gender, and location.
                  </li>
                  <li>
                    Registration Manager (Government Agent) adds the data here
                    whenever you login according to address it will redirect to
                    Registration manager dashboard if the id belongs to
                    Registration Manager
                  </li>
                  <li>Govt have authority to add registration Managers</li>
                </ul>
                <div class="workLinks">
                  <a
                    href="http://india3-jordav.centralindia.cloudapp.azure.com:3001/"
                    class="liveLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/Vswaroop04/India3"
                    class="repoLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* {3} */}
        <div className="rcornersforProject">
          <div class="worksContainer sectionContainer">
            <article class="workBox">
              <div class="workImageContainer">
                <img
                  src="https://i.ibb.co/P9Wptnr/horizon.png"
                  alt="horizon"
                  border="0"
                />
              </div>
              <div class="workDescribeContainer">
                <h3>Horizon Tech Fest</h3>
                <h4>
                  Technologies Used: <span class="techStack">React Js</span>,{" "}
                  <span class="techStack">Node Js</span>,{" "}
                  <span class="techStack">Express</span>
                  <span class="techStack">MongoDB</span>
                </h4>
                <ul>
                  <li>
                    Technical fest webapplication for Indian Institute of
                    Information Technology Vadodara ICD
                  </li>

                  <li>
                    People can See Details regarding fest, register for the
                    events in the fest and can see them in their respective
                    dashboard's
                  </li>
                  <li>
                    I had developed Backend , SingleEvent, Timeline Pages ,
                    Integrated Backend with Frontend
                  </li>
                </ul>
                <div class="workLinks">
                  <a
                    href="https://horizon-iiitvicd.in/"
                    class="liveLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/Vswaroop04/HORIZON-TechFest-Website-BACKEND"
                    class="repoLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* {4} */}

        <div className="rcornersforProject">
          <div class="worksContainer sectionContainer">
            <article class="workBox">
              <div class="workImageContainer">
                <img
                  src="https://i.ibb.co/ZGvTRrt/hackc.png"
                  alt="hackc"
                  border="0"
                />
              </div>
              <div class="workDescribeContainer">
                <h3>Hack C</h3>
                <h4>
                  Technologies Used: <span class="techStack">React Js</span>,{" "}
                  <span class="techStack">Solidity</span>,{" "}
                  <span class="techStack"> Ethers.Js</span>
                  <span class="techStack"> IPFS</span>
                </h4>
                <ul>
                  <li>
                    Hackc enables to check the vulnerabilities present in any
                    smart contract
                  </li>
                  <li>
                    A company can submit its smart contract with some bounty as
                    a reward for solving it and there are hackers who will try
                    to get ownership of that smart contract if they succeed they
                    will recieve bounty
                  </li>
                  <li>
                    Entirely Built with Solidity, React, Web3Storage, and Ipfs{" "}
                  </li>
                </ul>
                <div class="workLinks">
                  <a
                    href="http://hack-the-c-jordav.uksouth.cloudapp.azure.com:3000/"
                    class="liveLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/Vswaroop04/HACKtheC"
                    class="repoLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* {5} */}

        <div className="rcornersforProject">
          <div class="worksContainer sectionContainer">
            <article class="workBox">
              <div class="workImageContainer">
                <img
                  src="https://i.ibb.co/4Y0K0bs/Gaivi.png"
                  alt="Gaivi"
                  border="0"
                />
              </div>
              <div class="workDescribeContainer">
                <h3>Gaivi - Grocery Application</h3>
                <h4>
                  Technologies Used: <span class="techStack">EJS</span>
                  <span class="techStack">Node Js</span>,{" "}
                  <span class="techStack">REST API</span>,{" "}
                  <span class="techStack">Express</span>
                </h4>
                <ul>
                  <li>
                    A grocery application where we can buy all types of grocery
                    items
                  </li>
                  <li>User Can Login, Add Grocery to cart and Place Order</li>
                  <li>This works like a clone of big basket</li>
                </ul>
                <div class="workLinks">
                  <a
                    href="http://vswaroop04.centralindia.cloudapp.azure.com:4000/"
                    class="liveLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/Vswaroop04/grocery-system"
                    class="repoLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* {6} */}

        <div className="rcornersforProject">
          <div class="worksContainer sectionContainer">
            <article class="workBox">
              <div class="workImageContainer">
                <img
                  src="https://i.ibb.co/V9y2pmJ/Capture.png"
                  alt="Capture"
                  border="0"
                />{" "}
              </div>
              <div class="workDescribeContainer">
                <h3>Chat Application</h3>
                <h4>
                  Technologies Used: <span class="techStack">Node JS</span>,{" "}
                  <span class="techStack">Express</span>,{" "}
                  <span class="techStack">Socket</span>
                </h4>
                <ul>
                  <li>Completely built with Sockets Requests </li>
                  <li>A specific Room Will Be Created For Chatting</li>
                  <li>
                    Real-time Messaging and Users can Send Their Location too
                  </li>
                </ul>
                <div class="workLinks">
                  <a
                    href="http://vswaroop04.centralindia.cloudapp.azure.com:6000/"
                    class="liveLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/Vswaroop04/Chat-Application-Using-NodeJs"
                    class="repoLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* 7 */}
        <div className="rcornersforProject">
          <div class="worksContainer sectionContainer">
            <article class="workBox">
              <div class="workImageContainer">
                <img
                  src="https://i.ibb.co/fCSdJK3/Capture.png"
                  alt="Capture"
                  border="0"
                />{" "}
              </div>
              <div class="workDescribeContainer">
                <h3>VINKS - Movie Ticket Booking System</h3>
                <h4>
                  Technologies Used: <span class="techStack">NodeJS</span>,{" "}
                  <span class="techStack">MYSQL</span>,{" "}
                  <span class="techStack">EJS</span>
                </h4>
                <ul>
                  <li>This Was Built using NodeJS Express Routes</li>
                  <li>The Movie Details Are Fetched From MySql Db</li>
                  <li>
                    Real-time Data Passes through MYsqlDB -- NodeJS -- Ejs
                    Template
                  </li>
                </ul>
                <div class="workLinks">
                  <a
                    href="https://github.com/Vswaroop04/Movie-Booking-System"
                    class="repoLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
