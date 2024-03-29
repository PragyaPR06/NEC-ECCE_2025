import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"; 
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Committee from './Pages/Committee';
// import AboutUsComponent from './Components/About/About'

export const App = () => {
  return (
    <div>
       <Home/>
       <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/committee" element={<Committee />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
            <Footer/>
      </BrowserRouter>
    </div>

  );
}
export default App;