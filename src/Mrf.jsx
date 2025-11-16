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
            <p className="headres mb-0">Residential Waste Management</p>
            <p className="footres  mb-3">Analytics & Performance Dashboard</p>
          </div>
        </div>
      </section>

      <Navbar3 />

      <section id="what">
        <div className="detail-box mt-5 ms-5 me-5 rounded">
          <div className="mrf1">
            <div className="mrf1-image">
              <img
                src="https://www.re-group.com/wp-content/uploads/resized/2021/11/australias-newest-mrf-is-up-and-running-1200x0-c-default.jpg"
                alt="MRF Tyre"
              ></img>
            </div>

            <div className="mrf1-text">
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

          <div className="row d-flex justify-content-center  ">
            <hr className="w-75" />
          </div>

          <h1 className="how mt-3"> 🏭 How an MRF Works (Step by Step)</h1>

          <div className="mrf mt-5 mb-3">
            <div className="mrf-text">
              <h1 className="fs-2">
                1. Incoming Waste Delivery (“Tipping Floor”)
              </h1>
              <p>
                Data-Driven Waste Management System This project proposes the
                implementation of a sustainable, data-driven waste management
                system for Sardar Beant Singh State University, Gurdaspur. The
                current waste generation on campus, with its complex mix from
                diverse zones including hostels, canteens, and academic
                departments, poses a significant challenge.
              </p>
            </div>
            <div className="mrf-image">
              <img
                className="rounded"
                src="https://www.rubicon.com/wp-content/uploads/2021/06/materials-recovery-facility.jpg"
                alt="MRF Tyre"
              ></img>
            </div>
          </div>

          <div className="row d-flex justify-content-center  ">
            <hr className="w-50" />
          </div>

          <div className="mrf1 mt-1 mb-2">
            <div className="mrf1-image">
              <img
                src="https://www.re-group.com/wp-content/uploads/resized/2021/11/australias-newest-mrf-is-up-and-running-1200x0-c-default.jpg"
                alt="MRF Tyre"
              ></img>
            </div>

            <div className="mrf1-text">
              <h1 className="fs-2"> 2. Pre-Sorting (Manual or Mechanical) </h1>
              <p>
                Workers or machines remove: <br></br>• Hazardous items<br></br>•
                Non-recyclables <br></br>
                •Large tanglers (hoses, wires, textiles) <br></br>• Oversized
                cardboard <br></br>
                This protects the machinery.
              </p>
            </div>
          </div>

          <div className="row d-flex justify-content-center  ">
            <hr className="w-50" />
          </div>

          <div className="mrf mt-1 mb-2">
            <div className="mrf-text">
              <h1 className="fs-2">3. Primary Screening</h1>
              <p>
                Large rotating trommel screens or disc screens separate
                materials by size: <br></br>• Large flat items (cardboard){" "}
                <br></br>• Small pieces (broken glass, grit)
              </p>
            </div>
            <div className="mrf-image">
              <img
                className="rounded"
                src="https://www.rubicon.com/wp-content/uploads/2021/06/materials-recovery-facility.jpg"
                alt="MRF Tyre"
              ></img>
            </div>
          </div>

          <div className="row d-flex justify-content-center  ">
            <hr className="w-50" />
          </div>

          <div className="mrf1 mt-1 mb-2">
            <div className="mrf1-image">
              <img
                src="https://www.re-group.com/wp-content/uploads/resized/2021/11/australias-newest-mrf-is-up-and-running-1200x0-c-default.jpg"
                alt="MRF Tyre"
              ></img>
            </div>

            <div className="mrf1-text">
              <h1 className="fs-2">4. Material Separation </h1>
              <p>
                Different mechanical systems separate materials:<br></br> * Air
                classifiers: Separate light materials (paper, film plastics)
                from heavy ones (glass, metals). <br></br>* Magnetic separators:
                Pull out ferrous metals (steel cans). <br></br>* Eddy current
                separators: Repel non-ferrous metals (aluminum cans). <br></br>*
                Optical sorters: Use lasers/cameras to identify plastics (PET,
                HDPE, PP, etc.) and squirt air to separate them. <br></br>*
                Glass cleanup systems: Crush, screen, and separate glass into
                clean cullet.
              </p>
            </div>
          </div>

          <div className="row d-flex justify-content-center  ">
            <hr className="w-50" />
          </div>

          <div className="mrf mt-1 mb-2">
            <div className="mrf-text">
              <h1 className="fs-2">5. Quality Control Stations</h1>
              <p>
                Humans or robots inspect sorted streams to remove contamination.
              </p>
            </div>
            <div className="mrf-image">
              <img
                className="rounded"
                src="https://www.rubicon.com/wp-content/uploads/2021/06/materials-recovery-facility.jpg"
                alt="MRF Tyre"
              ></img>
            </div>
          </div>

          <div className="row d-flex justify-content-center  ">
            <hr className="w-50" />
          </div>

          <div className="mrf1 mt-1 mb-2">
            <div className="mrf1-image">
              <img
                src="https://www.re-group.com/wp-content/uploads/resized/2021/11/australias-newest-mrf-is-up-and-running-1200x0-c-default.jpg"
                alt="MRF Tyre"
              ></img>
            </div>

            <div className="mrf1-text">
              <h1 className="fs-2">6. Baling and Storage </h1>
              <p>
                Clean, sorted materials are compacted into bales: <br></br>•
                OCC(cardboard)<br></br>• Mixed paper<br></br>• PET bottles{" "}
                <br></br>• HDPE containers <br></br>• Aluminum <br></br>• Steel{" "}
                <br></br>• Glass These bales are sold to recycling mills.
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

      <section id="flowchart">
        <div className="flowchart-box mt-5 ms-5 me-5 rounded">
          <h1 className="py-3"> MRF FLOWCHART</h1>
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
    </div>
  );
}

export default Mrf;
