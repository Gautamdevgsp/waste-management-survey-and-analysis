import React from "react";
import "./App.css"; // CSS file
import Team from "./Team";
import { Link, useNavigate } from "react-router-dom";

function Survey() {
  // You can attach click handlers if you want navigation later
  const navigate = useNavigate();

  const handleClickHos = () => {
    // your other logic (if any)
    navigate("/hostel"); // 👈 navigates to /another-page
    window.scrollTo(0, 0);
  };

  const handleClickDept = () => {
    navigate("/dept");
    window.scrollTo(0, 0);
  };
  const handleClickCampus = () => {
    navigate("/campus");
    window.scrollTo(0, 0);
  };
  const handleClickRes = () => {
    navigate("/res");
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="big-box me-5 ms-5 rounded">
        <div className="row d-flex justify-content-center  ">
          <h1 className="surveyy d-flex justify-content-center">SURVEY</h1>
          <hr className="w-75" />
        </div>

        <div className="container mt-5">
          <div className="row justify-content-center g-4">
            <div className="col-12 col-sm-6 col-md-5 d-flex justify-content-center">
              <div
                className="survey-box bg-img-residential  d-flex align-items-end justify-content-center rounded"
                onClick={() => handleClickHos("Hostel")}
              >
                <div className="bottom-text bg-white text-center py-2 w-100 ">
                  RESIDENTIAL
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-5 d-flex justify-content-center">
              <div
                className="survey-box bg-img-department  d-flex align-items-end justify-content-center rounded"
                onClick={() => handleClickDept("Residential")}
              >
                <div className="bottom-text bg-white text-center py-2 w-100 ">
                  DEPARTMENT
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-5 d-flex justify-content-center">
              <div
                className="survey-box bg-img-campus  d-flex align-items-end justify-content-center rounded mt-5 mb-4"
                onClick={() => handleClickCampus("Campus")}
              >
                <div className="bottom-text bg-white text-center py-2 w-100 ">
                  CAMPUS
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-5 d-flex justify-content-center">
              <div
                className="survey-box bg-img-hostel  d-flex align-items-end justify-content-center rounded mt-5 mb-4"
                onClick={() => handleClickRes("Department")}
              >
                <div className="bottom-text bg-white text-center py-2 w-100 ">
                  HOSTEL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-100 my-5 bg-dark" style={{ height: "2px" }} />

      <div class="vaddi ms-5 me-5 rounded">
        <div class="row d-flex justify-content-center">
          <h1 class="surveyy d-flex justify-content-center">
            MRF PROPOSAL SUMMARY
          </h1>
          <hr class="w-75" />
        </div>

        <div class="row mrf align-items-center">
          <div class="col-lg-6 col-md-12 d-flex mrf-text">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9494/9494567.png"
              alt="number"
            ></img>
            <p>
              Our proposal for establishing a Material Recovery Facility (MRF)
              is built on a comprehensive analysis of our university’s current
              waste ecosystem, backed by detailed surveys conducted across the
              campus. By studying waste generation patterns, student and staff
              awareness levels, and the inefficiencies in existing disposal
              methods, we identified strong opportunities for improvement. This
              project transforms raw data into meaningful insights, enabling us
              to design a system that is not only environmentally responsible
              but also perfectly aligned with the needs and behaviour of our
              campus community.
            </p>
          </div>

          <div class="col-lg-6 col-md-12 mrf-image">
            <img
              class="rounded"
              src="https://www.rubicon.com/wp-content/uploads/2021/06/materials-recovery-facility.jpg"
              alt="MRF Image"
            ></img>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <hr class="w-75" />
        </div>

        <div class="row mrf1 align-items-center">
          <div class="col-lg-6 col-md-12 mrf1-image">
            <img
              src="https://www.re-group.com/wp-content/uploads/resized/2021/11/australias-newest-mrf-is-up-and-running-1200x0-c-default.jpg"
              alt="MRF Image"
            ></img>
          </div>

          <div class="col-lg-6 col-md-12 d-flex mrf1-text">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9494/9494600.png"
              alt="number"
            ></img>
            <p>
              With the introduction of a dedicated MRF, our university can take
              a major step toward building a cleaner, greener, and more
              sustainable environment. The proposed system focuses on efficient
              segregation, recovery, and recycling of materials, reducing the
              strain on landfills and setting a precedent for responsible waste
              management. Rooted in innovation and guided by sustainability, our
              model aims to convert waste into valuable resources while
              inspiring students, faculty, and future institutions to adopt
              long-term eco-friendly practices.
            </p>
          </div>
        </div>

        <div class="d-flex justify-content-center align-items-center">
          <button class="mrf-button mt-4 mb-4 p-3"
              onClick={() => {
              navigate("/mrf");
              window.scrollTo(0, 0);
            }}>
            Click here for detailed Summary
          </button>
        </div>
      </div>
    </>
  );
}

export default Survey;
