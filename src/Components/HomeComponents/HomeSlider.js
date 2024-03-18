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
    // console.log(currentIndex);
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
            // If on first slide, go to last slide
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
                <div className='mx-auto w-[90%] h-[15rem] md:h-[35rem]'>
                    <img src='/HomeSlider/conference1.jpg' className='mx-auto h-full w-[100%] md:w-[90%] object-cover'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='mx-auto w-[90%] h-[15rem] md:h-[35rem]'>
                    <img src='/HomeSlider/conference1.jpg' className='mx-auto h-full w-[100%] md:w-[90%] object-cover'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='mx-auto w-[90%] h-[15rem] md:h-[35rem]'>
                    <img src='/HomeSlider/conference1.jpg' className='mx-auto h-full w-[100%] md:w-[90%] object-cover'/>
                </div>
            </SwiperSlide>
        </Swiper>

        <div className="absolute top-[50%] flex justify-between items-center z-[100] w-full px-[2rem] md:px-[3rem]">
            <div className="text-3xl cursor-pointer text-white md:text-black" onClick={handlePrevSlide}><BsArrowLeftCircle /></div>
            <div className="text-3xl cursor-pointer text-white md:text-black"  onClick={handleNextSlide}><BsArrowRightCircle /></div>
        </div>
    </div>
  );
};

HomeSlider.displayName = 'HomeSlider';
export default HomeSlider;