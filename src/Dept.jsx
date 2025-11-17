import React from "react";
import Navbar2 from "./Navbar2";

function Dept() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <section id="heading">
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
            {/* <p className='ms-3 flex-grow-1 text-center'>Waste  Management  Survey </p> */}
            <div className="flex-grow-1 text-start">
              <p className="headres mb-0">Departmental Waste Management</p>
              <p className="footres  mb-3">Analytics & Performance Dashboard</p>
            </div>
          </div>
        </section>

        <Navbar2 />

        <section id="overview">
          <div className="boxes-container">
            <div className="box">
              <p className="text">Total dustbins</p>
              <img
                src="data:image/jpeg;base64,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"
                alt="logo"
                className="logo"
              />
              <h3 className="number">18</h3>
            </div>

            <div className="box">
              <p className="text">Avg capacity/dept</p>
              <img
                src="data:image/png;base64,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"
                className="logo"
              />
              <h3 className="number">56.66 Ltr</h3>
            </div>

            <div className="box">
              <p className="text">Frequency</p>
              <img
                src="data:image/jpeg;base64,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"
                alt="logo"
                className="logo"
              />
              <h3 className="number">NaN</h3>
            </div>

            <div className="box">
              <p className="text">Major Used Bin</p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQufzYv0rJxrkexNVf15qrRxw_8tOBsf9IQ8A&s"
                alt="logo"
                className="logo"
              />
              <h3 className="number">Swing Lid Bin(50.0%)</h3>
            </div>
          </div>
        </section>

        <hr className="w-100 my-5 bg-dark" style={{ height: "3px" }} />

        <div className="row d-flex justify-content-center  ">
          <h1 className="surveyy d-flex justify-content-center mt-1">TRENDS</h1>
          <hr className="w-75" />
        </div>

        <section id="trend">
          <div className="charts-container">
            <iframe
              className="chart-box-wide"
              src="/chart_a.html"
              title="Colab Chart"
            ></iframe>

            <iframe
              className="chart-box"
              src="/chart_b.html"
              title="Colab Chart"
            ></iframe>
            <iframe
              className="chart-box"
              src="/chart_c.html"
              title="Colab Chart"
            ></iframe>
            <iframe
              className="chart-box-wide"
              src="/chart_d.html"
              title="Colab Chart"
            ></iframe>
            <iframe
              className="chart-box"
              src="/chart_e.html"
              title="Colab Chart"
            ></iframe>
            <iframe
              className="chart-box"
              src="/chart_f.html"
              title="Colab Chart"
            ></iframe>
            <iframe
              className="chart-box"
              src="/chart_g.html"
              title="Colab Chart"
            ></iframe>
          </div>
        </section>

        <hr className="w-100 my-5 bg-dark" style={{ height: "3px" }} />

        <section id="report">
          <div className="row d-flex justify-content-center mb-5">
            <h1 className="surveyy d-flex justify-content-center mt-1">
              REPORT
            </h1>
            <hr className="w-75" />
          </div>

          <div className="report-box ms-5 me-5 rounded ">
            <div className="insight col-12 col-sm-6 col-md-5 d-flex justify-content-center">
              <div className="report-inner d-flex">
                {/* Logo */}
                <img
                  className="report-logo"
                  src="data:image/png;base64,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"
                  alt="number"
                />

                {/* Text Section */}
                <div className="report-text ms-3">
                  <h3 className="report-heading">REPORT SUMMARY</h3>
                  <p className="report-desc">
                    The departmental waste survey covered 18 bins across six
                    departments, revealing varied strategies for capacity and
                    distribution. The Civil/Academic department showed the
                    highest centralization with the largest total capacity (400
                    Ltr) and average capacity (200.0 Ltr/bin), utilizing large
                    wheeled bins. In contrast, Mechanical/Computer Science uses
                    the highest count of bins (5), but their average capacity is
                    low (38.0 Ltr/bin).
                  </p>
                </div>
              </div>
            </div>

            <div className="insight col-12 col-sm-6 col-md-5 d-flex justify-content-center">
              <div className="report-inner d-flex">
                {/* Logo */}
                <img
                  className="report-logo"
                  src="data:image/png;base64,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"
                  alt="number"
                />

                {/* Text Section */}
                <div className="report-text ms-3">
                  <h3 className="report-heading">KEY INSIGHTS</h3>
                  <p className="report-desc">
                    The analysis highlights a significant Capacity Disparity in
                    waste strategy, with Civil/Academic using large, centralized
                    bins, while all other departments employ many small bins.
                    This decentralized strategy prioritizes accessible
                    collection points over centralized bulk capacity. 
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="insight col-12 col-sm-6 col-md-5 d-flex justify-content-center">
              <div className="report-inner d-flex">
                {/* Logo */}
                <img
                  className="report-logo"
                  src="data:image/png;base64,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"
                  alt="number"
                />

                {/* Text Section */}
                <div className="report-text ms-3">
                  <h3 className="report-heading">RECOMMENDATION</h3>
                  <p className="report-desc">
                    The immediate priority is to start tracking the collection frequency for all 18 bins to measure service efficiency. Authorities should investigate whether the smaller bins, especially in departments like Mechanical/CS, are frequently overflowing. Based on this data, bin sizes should be standardized to improve collection route efficiency, and larger bins should be considered for high-count departments to reduce reliance on numerous small units.  
                  </p>
                </div>
              </div>
            </div>
             <div className="insight col-12 col-sm-6 col-md-5 d-flex justify-content-center">
            <div className="report-inner d-flex">
              {/* Logo */}
              <img
                className="report-logo"
                src="data:image/png;base64,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"
                alt="number"
              />

              {/* Text Section */}
              <div className="report-text ms-3">
                <h1 className="report-heading">FOR DETAILED ANALYSIS</h1>
                 <div className="d-flex align-items-center justify-content-center">
                  <a  className="mt-4" href="https://colab.research.google.com/drive/1sWHGamBpYp6qxhcEeoUt0Q6sstdqYyy9?usp=sharing">
                  https://colab.research.google.com/drive/<br></br>1sWHGamBpYp6qxhcEeoUt0Q6sstdqYyy9?usp=sharing
                  </a>
                 </div>
              </div>
            </div>
          </div>
          </div>
        </section>
        <hr className="w-100 my-5 bg-dark" style={{ height: "3px" }} />
        <footer className="footer mt-5">
          <div className="footer-section about">
            <h3>Submitted By</h3>

            <ul>
              <li>Eakamjot Singh-22303062</li>
              <li>Gautam Sharma-22303066</li>
              <li>Gurvansh Singh-22303076</li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact</h3>
            <p>Email: gautamsharma5144@gmail.com</p>
            <p>Email: gurvanshsingh917@gmail.com</p>
            <p>Email: eakamjot10@gmail.com</p>
          </div>

          <div className="footer-section resources">
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
      </div>
    </div>
  );
}

export default Dept;
