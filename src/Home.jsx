import React from "react";
import Slide from "./Slide";
import Survey from "./Survey";
import Team from "./Team";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      {/* <section id="heading">
        <div
          className="upper d-flex align-items-center"
          style={{ height: "130px" }}
        >
          <div className="d-flex flex-column align-items-center mt-3">
            <img
              src="./New Project 26 [D4CFFD9].png"
              alt="Waste Management"
              style={{ height: "90px", flexShrink: 0 }}
            />
            <p className="fs-4">SBSSU</p>
          </div>
      
          <div className="ms-2 flex-grow-1 text-center">
            <p className="head mb-0">Waste Management Survey</p>
            <p className="foot mb-3">
              Analyzing and Improving Campus Sustainability
            </p>
          </div>
        </div>
      </section> */}

      <section id="heading">
        <div
          className="upper d-flex align-items-center justify-content-between flex-wrap"
          style={{ height: "130px" }}
        >
          <div className="d-flex flex-column align-items-center mt-1 mb-3 mb-md-0">
            <img
              src="./New Project 26 [D4CFFD9].png"
              alt="Waste Management"
              style={{ height: "90px", flexShrink: 0 }}
            />
            <p className="fs-4">SBSSU</p>
          </div>

          <div className="ms-2 flex-grow-1 text-center mt-1  mb-2 mt-md-0">
            <p className="head mb-0">Waste Management Survey</p>
            <p className="foot mb-3">
              Analyzing and Improving Campus Sustainability
            </p>
          </div>
        </div>
      </section>

      <Navbar />

      <section id="home">
        <div className="d-flex min-vh-50 justify-content-center align-items-center ">
          <div className="bg-white rounded mt-5">
            {" "}
            <Slide />
          </div>
        </div>
      </section>

      <div className="row d-flex justify-content-center mt-5 mb-5 ">
        <hr className="w-75" />
      </div>

      <div className="map-box rounded">
        <div className="map-text">
          <h1>Sardar Beant Singh State University, Gurdaspur</h1>
          <p>
            Sardar Beant Singh State University, formerly known as Beant College
            of Engineering and Technology, is a university located in Gurdaspur,
            Punjab, India. SBSSU imparts education in various Science and
            Engineering disciplines.
            <br />
            Address: National Highway 15, Gurdaspur Pathankot Road, Bariar,
            Gurdaspur, Punjab 143530
          </p>
        </div>

        <div className="map-container">
          <iframe className="map" src="/map.html" title="map"></iframe>
        </div>
      </div>

      <hr className="w-100 my-5 bg-dark" style={{ height: "3px" }} />

      <section id="survey">
        <div className="survey-text">
          <Survey />
        </div>
      </section>

      <hr className="w-100 my-5 bg-dark" style={{ height: "3px" }} />

      <section id="team">
        <div>
          <Team />
        </div>
      </section>

      <section id="contact">
        <footer className="footer mt-5">
          <div className="footer-section about">
            <h3>Submitted By</h3>
            <ul>
              <li>Eakamjot Singh-22303062</li>
              <li>Gautam Sharma-22303066</li>
              <li>Gurvansh Singh-22303076</li>
            </ul>
          </div>

          <div className="footer-section contact ">
            <h3>Contact</h3>
            <p>Email: eakamjot10@gmail.com</p>
            <p>Email: gautamsharma5144@gmail.com</p>
            <p>Email: gurvanshsingh917@gmail.com</p>
          </div>

          <div className="footer-section resources ms-5">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="https://github.com/Gautamdevgsp/waste-management-survey-and-analysis">
                  GitHub Repo
                </a>
              </li>
              <li>
                <a href="https://react.dev/">Documentation</a>
              </li>
              <li>
                <a href="https://colab.research.google.com/drive/1AdGL85msPQCV2CLOk256VVScwLtEhTiY?usp=sharing">
                  Colab
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Home;
