import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Arrow from '../assets/Arrow.svg';



import { EffectCards, Pagination, Autoplay, Navigation } from "swiper";

import img1 from '../assets/Nfts/edit1.svg';
import img2 from '../assets/Nfts/MF.svg';
import img3 from '../assets/Nfts/bighead-3.svg';
import img4 from '../assets/Nfts/bighead-4.svg';
import img5 from '../assets/Nfts/bighead-5.svg';
import img6 from '../assets/Nfts/bighead-6.svg';
import img7 from '../assets/Nfts/bighead-7.svg';
import img8 from '../assets/Nfts/bighead-8.svg';
import img9 from '../assets/Nfts/bighead-9.svg';
import img10 from '../assets/Nfts/bighead-10.svg';
import img11 from '../assets/Nfts/bighead-11.svg';
import img12 from '../assets/Nfts/bighead-12.svg';




const Container = styled.div`
width: 25vw;
height: 70vh;


.swiper{
  width: 100%;
  height: 100%;
}

.swiper-slide{
  background-color: ${props => props.theme.corouselColor};
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button-next{
  color: ${props => props.theme.text};
  top: 60%;

  right: 0;
  width: 4rem;
  background-image: url(${Arrow});
  background-position: center;
  background-size: center;


  &:after{
    display:none;
  }
}


  .swiper-button-prev{
    color: ${props => props.theme.text};
    top: 60%;
    width: 4rem;
    transform : rotate(180deg);
    left: 0;

    background-image: url(${Arrow});
    background-position: center;
    background-size: center;
  
  
    &:after{
      display:none;
    }

}
`


const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type:'fraction',
        }}
        scrollbar={{
          draggable:true
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards,Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img2}  alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img3}  alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img4}  alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img5}  alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img6}  alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img7}  alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img8}  alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img9}  alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img10}  alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img11}  alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img12}  alt='The Weirdos'/></SwiperSlide>

      </Swiper>
  </Container>
  )
}

export default Carousel;