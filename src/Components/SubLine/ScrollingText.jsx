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
       <div style={{padding: 0, fontSize: 20}}> <a style={{color: 'red'}} href="/CallForPapers">Paper submission portal opens on <strong> October 7, 2024</strong> . </a>  <span>  <strong> 100% accepted and presented papers will be forwarded to IEEE Transactions on Industry Applications for further review. </strong></span> </div> 
       </div>                                                                                                                                                                                                 
         </h3> 
      </div>
    </div>
  );
};

export default ScrollingText;
