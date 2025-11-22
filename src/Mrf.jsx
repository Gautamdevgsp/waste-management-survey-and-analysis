import React from "react";
import "./mrf.css";
import Navbar3 from "./Navbar3";

function Mrf() {
  return (
    <div>
      <section id="heading">
        <div
          className="upper d-flex align-items-center"
          style={{ height: "130px" }}
        >
          <div className="d-flex flex-column align-items-center mt-1">
            <img
              src="./New Project 26 [D4CFFD9].png"
              alt="Waste Management"
              style={{ height: "90px", flexShrink: 0 }}
            />
            <p className="fs-4">SBSSU</p>
          </div>
          {/* <p className='ms-3 flex-grow-1 text-center'>Waste  Management  Survey </p> */}
          <div className="flex-grow-1 text-start">
            <p className="headres mb-0">Material Recovery Facility</p>
            <p className="footres  mb-3">Analytics & Performance Dashboard</p>
          </div>
        </div>
      </section>

      <Navbar3 />

      <section id="what">
        <div className="detail-box mt-5 rounded">
          <div className="mref">
            <div className="mref-image">
              <img
                src="https://www.resourcerecoverygroup.com.au/Profiles/rrg/Assets/ClientData/Images/Page-content/materials-recovery-facility.jpg"
                 alt="MRF Tyre"
              ></img>
            </div>

            <div className="mref-text">
              <h1>♻️ What Is an MRF Plant?</h1>
              <p>
                An MRF (Materials Recovery Facility) is a specialized facility
                where mixed recyclable waste is received, sorted, processed, and
                prepared for sale to recycling manufacturers. Think of it as the
                “brains” of the recycling system—where materials are separated
                into clean, marketable streams. MRFs serve two major purposes:
                <br></br>
                1. Recover usable recyclable materials (paper, cardboard,
                plastics, metals, glass). <br />
                2. Reduce the amount of waste sent to landfill or incineration.
              </p>
            </div>
          </div>

          </div>
      </section>

      <hr className="w-100 my-5 bg-dark" style={{ height: "2px" }} />

      <section id="types">
        <div className="row d-flex justify-content-center pt-1">
          <h1 className="team d-flex justify-content-center">TYPES OF MRF</h1>
          <hr className="w-75" />
        </div>

        <div className="container text-center mt-5">
          <div className="row justify-content-center g-3">
            {/* First Row - 3 Boxes */}
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <div className="type-container rounded text-center p-4">
                <h4>
                  Clean MRF<br></br> (Source-Separated MRF)
                </h4>
                <div className="row d-flex justify-content-center ">
                  <hr className="w-90" />
                </div>
                <p>
                  Accepts pre-sorted recyclables (e.g., separate bins for paper,
                  plastic, etc.).<br></br>
                  Pros: <br></br>• Higher material quality<br></br>• Less
                  contamination<br></br>• Lower sorting cost<br></br>
                  Cons:<br></br>• Requires public participation/education{" "}
                  <br></br>• More complex collection system
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <div className="type-container rounded text-center p-4">
                <h4>
                  Dirty MRF <br></br>(Mixed-Waste MRF)
                </h4>
                <div className="row d-flex justify-content-center">
                  <hr className="w-90" />
                </div>
                <p>
                  Accepts unsorted municipal waste (trash + recyclables
                  together).<br></br>
                  Pros: <br></br>• Convenient for residents <br></br>• High
                  volume throughput <br></br>
                  Cons: <br></br>• High contamination <br></br>• Lower-value
                  recyclables <br></br>• Bigger, costlier equipment<br></br>•
                  Organic waste complicates sorting
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <div className="type-container rounded text-center p-4">
                <h4> Single-Stream MRF</h4>
                <div className="row d-flex justify-content-center ">
                  <hr className="w-90" />
                </div>
                <p>
                  Residents put all recyclables in one bin; sorting happens at
                  the MRF. <br></br>
                  <br></br>
                  Pros:<br></br>• Easier for households <br></br>• Higher
                  recycling participation <br></br>
                  <br></br>
                  Cons: <br></br>• Contamination affects quality <br></br>• More
                  sophisticated sorting tech needed
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center g-3 mt-5">
            {/* Second Row - 2 Boxes */}
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-5 mb-5">
              <div className="type-container rounded text-center p-4">
                <h4> Dual-Stream MRF</h4>
                <div className="row d-flex justify-content-center ">
                  <hr className="w-90" />
                </div>
                <p>
                  Two streams: fiber (paper/cardboard) and containers (glass,
                  plastic, metal). <br></br>
                  <br></br>
                  Pros: <br></br>• Higher-quality fibers <br></br>• Less
                  contamination <br></br>
                  <br></br>
                  Cons:<br></br>• Slightly more work for residents
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-5 mb-5">
              <div className="type-container rounded  p-4">
                <h4> Advanced / Automated / Robotic MRF</h4>
                <div className="row d-flex justify-content-center ">
                  <hr className="w-90" />
                </div>
                <p>
                  Incorporates: <br></br>• AI-powered robots <br></br>• Multiple
                  optical sorters <br></br>• Data sensors<br></br>• Advanced
                  quality control algorithms<br></br>
                  Pros: <br></br>• High purity<bR></bR>• Very efficient{" "}
                  <br></br>• Labor savings <br></br>
                  Cons:<br></br>• High capital cost
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="w-100 my-5 bg-dark" style={{ height: "2px" }} />

      <section id="diff">
        <div className="diff-box ms-5 me-5 mt-5 rounded">
          <h1> Difference Between Dirty MRF and Clean MRF</h1>
          <div className="container mt-5">
            <div className="row justify-content-center g-4">
              <div className="col-12 col-sm-6 col-md-5 d-flex justify-content-center">
                <div className="clean-box rounded me-5">
                  <h2 className="text-center">
                    Clean MRF<br></br> (Dry-waste-only MRF)
                  </h2>
                  <div className="row d-flex justify-content-center ">
                    <hr className="w-75" />
                  </div>
                  <p>
                    If households or businesses pre-separate wet (organic) and
                    dry (recyclable) waste, the MRF gets much cleaner feedstock:
                    <br></br>
                    <br></br>✔ Higher-quality recyclables <br></br>✔ Lower
                    contamination <br></br>✔ Lower processing cost<br></br>✔
                    Higher revenue from material sales <br></br>✔ Lower
                    environmental impact<br></br>
                    <br></br>
                    This is why most modern recycling systems worldwide require
                    source segregation.
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-1 d-flex justify-content-center align-items-center">
                <h2 className="fw-bold text-success">VS</h2>
              </div>

              <div className="col-12 col-sm-6 col-md-5 d-flex justify-content-center">
                <div className="clean-box rounded me-5">
                  <h2 className="text-center">
                    Dirty MRF <br></br> (wet + dry)-waste <br></br>
                  </h2>
                  <div className="row d-flex justify-content-center ">
                    <hr className="w-75" />
                  </div>
                  <p>
                    A Dirty MRF receives unsegregated municipal solid waste
                    (MSW):<br></br>
                    MRF can handle mixed waste (wet + dry), but only if it is
                    designed as a Dirty MRF. However, it is not ideal. <br></br>
                    <br></br>✔ Food waste (wet/organic waste) <br></br>✔ Dry
                    recyclables (paper, plastics, metals)<br></br>✔ High
                    contamination <br></br>✔ Much higher cost<br></br>✔ Lower
                    recovery rates <br></br>
                    <br></br>
                    They can technically separate recyclables from mixed (wet +
                    dry) waste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="w-100 my-5 bg-dark" style={{ height: "2px" }} />

      <section id="table">
        <div class="capacity-table-container ms-5 me-5 rounded">
          <h1>Capacity Classification Summary Table</h1>
          <div className="row d-flex justify-content-center mt-2 mb-5">
            <hr className="w-75" />
          </div>
          <div className="d-flex justify-content-center">
            <table class="capacity-table">
              <thead>
                <tr>
                  <th>MRF Type</th>
                  <th>Capacity (TPD)</th>
                  <th>Capacity (TPH)</th>
                  <th>Typical Use Case</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Small / Mini MRF</td>
                  <td>1–50</td>
                  <td>0.5–3</td>
                  <td>Rural areas, small towns, institutions</td>
                </tr>

                <tr>
                  <td>Medium MRF</td>
                  <td>50–300</td>
                  <td>3–10</td>
                  <td>Municipal plants, regional hubs</td>
                </tr>

                <tr>
                  <td>Large MRF</td>
                  <td>300–1,000</td>
                  <td>10–35</td>
                  <td>Big cities, high-volume recycling</td>
                </tr>

                <tr>
                  <td>Mega / Regional MRF</td>
                  <td>1,000–5,000</td>
                  <td>35–100</td>
                  <td>Mega cities, multi-municipality centers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

  

      <hr className="w-100 my-5 bg-dark" style={{ height: "2px" }} />

<section id="report">
<div class="capacity-table-container ms-5 me-5 rounded">
<div className="pdf-wrapper rounded pt-5 pb-5">
  <iframe
    src="/MRF.pdf"
    title="Embedded PDF"
    className="pdf-frame"
  ></iframe>
</div>
</div>
</section>


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

    </div>
  );
}

export default Mrf;
