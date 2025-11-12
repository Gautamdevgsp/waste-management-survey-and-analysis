import React from "react";
import "./App.css"; // CSS file
import Team from "./Team";
import { useNavigate } from "react-router-dom";

function Survey() {
  // You can attach click handlers if you want navigation later
  const navigate = useNavigate();

  const handleClick = () => {
    // your other logic (if any)
    navigate("/hostel"); // 👈 navigates to /another-page
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
                className="survey-box bg-img-hostel  d-flex align-items-end justify-content-center rounded me-5"
                onClick={() => handleClick("Hostel")}
              >
                <div className="bottom-text bg-white text-center py-2 w-100 ">
                  RESIDENTIAL
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-5 d-flex justify-content-center">
              <div
                className="survey-box bg-img-residential  d-flex align-items-end justify-content-center rounded"
                onClick={() => handleClick("Residential")}
              >
                <div className="bottom-text bg-white text-center py-2 w-100 ">
                  DEPARTMENT
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-5 d-flex justify-content-center">
              <div
                className="survey-box bg-img-campus  d-flex align-items-end justify-content-center rounded mt-5 me-5 mb-4"
                onClick={() => handleClick("Campus")}
              >
                <div className="bottom-text bg-white text-center py-2 w-100 ">
                  CAMPUS
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-5 d-flex justify-content-center">
              <div
                className="survey-box bg-img-department  d-flex align-items-end justify-content-center rounded mt-5 mb-4"
                onClick={() => handleClick("Department")}
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

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "100vw" }}
      >
        <div
          className="mrf bg-img-mrf text-white d-flex justify-content-center align-items-center rounded"
          style={{
            width: "87%",
            height: "400px",
            fontSize: "65px",
            letterSpacing: "5px",
          }}
        >
          Material Recovery Facility
        </div>
      </div>

      <hr className="w-100 my-5 bg-dark" style={{ height: "2px" }} />
    </>
  );
}

export default Survey;
