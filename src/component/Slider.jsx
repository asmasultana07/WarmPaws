import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import i1 from '../assets/image1.webp'
import i2 from '../assets/image2.jpeg'
import i3 from '../assets/image3.jpeg'
import i4 from '../assets/image4.jpeg'
import i5 from '../assets/image5.jpeg'

const Slider = () => {
  return (
    <div>
      <Swiper
        pagination={{ type: "progressbar" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper  bg-linear-to-r from-[#979fc3] to-[#065265]"
      >
        <SwiperSlide><img  className="w-full h-[500px] object-contain" src={i1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[500px] object-contain" src={i2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[500px] object-cover" src={i3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[500px] object-contain" src={i4} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[500px] object-cover" src={i5} alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Slider;
