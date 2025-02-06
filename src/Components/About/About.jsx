import React from 'react';
import styles from '../About/AboutUsComponent.module.scss';

const AboutUsComponent = () => {
    return (
        <div className={`${styles.container} relative pt-[5rem]`}>
            <div className={styles.aboutUs}>
                <div className={styles.anekTamilAboutUs}>
                    <h2>About <span>NE-IECCE 2025</span></h2>
                </div>
                <div className={styles.aboutUsInfo}>
                    {/* <div className={styles.anekTamilAboutUsInfo}>IEEE NEI-ECCE 2025</div> */}
                    <p className={styles.anekTamilAboutUsPara}>
                    <span>IEEE NE-IECCE 2025,</span> the first Flagship Annual International Conference of IEEE Kolkata Section & Silchar Subsection Industry Applications Society Chapter in association with the Department of Electrical Engineering aims to provide a unique platform to researchers, practitioners, industry delegates, technocrats, and policymakers from academia and industry to share and promote recent research accomplishments and innovations for the sustainable development of industry and society. To cater the future industry demands of Sustainable Energy Conversion and Transport Electrification, this conference aims to put forth the experts working in this area to share their research findings which have a significant impact on modern smart grid, sustainable electric transportation, and control.
                    <span style={{  color: 'red', 
                                    fontFamily: 'Anek Tamil, sans-serif',  
                                    fontWeight: 600 ,
                                     }}> All the accepted and presented papers in NE-IECCE 2025 will be submitted to IEEE for possible publication/inclusion in IEEE Xplore Digital Library and will be eligible for further review for publication in IAS Transactions and Magazine.</span>
                    </p>
                    <br />
                    
                </div>
            </div>
            <div className={styles.aboutUs}>
                <div className={styles.anekTamilAboutUs}>
                    <h2>About <span>IEEE Industry Applications Society (IAS) </span></h2>
                </div>

                <div className={styles.aboutUsInfo}>
                    {/* <div className={styles.anekTamilAboutUsInfo}>IEEE NEI-ECCE 2025</div> */}
                    <p className={styles.anekTamilAboutUsPara}>
                    <span>IEEE Industry Applications Society (IAS) </span> is the largest special interest IEEE society and a world leader in the advancement of science and technology linking academia & industry for promoting safe, sustainable, reliable, economical and smart Electrical and Electronic Systems; blending the technology, innovation and exchange of ideas on recent advancements in technology which sets benchmarks for future research and for the fortification of the scientific community. Industry Applications Society stimulates the advancement of electrical and electronic engineering industry in design, development, manufacturing and application of smart electrical systems, equipment’s, apparatus, devices, industry processes and its commercialization while offering industry leadership in energy conservation, environmental health and safety issues. IAS also facilitates the creation of voluntary engineering standards and recommended practices; and the professional development of its global membership.
                    </p>
                    <br />
                    
                </div>
            </div>
            <div className={styles.aboutUs}>
                <div className={styles.anekTamilAboutUs}>
                    <h2>About <span>IEEE Silchar Subsection</span></h2>
                </div>
                <div className={styles.aboutUsInfo}>
                    <p className={styles.anekTamilAboutUsPara}>
                        <span>IEEE Silchar Subsection </span>
                        came into existence on 26th June 2021 with the commendable efforts from the IEEE community at NIT Silchar and other IEEE Members from the North-Eastern India region. IEEE Silchar Subsection will have geographical reach over higher educational institutions in Assam, Tripura, Mizoram, Manipur, and Nagaland states of the North-Eastern Part of India in respect of activities of IEEE. The subsection works for creating opportunity and space in the line of IEEE mandate to advance technology for the benefit of humanity. The subsection looks at various technical activities, including facilitating Technical Co-Sponsorship for Conferences, Conducting Workshops, Technical Seminars, Distinguished Lecture programs, Colloquiums, and other possible technical activities. The subsection is actively engaged in bringing student members into various activities through the student chapters.
                    </p>
                </div>
                <div className={`${styles.aboutVideoSection} flex items-center justify-center`}>
                
                
                <iframe id="about-video" width="560" height="315" src="https://www.youtube.com/embed/84QRlmUOk54?si=KJm_ThYnZde9F-5H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
            </div><br></br><br></br><br></br>


           
            
           
        </div>
    );
};

export default AboutUsComponent;
