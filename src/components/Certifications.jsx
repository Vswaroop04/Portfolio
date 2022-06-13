import React from "react";

function Certificates() {
  return (
    <div>
      <div className="certificates">
        <h3>
          {" "}
          <u> My Certificates </u>{" "}
        </h3>
        <div className="rcornersforcertificates">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item">
                <img
                  src="https://i.ibb.co/hKVrF7r/12555f-dcrcrhc.jpg"
                  alt="12555f-dcrcrhc"
                  border="0"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://i.ibb.co/5FNzDWz/HashCode.png"
                  alt="HashCode"
                  border="0"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://i.ibb.co/nrkjL4Q/Vishnu-Swaroop.png"
                  alt="Vishnu-Swaroop"
                  border="0"
                />
              </div>
              <div class="carousel-item  active">
                <img
                  src="https://i.ibb.co/ZGQF2h7/Vishnu-Kanakam.jpg"
                  alt="Vishnu-Kanakam"
                  border="0"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Certificates;
