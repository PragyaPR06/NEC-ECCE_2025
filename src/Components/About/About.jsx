import React from 'react';
import styles from '../About/AboutUsComponent.module.scss';

const AboutUsComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sponsors}>
                <div className={styles.anekTamilSponsors}>
                    <h2>Society <span>Sponsors</span></h2>
                </div>
                <br /><br />
                <div className={styles.sponsorsImg}>
                    <img src="https://pedes2024.org/static/img/ias.svg" alt="1st_sponsor" className={styles.sponsor_1} />
                    <img src="https://pedes2024.org/static/img/pes.svg" alt="2nd_sponsor" className={styles.sponsor_1} />
                    <img src="https://pedes2024.org/static/img/pes.svg" alt="3rd_sponsor" className={styles.sponsor_1} />
                    <img src="https://pedes2024.org/static/img/pes.svg" alt="4th_sponsor" className={styles.sponsor_1} />
                </div>
            </div>

            <div className={styles.aboutUs}>
                <div className={styles.anekTamilAboutUs}>
                    <h2>About <span>NEI-ECCE 2025</span></h2>
                </div>

                <div className={styles.aboutUsInfo}>
                    <div className={styles.anekTamilAboutUsInfo}>IEEE NEI-ECCE 2025</div>
                    <p className={styles.anekTamilAboutUsPara}>
                        Lorem ipsum...
                    </p>
                    <br />
                    <div className={styles.aboutVideoSection}>
                        <iframe
                            id="about-video"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/YmjE5-_z9VM?si=HX1RwneGM_81yKkf"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className={styles.aboutUs}>
                <div className={styles.anekTamilAboutUs}>
                    <h2>About <span>NIT Silchar</span></h2>
                </div>
                <div className={styles.aboutUsInfo}>
                    <p className={styles.anekTamilAboutUsPara}>
                        <span>NIT Silchar</span> is one of the Best Technical Institute in the Nort-East India. Lorem ipsum...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsComponent;
