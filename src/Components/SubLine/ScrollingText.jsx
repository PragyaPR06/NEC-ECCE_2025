import React from 'react';
import './ScrollingText.css';
import styles from '../SubLine/SubLineComponent.module.scss';


const ScrollingText = () => {
  return (
    <div className="scrolling-container">
      <div className="scrolling-text">
       <h3 className={`${styles.pathway_extreme_header_info}`}>
       <div className='flex '>
       <div className='  p-0 m-0 items-center'><img src="http://www.nits.ac.in/images/tnew.gif" alt="Notification" className=" items-center pt-1 " /></div>
       <div style={{padding: 0}}>- <a href="/CallForPapers">Paper submission to be started <strong> shortly</strong>.</a></div> 
       </div>                                                                                                                                                                                                 
         </h3> 
      </div>
    </div>
  );
};

export default ScrollingText;
