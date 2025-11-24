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
         PROPOSAL SUMMARY
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
              We started by asking the right questions. How much waste does our
              campus produce? What types are most common? How aware are students
              and staff about disposal practices? Our surveys and observations
              revealed a key insight: while organic waste is plentiful,
              recyclable dry waste is too low to support a full-scale Material
              Recovery Facility. These findings form the foundation of a waste
              solution that truly fits our campus.
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
             src="https://grangettos.com/cdn/shop/articles/shutterstock_1912480612_1600x.jpg?v=1619049100"
             alt="MRF Image"
            ></img>
          </div>

          <div class="col-lg-6 col-md-12 d-flex mrf1-text">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9494/9494600.png"
              alt="number"
            ></img>
            <p>
              The answer is simple, sustainable, and practical: an aerobic
              composting pit system. It turns daily organic waste from
              residences, hostels, and classrooms into rich compost for campus
              gardens. Low-cost, easy to maintain, and scalable, this system not
              only manages waste responsibly but also invites active
              participation from the entire campus community. Together, we can
              create a cleaner, greener, and more sustainable campus—one pit at
              a time.
            </p>
          </div>
        </div>

        <div class="d-flex justify-content-center align-items-center">
          <button
            class="mrf-button mt-4 mb-4 p-3"
            onClick={() => {
              navigate("/mrf");
              window.scrollTo(0, 0);
            }}
          >
            Click here for detailed Summary
          </button>
        </div>
      </div>
    </>
  );
}

export default Survey;
