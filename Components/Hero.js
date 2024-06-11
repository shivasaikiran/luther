// src/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slide1 from './images/slide1.webp';
import slide2 from './images/slide2.webp';
import slide3 from './images/slide3.webp';
import Image from 'next/image';


const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
    , // 2 seconds
  };

  return (
    <div className='p-7'> {/* Add padding for mobile and desktop */}
      <Slider {...settings}>
        <div>
          <Image src={slide1} alt="Image 1" className="h-auto " />
        </div>
        <div>
          <Image src={slide2} alt="Image 2" className="h-auto " />
        </div>
        <div>
          <Image src={slide3} alt="Image 3" className="h-auto " />
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
