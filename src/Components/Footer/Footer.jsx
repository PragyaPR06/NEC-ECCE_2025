import React, { useEffect } from 'react';
import './footer.css';

const Footer = () => {
  // useEffect(() => {
  //   // Load the external script for the counter
  //   const script = document.createElement('script');
  //   script.src = "https://counter6.optistats.ovh/private/counter.js?c=7351k22xjs76xk57rzwjsmrs4n77xf6p&down=async";
  //   script.async = true;

  //   // Append the script to the body
  //   document.body.appendChild(script);

  //   // Clean up the script when the component unmounts
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <footer className='footer'>
      <section className='copyright-text'>
        <h2>
          Copyright &copy; 2025 NE-IECCE 
        </h2>
      </section>
      {/* <section className='counter'>
        <p className='counterText'>Visitor Count: </p>
        <div id="sfc7351k22xjs76xk57rzwjsmrs4n77xf6p" style={{ display: 'inline-block' }}></div>
        
        <noscript>
          <a href="https://www.freecounterstat.com" title="website hit counter">
            <img 
              src="https://counter6.optistats.ovh/private/freecounterstat.php?c=7351k22xjs76xk57rzwjsmrs4n77xf6p" 
              border="0" 
              title="website hit counter" 
              alt="website hit counter" 
            />
          </a>
        </noscript>
      </section> */}
    </footer>
  );
};

export default Footer;
