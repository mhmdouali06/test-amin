import React from 'react'
import './Slider.scss'

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from '../../assets/swiper/Image1.png';
import img2 from '../../assets/swiper/Image2.png';
import img3 from '../../assets/swiper/Image3.png';
import img4 from '../../assets/swiper/Image4.png';
import img5 from '../../assets/swiper/Image5.png';
import img6 from '../../assets/swiper/Image6.png';
import img7 from '../../assets/swiper/Image7.png';
import img8 from '../../assets/swiper/Image8.jpg';
import img9 from '../../assets/swiper/Image9.png';
import img10 from '../../assets/swiper/Image10.png';
import img11 from '../../assets/swiper/Image11.png';
import img12 from '../../assets/swiper/Image12.png';
import img13 from '../../assets/swiper/Image13.jpg';
import img14 from '../../assets/swiper/Image14.png';
import img15 from '../../assets/swiper/Image15.png';
import img16 from '../../assets/swiper/Image16.png';
import img17 from '../../assets/swiper/Image17.png';
import img18 from '../../assets/swiper/Image18.png';
import img19 from '../../assets/swiper/Image19.jpg';
import img20 from '../../assets/swiper/Image20.png';
import img21 from '../../assets/swiper/Image21.png';
import img22 from '../../assets/swiper/Image22.png';
import img23 from '../../assets/swiper/Image23.png';
import img24 from '../../assets/swiper/Image24.png';
import img25 from '../../assets/swiper/Image25.png';

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25
];

const Slider = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        slidesPerView="auto"
        spaceBetween={0}
        centeredSlides={false}
        autoplay={{
          delay: 2500, 
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  
  )
}

export default Slider