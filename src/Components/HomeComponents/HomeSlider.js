import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Card from './Card';

const HomeSlider = () => {
  return (

    <div className="relative">
      {/* Overlay */}
      <div className="bg-black bg-opacity-40 absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none">
        <div className="text-white text-center p-4 md:p-8">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-2 md:mb-4">
            IEEE North-East India International
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-2">
            Energy Conversion Conference and Exhibition
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-2 md:mb-4">
            (NE-IECCE 2025)
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">
            4-6 July 2025
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
            National Institute of Technology Silchar, Assam, India
          </p>
        </div>
      </div>
      <div className="absolute top-[75%]   left-0 transform -translate-y-1/2 z-50 ">
  <Card />
</div>
      {/* Swiper component */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className='w-full h-[15rem] md:h-[36rem] relative'>
            <img src='/HomeSlider/silch.jpeg' className='h-full w-full object-cover' alt='NIT Silchar campus'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[15rem] md:h-[36rem] relative'>
            <img src='/HomeSlider/2.jpeg' className='h-full w-full object-cover' alt='Conference hall'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[15rem] md:h-[36rem] relative'>
            <img src='/HomeSlider/pic2.jpg' className='h-full w-full object-cover' alt='Conference presentation'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[15rem] md:h-[36rem] relative'>
            <img src='/HomeSlider/1.jpeg' className='h-full w-full object-cover' alt='Conference attendees'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[15rem] md:h-[36rem] relative'>
            <img src='/HomeSlider/conference6.jpg' className='h-full w-full object-cover' alt='Conference panel'/>
          </div>
        </SwiperSlide>

        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </div>

  );
};

export default HomeSlider;