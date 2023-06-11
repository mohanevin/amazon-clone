import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation,Autoplay} from 'swiper';


function Carousel() {
  return (
   <Swiper  navigation={true} loop={true} spaceBetween={0}modules={[Navigation,Autoplay]} className="h-[300px]" autoplay={{delay:3000}}>
    <SwiperSlide className="bg-black">
        <video controls  >
            <source  src={'../images/carousel_vid.mp4'} type='video/mp4' />
        </video>
    </SwiperSlide>
    <SwiperSlide>
        <img src='../images/carousel_1.jpg' alt='carousel1'/>
    </SwiperSlide>
    <SwiperSlide>
        <img src='../images/carousel_2.jpg' alt='carousel1'/>
    </SwiperSlide>
    
    <SwiperSlide>
        <img src='../images/carousel_4.jpg' alt='carousel1'/>
    </SwiperSlide>
    <SwiperSlide>
        <img src='../images/carousel_5.jpg' alt='carousel1'/>
    </SwiperSlide>
   </Swiper>
  )
}

export default Carousel