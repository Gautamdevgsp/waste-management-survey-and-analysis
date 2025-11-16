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
                className="survey-box bg-img-residential  d-flex align-items-end justify-content-center rounded me-5"
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
                className="survey-box bg-img-campus  d-flex align-items-end justify-content-center rounded mt-5 me-5 mb-4"
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

      <div className="vaddi ms-5 me-5 rounded">
        <div className="row d-flex justify-content-center  ">
          <h1 className="surveyy d-flex justify-content-center">
            MRF PROPOSAL SUMMARY
          </h1>
          <hr className="w-75" />
        </div>

        <div class="mrf">
          <div class="mrf-text">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9494/9494567.png"
              alt="number"
            ></img>
            <p>
              Data-Driven Waste Management System This project proposes the
              implementation of a sustainable, data-driven waste management
              system for Sardar Beant Singh State University, Gurdaspur. The
              current waste generation on campus, with its complex mix from
              diverse zones including hostels, canteens, and academic
              departments, poses a significant challenge.
            </p>
          </div>
          <div class="mrf-image">
            <img
              className="rounded"
              src="https://www.rubicon.com/wp-content/uploads/2021/06/materials-recovery-facility.jpg"
              alt="MRF Tyre"
            ></img>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <hr className="w-75" />
        </div>

        <div class="mrf1">
          <div class="mrf1-image">
            <img
              src="https://www.re-group.com/wp-content/uploads/resized/2021/11/australias-newest-mrf-is-up-and-running-1200x0-c-default.jpg"
              alt="MRF Tyre"
            ></img>
          </div>

          <div class="mrf1-text">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9494/9494600.png"
              alt="number"
            ></img>
            <p>
              The Material Recovery Facility (MRF) serves to process and
              segregate the university's complex waste streams , ensuring the
              maximum recovery of recyclable and biodegradable materials. Its
              primary functions include turning waste into a valuable resource
              by facilitating effective recycling, which helps minimize the
              amount of waste sent to landfills. Finally, the MRF acts as the
              scalable, physical infrastructure designed to handle the specific
              waste types and volumes identified by the project's data analysis
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
        <button
          className="mrf-button mt-4 mb-4 p-3"
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
