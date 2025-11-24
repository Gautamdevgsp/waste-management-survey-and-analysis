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

          <div className="row d-flex justify-content-center mt-5 ">
            <hr className="w-75" />
          </div>

          <div className="mref">
            <div className="mref-text">
              <h1>♻️ What Is a Composting System?</h1>
              <p>
                A composting system is a facility or setup where biodegradable
                organic waste—such as food scraps, garden leaves, and other
                plant-based materials—is collected, processed, and converted
                into nutrient-rich compost. Think of it as the “engine” of
                organic waste management—turning waste into a valuable resource
                for soil and plants. Composting systems serve two major
                purposes:<br></br>
                1. Convert organic waste into usable compost that can be applied
                to gardens, landscaping, or farmland.<br></br>
                2. Reduce the volume of organic waste sent to landfills, thereby
                lowering greenhouse gas emissions and environmental impact.
              </p>
            </div>

            <div className="mref-image">
              <img
                src="https://live.staticflickr.com/3938/15318803078_a027c2d84e_b.jpg"
                alt="MRF Tyre"
              ></img>
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

          <div className="row d-flex justify-content-center mb-3 ">
            <hr className="w-75" />
          </div>

          <div className="d-flex justify-content-center">
            <table class="capacity-table">
              <thead>
                <tr>
                  <th>Composting System Type</th>
                  <th>Capacity Range (TPD)</th>
                  <th>Suitable Scale</th>
                  <th>Typical Use Case</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Very Small-Scale Composting</td>
                  <td>0.05-0.5 TPD</td>
                  <td>
                    Household, micro-communities, hostels, small institutions
                  </td>
                  <td>Home composters, small pit composting, community bins</td>
                </tr>

                <tr>
                  <td>Small-Scale Composting</td>
                  <td>0.5–5 TPD</td>
                  <td>
                    Institutional campuses, residential colonies, small towns
                  </td>
                  <td>
                    Aerobic composting pits, windrows, small in-vessel units
                  </td>
                </tr>

                <tr>
                  <td>Medium-Scale Composting</td>
                  <td>5–25 TPD</td>
                  <td>
                    Municipal wards, mid-sized towns, decentralised centers
                  </td>
                  <td>Windrow composting, semi-mechanised plants</td>
                </tr>

                <tr>
                  <td>Large-Scale Composting</td>
                  <td>25 – 100 TPD</td>
                  <td>City-level plants, municipal processing sites</td>
                  <td>
                    Mechanised windrows, aerated static piles, IVC systems
                  </td>
                </tr>

                <tr>
                  <td>Mega / Centralized Composting Plants</td>
                  <td>100 – 500+ TPD </td>
                  <td>Large cities, multi-zone municipal systems</td>
                  <td>
                    Fully mechanised windrows, automated in-vessel composting
                    plants
                  </td>
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
              src="/Proposal_Report.pdf"
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
