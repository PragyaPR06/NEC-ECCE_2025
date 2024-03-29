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
       
       <BrowserRouter>
            
            <Routes>
              <Route exact path="/" element={<Home />} />
              
              <Route exact path="/committee" element={<Committee/>}/>
            </Routes>
            <Footer/>
      </BrowserRouter>
    </div>

  );
}
export default App;