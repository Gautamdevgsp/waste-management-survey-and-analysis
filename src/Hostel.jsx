import React from 'react'

function Hostel() {
  return (
    
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Interactive Chart from Google Colab</h1>

      <iframe
        src="/chart.html"
        title="Colab Chart"
        style={{
          width: "50%",
          height: "400px",
          border: "2px solid #ccc",
          borderRadius: "10px",
        }}
      ></iframe>
    </div>

  )
}

export default Hostel