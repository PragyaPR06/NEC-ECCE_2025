import React from 'react';
import './ScrollingText.css';
import styles from '../SubLine/SubLineComponent.module.scss';


const ScrollingText = () => {
  return (
    <div className="scrolling-container">
      <div className="scrolling-text">
       <h3 className={`${styles.pathway_extreme_header_info}`}>
       <div className='flex '>
       <div className='p-0 m-0 items-center '><img src="/new.webp" alt="Notification" className=" items-center pt-1 " width='30px' /></div>
       <div style={{padding: 0, fontSize: 20}}> <a style={{color: 'red'}} href="/CallForPapers">Digest submission portal date is extended upto <strong> February 15, 2025</strong> . </a>  <span>  <strong> All papers presented in NE-IECCE 2025 will go to IEEE Xplore and will be eligible for further review for publication in IAS Transactions and Magazine. </strong></span>
        <span style={{color: 'green'}}>  <strong> Foreign authors who will be registering for presenting the accepted papers will be given the option to present their papers online in NE-IECCE 2025. </strong></span> </div> 
       </div>                                                                                                                                                                                                 
         </h3> 
      </div>
    </div>
  );
};

export default ScrollingText;
