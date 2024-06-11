import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import 'swiper/css/autoplay';



export default () => {
  return (
    <>
    <div className='bg-opacity-40 bg-black absolute inset-x-0 bottom-0 top-1/2 flex flex-col items-center justify-center z-30 p-4'>
    <h1 class="text-2xl md:text-4xl xl:text-5xl font-extrabold mb-4 text-white text-center">
                    IEEE North-East India
                </h1>
                <h1 class="text-2xl md:text-4xl xl:text-5xl font-extrabold mb-2 text-white">
                    International Energy Conversion Conference and Exhibition
                </h1>
                <h1 class="text-2xl md:text-4xl   xl:text-5xl font-extrabold mb-4 text-white">
                   (NE-IECCE 2025)
                </h1>
                <p class="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-white">
                    4-6 July 2025
                </p>
                <p class="text-lg md:text-xl lg:text-2xl font-bold mb-12 text-white">
                    National Institute of Technology Silchar, Assam, India
                </p>

    </div>
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2500 }}
      pagination={{ clickable: true }}
    >
    <SwiperSlide>
                <div className='mx-auto w-[100%] h-[15rem] md:h-[36rem] relative'>
                    {/* <img src='/HomeSlider/pic4.jpeg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover' alt=''/> */}
                    <img src='/HomeSlider/silch.jpeg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover' alt=''/>
                    {/* <div className='absolute top-[40%] md:top-[45%] w-[100%] bg-black opacity-50 text-[white] text-center text-[2rem] md:text-[3rem] mx-auto'>Conference!</div> */}
                </div>
            </SwiperSlide>
           
     <SwiperSlide>
                <div className='mx-auto w-[100%] h-[15rem] md:h-[36rem] relative'>
                     <img src='/HomeSlider/2.jpeg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover' alt=''/> 
                    {/* <div className='absolute top-[40%] md:top-[45%] w-[100%] bg-black opacity-50 text-[white] text-center text-[2rem] md:text-[3rem] mx-auto'>Conference!</div> */}
                </div> 
            </SwiperSlide> 
            <SwiperSlide>
                <div className='mx-auto w-[100%] h-[15rem] md:h-[36rem] relative'>
                    <img src='/HomeSlider/pic2.jpg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover' alt=''/>
                    {/* <div className='absolute top-[40%] md:top-[45%] w-[100%] bg-black opacity-50 text-[white] text-center text-[2rem] md:text-[3rem] mx-auto'>Conference!</div> */}
                </div>
            </SwiperSlide>
           
            <SwiperSlide>
                <div className='mx-auto w-[100%] h-[20rem] md:h-[36rem] relative'>
                    <img src='/HomeSlider/1.jpeg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover' alt=''/>
                    {/* <div className='absolute top-[40%] md:top-[45%] w-[100%] bg-black opacity-50 text-[white] text-center text-[2rem] md:text-[3rem] mx-auto'>Conference!</div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='mx-auto w-[100%] h-[15rem] md:h-[36rem] relative'>
                <img src='/HomeSlider/conference6.jpg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover' alt=''/>
                    {/* <div className='absolute top-[40%] md:top-[45%] w-[100%] bg-black opacity-50 text-[white] text-center text-[2rem] md:text-[3rem] mx-auto'>Conference!</div> */}
                </div>
            </SwiperSlide>
           
            <SwiperSlide>
                <div className='mx-auto w-[100%] h-[15rem] md:h-[36rem] relative'>
                    <img src='/HomeSlider/5.jpeg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover' alt=''/>
                    {/* <div className='absolute top-[40%] md:top-[45%] w-[100%] bg-black opacity-50 text-[white] text-center text-[2rem] md:text-[3rem] mx-auto'>Conference!</div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='mx-auto w-[100%] h-[15rem] md:h-[36rem] relative'>
                    <img src='/HomeSlider/conference4.jpg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover' alt=''/>
                    {/* <div className='absolute top-[40%] md:top-[45%] w-[100%] bg-black opacity-50 text-[white] text-center text-[2rem] md:text-[3rem] mx-auto'>Conference!</div> */}
                </div>
            </SwiperSlide>
           
            <SwiperSlide>
                <div className='mx-auto w-[100%] h-[15rem] md:h-[36rem] relative'>
                    <img src='/HomeSlider/pic1.jpg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover' alt=''/>
                    {/* <div className='absolute top-[40%] md:top-[45%] w-[100%] bg-black opacity-50 text-[white] text-center text-[2rem] md:text-[3rem] mx-auto'>Conference!</div> */}
                </div>
            </SwiperSlide>
           
           
            <SwiperSlide>
                <div className='mx-auto w-[100%] h-[15rem] md:h-[36rem] relative'>
                    {/* <img src='/HomeSlider/6.jpeg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover' alt=''/> */}
                    <img src='/HomeSlider/4.jpg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover' alt=''/>
                    {/* <div className='absolute top-[40%] md:top-[45%] w-[100%] bg-black opacity-50 text-[white] text-center text-[2rem] md:text-[3rem] mx-auto'>Conference!</div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='mx-auto w-[100%] h-[15rem] md:h-[36rem] relative'>
                    {/* <img src='/HomeSlider/7.jpeg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover' alt=''/> */}
                    <img src='/HomeSlider/conference5.jpg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover' alt=''/>
                    {/* <div className='absolute top-[40%] md:top-[45%] w-[100%] bg-black opacity-50 text-[white] text-center text-[2rem] md:text-[3rem] mx-auto'>Conference!</div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='mx-auto w-[100%] h-[15rem] md:h-[36rem] relative'>
                <img src='/HomeSlider/ee.jpeg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover' alt=''/>
                    {/* <img src='/HomeSlider/conference6.jpg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover' alt=''/> */}
                    {/* <div className='absolute top-[40%] md:top-[45%] w-[100%] bg-black opacity-50 text-[white] text-center text-[2rem] md:text-[3rem] mx-auto'>Conference!</div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='mx-auto w-[100%] h-[15rem] md:h-[36rem] relative'>
                    <img src='/HomeSlider/3.jpeg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover' alt=''/>
                    {/* <div className='absolute top-[40%] md:top-[45%] w-[100%] bg-black opacity-50 text-[white] text-center text-[2rem] md:text-[3rem] mx-auto'>Conference!</div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='mx-auto w-[100%] h-[15rem] md:h-[36rem] relative'>
                    {/* <img src='/HomeSlider/ee.jpeg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover' alt=''/> */}
                    <img src='/HomeSlider/pic3.jpg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover' alt=''/>
                    {/* <div className='absolute top-[40%] md:top-[45%] w-[100%] bg-black opacity-50 text-[white] text-center text-[2rem] md:text-[3rem] mx-auto'>Conference!</div> */}
                </div>
            </SwiperSlide>
    </Swiper></>
  );
};