import React from 'react'
import Slide from './Slide'
import Survey from './Survey';
import Team from './Team';
import Navbar from './Navbar';

function Home() {
  return (
    <>
     <section id='heading'>
        <div className='upper d-flex align-items-center' style={{height:'130px'}}>
            <div className='d-flex flex-column align-items-center mt-3'>
                <img src='./New Project 26 [D4CFFD9].png' alt='Waste Management' style={{height:'90px', flexShrink: 0}}/>
                <p className='fs-4'>SBSSU</p>
            </div>
                 {/* <p className='ms-3 flex-grow-1 text-center'>Waste  Management  Survey </p> */}
                  <div className='ms-2 flex-grow-1 text-center'>
      <p className='head mb-0'>Waste Management Survey</p>
      <p className='foot mb-3'>
       Analyzing and Improving Campus Sustainability
      </p>
    </div>
        </div>
</section>

        <Navbar/>

         <section id='home'>
          <div className="d-flex min-vh-50 justify-content-center align-items-center ">
                 <div className="bg-white rounded mt-5"> <Slide/></div>
        </div>
        </section>

      <hr className="w-100 my-5 bg-dark" style={{ height: '3px' }} />

       <section id='survey'>
        <div className='survey-text'>
          <Survey/>
        </div>
        </section>


      <section id='team'>
      <div>
        <Team />
      </div>
      </section>

        {/* <section id='contact'>
       <div
        className="footer w-100 text-white d-flex flex-column justify-content-center align-items-center mt-5"
        style={{ height: "300px" }}
      >
        <h2 className="mb-3">Team</h2>

        <div className="text-center fs-5">
          <p>Gurvansh Singh – 22303076</p>
          <p>Eakamjot Singh – 22303062</p>
          <p>Gautam Sharma – 22303066</p>
        </div>

        <hr className="w-75 my-3" />

        <div className="text-center">
          <p className="mb-1 fs-6">
            © {new Date().getFullYear()} My Constitution. All rights reserved.
          </p>
          <p className="mb-0 fs-6">
            Contact us:{" "}
            <a
              href="mailto:team@myconstitution.com"
              className="text-white text-decoration-underline"
            >
              team@myconstitution.com
            </a>
          </p>
        </div>
      </div>
      </section> */}

<section id='contact'>
       <footer className="footer mt-5">
  <div className="footer-section about">
    <h3>About</h3>
    <p>
      This website showcases interactive charts and visualizations created
      using Colab and React. Our goal is to make data analysis more accessible
      and engaging.
    </p>
  </div>

  <div className="footer-section contact">
    <h3>Contact</h3>
    <p>Email: info@example.com</p>
    <p>Phone: +91 98765 43210</p>
  </div>

  <div className="footer-section resources">
    <h3>Resources</h3>
    <ul>
      <li><a href="#">Documentation</a></li>
      <li><a href="#">API Reference</a></li>
      <li><a href="#">GitHub Repo</a></li>
    </ul>
  </div>
</footer>
</section>
      
    </>
  )
}

export default Home