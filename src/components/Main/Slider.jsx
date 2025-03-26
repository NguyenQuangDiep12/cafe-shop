import React, { useEffect, useState } from 'react';
import banner1 from '../assets/images/banner_mv_awakening_1.jpg'
import banner2 from '../assets/images/website_2025_x_748_px.jpg'

const Data_Images = [
  {
    href: banner1,
  },
  {
    href: banner2,
  }
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? Data_Images.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Data_Images.length) // truyền lại giá trị của currentIndex vào
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Tu dong chuyen slide sau moi 10s
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 10000) // sau mỗi 10s chuyển ảnh 

    return () => clearInterval(interval) 
  }, [currentIndex]) 

  return (
    <div className='carousel'>
      <button className='prev-btn' onClick={() => handlePrev()}> {"<"} </button>
      <div className="carousel-container">
        <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {Data_Images.map((Image, index) => (
            <img
              key={index}
              src={Image.href}
              alt={`Slide ${index}`}
              className="slide"
            />
          ))}
        </div>
      </div>
      <button className='next-btn' onClick={() => handleNext()}> {">"} </button>
      
      {/* Dấu chấm điều hướng */}
      <div className="dots">
        {Data_Images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
