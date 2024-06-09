import React from 'react';
import styles from '../SubLine/SubLineComponent.module.scss';
import ScrollingText from './ScrollingText';
const SubLineComponent = () => {
    return (
        <section className={`${styles.container}`}>     
           <ScrollingText />
        </section>
    );
};

export default SubLineComponent;
