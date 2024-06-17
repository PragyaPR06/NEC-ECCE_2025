import React from 'react';
import './ScrollingText.css';
import styles from '../SubLine/SubLineComponent.module.scss';


const ScrollingText = () => {
  return (
    <div className="scrolling-container">
      <div className="scrolling-text">
       <h3 className={`${styles.pathway_extreme_header_info}`}>
          Note - <a href="/CallForPapers"> Last Date for Abstract submission is <strong>30<sup>th</sup> August 2024</strong>.</a>
        </h3>
      </div>
    </div>
  );
};

export default ScrollingText;
