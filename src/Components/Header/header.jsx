import React from 'react';
import './header.css';


function App() {
  return (
    <div>
      <div className="header-links">
        <div className="header-links-section">            
          <h3>
            <a id="ieee-main-link" href="https://www.ieee.org/">IEEE.org</a> 
            <a href="http://ieeexplore.ieee.org/">IEEE <span id="header-xplore">Xplore </span>Digital Library</a> 
            <a href="http://standards.ieee.org/">IEEE Standards</a> 
            <a href="http://spectrum.ieee.org/">IEEE Spectrum</a> 
            <a href="https://www.ieee.org/sitemap.html">More Sites</a> 
          </h3>
        </div>
      </div>
      <div className="header-content">
        <div className="pathway-extreme-header-info">
          <h2>IEEE North-East India</h2>
          <h2>International Energy Conversion Conference and Exhibition</h2>
          <h2>(NE-IECCE 2025)</h2>
        </div>
        <div className="header-logo">
          <img src={require("./ne-iecce-2025_main_logo.jpg")} alt="ne-iecce-2025_logo" width="150rem" height="100rem"/>
        </div>
        <div className="header-logo">
          <img src={require("./nits-logo.svg")} alt="nits-logo" width="150rem" height="100rem"/>
        </div>
        <div className="header-counter"/>
      </div>
      <div className="header-location">
        <div className="location-icon">
          <img src={require("./location-icon.png")} alt="location-icon"/>
        </div>
        <div className="header-location-data">
          <h3 className="pathway-extreme-header-location-data"> National Institute of Technology, Silchar, Assam | INDIA</h3>
          <h3 className="pathway-extreme-header-location-dates"> 4-6 July 2025</h3>
        </div>
        <div className="header-logos">
          <div className="location-ieee-silchar-subsection-logo">
            <img src={require("./ieee-silchar-subsection-logo.jpeg")} alt="ieee-silchar-subsection-logo"/>
          </div>
          <div className="location-ieee-kolkata-section-logo">
            <img src={require("./ieee-kolkata-section.jpeg")} alt="ieee-kolkata-section-logo"/>
          </div>
          <div className="location-ias-logo">
            <img src={require("./ias-logo.jpeg")} alt="ias-logo"/>
          </div>
          <div className="location-ieee-logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg" alt="ieee-main-logo"/>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default App;
