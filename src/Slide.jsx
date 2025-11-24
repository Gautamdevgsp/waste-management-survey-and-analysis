import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slideStyle = {
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: '8px',
    overflow: 'hidden',
    width: '80%', 
    margin: '0 auto',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  };


  return (
    <div style={{ width: '87vw', margin: '0 auto' }}> 

      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect}
       
      >
        
        <Carousel.Item interval={3000}>
          <div 
            className='w-100 text-white' 
            style={{ 
              ...slideStyle, 
              loading: "lazy",
              backgroundImage: `url('/why.webp')` 
            }}
          >
            <div style={overlayStyle}></div> 
            
            <h2 style={{ zIndex: 2, position: 'relative' }}>Why</h2>
          </div>
          
          <Carousel.Caption>
            <h3 style={{ zIndex: 2, position: 'relative' }}>Our Mission</h3>
            <p style={{ zIndex: 2, position: 'relative' }}>To create a cleaner, greener campus by turning organic waste into valuable compost through sustainable practices.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <div 
            className='w-100 text-white' 
            style={{ 
              ...slideStyle, 
              loading: 'lazy',
              backgroundImage: `url('/howww.webp')` 
            }}
          >
            <div style={overlayStyle}></div> 
            
            <h2 style={{ zIndex: 2, position: 'relative' }}>How</h2>
          </div>
          
          <Carousel.Caption>
            <h3 style={{ zIndex: 2, position: 'relative' }}>Our Process</h3>
            <p style={{ zIndex: 2, position: 'relative' }}>Data-driven waste assessment combined with surveys, monitoring, and practical composting solutions.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <div 
            className='w-100 text-white' 
            style={{ 
              ...slideStyle, 
              loading: 'lazy',
              backgroundImage: `url('/clg2.webp')` 
            }}
          >
            <div style={overlayStyle}></div> 
            
            <h2 style={{ zIndex: 2, position: 'relative' }}>What</h2>
          </div>
          
          <Carousel.Caption>
            <h3 style={{ zIndex: 2, position: 'relative' }}>Our Product</h3>
            <p style={{ zIndex: 2, position: 'relative' }}>A Web based dashboard that explores our survey results, analysis and projections through interactive charts and diagrams—plus access to the complete Feasibility Study for a Sustainable Waste Management System</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default Slide;
