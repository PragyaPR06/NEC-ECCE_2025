import React, { Fragment } from "react"
import Header from "../Components/Header/header"
import Navbar from "../Components/Navbar/Navbar"

const SYP = () => {
  return (
    <Fragment>
    <Header></Header>
    <Navbar></Navbar>
    <div className="min-h-screen bg-gray-100">
      {/* Main Heading */}
      {/* <div className="text-center py-8 bg-white shadow-md">
      <link href="https://fonts.googleapis.com/css2?family=Anek+Tamil:wght@100..800&display=swap" rel="stylesheet"></link>
        <h1 className="text-center font-['Anek_Tamil'] text-5xl font-black text-blue-600">Speakers</h1>
      </div> */}

      <div className="container mx-auto px-4 py-12">
       
          {/* Keynote Speaker Section */}
          <div>
            <div className="bg-green-600 rounded-lg p-20 h-full">
              <h2 className="text-3xl font-bold text-white mb-6">Students & Young Professional Panelists</h2>
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <div className="object-cover md:object-fill lg:object-contain relative ">
                  <img
                    src="/speaker/SYP.jpg"
                    alt="Keynote Speaker"
                    className="w-full h-full object-cover"
                  />
                </div>
               
              </div>
            </div>
          </div>

         
        
      </div>
    </div>
    </Fragment>
  )
}

export default SYP

