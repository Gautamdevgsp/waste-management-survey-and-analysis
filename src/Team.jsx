import React from 'react'

function Team() {
  return (
    <div className='big-boxx me-5 ms-5 rounded'>
        
        <div className="row d-flex justify-content-center pt-4 ">
      <h1
        className="team d-flex justify-content-center"
      >
       OUR TEAM
      </h1>
      <hr className="w-75"/>
       </div>

<div className="container text-center mt-5">
  <div className="row justify-content-center g-3">
    {/* First Row - 3 Boxes */}
   <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
  <div className="profile-container rounded text-center p-4">
    <div class="circle">
  <img src="DSC_1875.jpg" alt="profile" />
</div>

    <a className="pic d-block mt-1" href="https://www.linkedin.com/in/gurvansh-singh-6b1628384">
      Gurvansh Singh
    </a>
  </div>
</div>


    <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
      <div className="profile-container rounded text-center p-4">
    <div class="circle">
  <img src="ekam.jpg" alt="profile" />
</div>
    <a className="pic d-block mt-1" href="https://www.linkedin.com/in/eakamjot-singh-b9272b382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
    Eakamjot Singh
    </a>
  </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
      <div className="profile-container rounded text-center p-4">
    <div class="circle">
  <img src="LI-removebg-preview.jpg" alt="profile" />
</div>
    <a className="pic d-block mt-1" href="https://www.linkedin.com/in/gautam-sharma-64583530b/">
      Gautam Sharma
    </a>
  </div>
    </div>
  </div>

  <div className="row justify-content-center g-3 mt-5">

    <div className="row d-flex justify-content-center mt-3 ">
      <h4
        className="guide d-flex justify-content-center pt-4"
      >
        OUR GUIDES
      </h4>
      <hr className="w-75"/>
       </div>

    {/* Second Row - 2 Boxes */}
    <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-5 mb-5">
      <div className="profile-container rounded text-center p-4">
 <div class="circle">
  <img src="" alt="profile" />
</div>
    <a className="pic d-block mt-1" href="http://localhost:5173/">
      Lalit Kashyap
    </a>
  </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-5 mb-5">
      <div className="profile-container rounded text-center p-4">
   <div class="circle">
  <img src="" alt="profile" />
</div>
    <a className="pic d-block mt-1" href="http://localhost:5173/">
      Indesh Attri
    </a>
  </div>
    </div>
  </div>
</div>

        </div>
  )
}

export default Team