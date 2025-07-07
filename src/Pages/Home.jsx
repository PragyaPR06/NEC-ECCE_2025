import React from 'react';
import Tracks from '../Components/Tracks/Tracks'
import HomeSlider from '../Components/HomeComponents/HomeSlider';
import Navbar from "../Components/Navbar/Navbar"
import AboutUsComponent from '../Components/About/About';
import Timeline  from '../Components/Timeline/Timeline';
import Timer from '../Components/Timer/Timer';
import SubLineComponent from '../Components/SubLine/SubLine';
import Sponsor from '../Components/Sponsors/Sponsors';
import Header from '../Components/Header/header';
import Buttons from '../Components/ButtonsunderSlider/Buttons';
import Speaker from '../Components/Speaker/Speaker';
import Abstract from '../Components/ButtonsunderSlider/Abstract'

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />

      {/* 👇 Floating Download Button */}
      <div className="fixed top-20 right-4 z-50">
        <a href="/pdfs/Abstract.pdf" download>
          <div className="relative group">
            {/* NEW badge */}
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce z-10">
              NEW!
            </span>

            {/* Glowing Button */}
            <button className="bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-bold px-4 py-2 rounded-full 
              shadow-xl animate-pulse transition-all duration-300 hover:scale-110">
              Download Book of Abstract
            </button>
          </div>
        </a>
      </div>
      {/* 👆 Floating Button Ends */}

      <hr />
      <SubLineComponent />
      <HomeSlider />
      <Buttons />
      <Abstract />
      <Sponsor />
      <br />
      <br />
      <Speaker />
      <AboutUsComponent />
      <Tracks />
      <Timeline />
      <Timer />
    </div>
  );
};

export default Home;
