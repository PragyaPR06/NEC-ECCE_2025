import React from 'react';
import styles from '../About/AboutUsComponent.module.scss';

const AboutUsComponent = () => {
    return (
        <div className={`${styles.container} relative pt-[5rem]`}>
            <div className={styles.aboutUs}>
                <div className={styles.anekTamilAboutUs}>
                    <h2>About <span>NEI-ECCE 2025</span></h2>
                </div>
                <div className={styles.aboutUsInfo}>
                    {/* <div className={styles.anekTamilAboutUsInfo}>IEEE NEI-ECCE 2025</div> */}
                    <p className={styles.anekTamilAboutUsPara}>
                    <span>IEEE NE-IECCE 2025,</span> the first Flagship Annual International Conference of IEEE Kolkata Section & Silchar Subsection Industry Applications Society Chapter aims to provide a unique platform to researchers, practitioners, industry delegates, technocrats, and policymakers from academia and industry to share and promote recent research accomplishments and innovations for the sustainable development of industry and society. To cater the future industry demands of Sustainable Energy Conversion and Transport Electrification, this conference aims to put forth the experts working in this area to share their research findings which have a significant impact on modern smart grid, sustainable electric transportation, and control.
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
                    <h2>About <span>NIT Silchar</span></h2>
                </div>
                <div className={styles.aboutUsInfo}>
                    <p className={styles.anekTamilAboutUsPara}>
                        <span>NIT Silchar</span> With a vision to train and transform young professionals into responsible citizens for the betterment of the society, NIT Silchar produces skilled and trained industry-ready professionals through imparting quality technical education and acts as the center of excellence for engineering and scientific research. Being an integral part of the dynamic research community, NIT Silchar focuses on designing engineering and management programs that instill leadership and teamwork and carries a global appeal to comply with global technical developments and market demands. The research conducive green campus encourages the young minds to develop attributes and knowledge beyond the constraints of traditional classroom teaching and learning. NITS has been able to create a niche of its own and become the most preferred institute in the eastern region of the country. It stands as a humble spectacle where tradition meets vogue, aspiration meets inspiration and regional excellence defines global benchmarks.
                    </p>
                </div>
                <div className={`${styles.aboutVideoSection} flex items-center justify-center`}>
                        <iframe
                            id="about-video"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/YmjE5-_z9VM?si=HX1RwneGM_81yKkf"
                            title="YouTube video player"
                            // frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
            </div>
            <div className={styles.aboutUs}>
                <div className={styles.anekTamilAboutUs}>
                    <h2>About <span>The Department</span></h2>
                </div>
                <div className={styles.aboutUsInfo}>
                    <p className={styles.anekTamilAboutUsPara}>
                        <span>The Department of Electrical Engineering of NIT Silchar </span>
                          is one of the finest and well-equipped Electrical departments of the North-East region. It boasts of having highly qualified faculties specialized in diverse fields with an unparallel level of expertise in their field. The Department offers B.Tech. in Electrical Engineering, M.Tech. in Power and Energy Systems Engineering & Control and Industrial Automation, and Ph.D in Electrical Engineering. The department is equipped with state of art laboratories to cater research in the frontier research areas of Electrical Engineering facilitating a commendable research ambience in the department. The expertise and dedication of the faculty members along with infrastructural facilities coupled with the perseverance of the students have catapulted the branch to the top league.
                    </p>
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
            </div>
        </div>
    );
};

export default AboutUsComponent;