import { Swiper, SwiperSlide } from 'swiper/react';
import React,{useState, useEffect} from "react"
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import 'swiper/css';
const HomeSlider = () => {
    const swiperRef = React.useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideClick = (index) => {
      swiperRef.current.swiper.slideTo(index);
    };
    useEffect(() => {
        const swiperInstance = swiperRef.current.swiper;
        if (swiperInstance) {
            swiperInstance.on('slideChange', () => {
                setCurrentIndex(swiperInstance.activeIndex); // Update current index on slide change
            });
        }
    }, []);
    const handleNextSlide = () => {
        if (currentIndex === 3 - 1) {
            // If on last slide, go to first slide
            swiperRef.current.swiper.slideTo(0);
            setCurrentIndex(0);
        } else {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrevSlide = () => {
        if (currentIndex === 0) {
            swiperRef.current.swiper.slideTo(3 - 1);
            setCurrentIndex(3 - 1);
        } else {
            swiperRef.current.swiper.slidePrev();
        }
    };

  return (
    <div className='mx-auto relative'>
        <Swiper
        className=''
        ref={swiperRef}
        spaceBetween={10}
        loop={true}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log("swiper")}
        >
            <SwiperSlide>
                <div className='mx-auto w-[90%] h-[15rem] md:h-[35rem] relative'>
                    <img src='/HomeSlider/conference1.jpg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover'/>
                    <div className='absolute top-[40%] md:top-[45%] w-[100%] bg-black opacity-50 text-[white] text-center text-[2rem] md:text-[3rem] mx-auto'>Hello world!</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='mx-auto w-[90%] h-[15rem] md:h-[35rem] relative'>
                    <img src='/HomeSlider/conference1.jpg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover'/>
                    <div className='absolute top-[40%] md:top-[45%] w-[100%] bg-black opacity-50 text-[white] text-center text-[2rem] md:text-[3rem] mx-auto'>Welcome To</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='mx-auto w-[90%] h-[15rem] md:h-[35rem] relative'>
                    <img src='/HomeSlider/conference1.jpg' className='mx-auto h-full w-[100%] md:w-[100%] object-cover'/>
                    <div className='absolute top-[40%] md:top-[45%] w-[100%] bg-black opacity-50 text-[white] text-center text-[2rem] md:text-[3rem] mx-auto'>Conference!</div>
                </div>
            </SwiperSlide>
        </Swiper>

        <div className="absolute top-[45%] md:top-[50%] flex justify-between items-center z-[100] w-full px-[2rem] md:px-[1rem]">
            <div className="text-3xl cursor-pointer text-white md:text-black" onClick={handlePrevSlide}><BsArrowLeftCircle /></div>
            <div className="text-3xl cursor-pointer text-white md:text-black"  onClick={handleNextSlide}><BsArrowRightCircle /></div>
        </div>
        <div className='absolute bottom-[1rem] md:bottom-[2rem] z-[50] left-[40%] md:left-[50%] flex gap-[1rem]'>
            <div className={`h-[.8rem] w-[.8rem] border border-black rounded-lg ${currentIndex==0?"bg-white":"bg-slate-600"}`}></div>
            <div className={`h-[.8rem] w-[.8rem] border border-black rounded-lg ${currentIndex==1?"bg-white":"bg-slate-600"}`}></div>
            <div className={`h-[.8rem] w-[.8rem] border border-black rounded-lg ${currentIndex==2?"bg-white":"bg-slate-600"}`}></div>
        </div>
    </div>
  );
};

HomeSlider.displayName = 'HomeSlider';
export default HomeSlider;