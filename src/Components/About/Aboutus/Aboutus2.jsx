import React from "react";
import styles from '../Aboutus/Aboutus.module.scss'
const Aboutus = () =>{
    return(
        <>
            <div className={styles.header}>
                <h1>About Us</h1>
            </div>
            <br></br><br></br>
            <div className={styles.nit}>
                <div className={styles.header}>
                    <h2>About <span>NIT Silchar</span></h2>
                </div>

                <div className={styles.aboutUsInfo}>
                    
                    <p className={styles.AboutUsPara}>
                    <span>National Institute Of Technology, Silchar </span> With a vision to train and transform young professionals into responsible citizens for the betterment of the society, NIT Silchar produces skilled and trained industry-ready professionals through imparting quality technical education and acts as the center of excellence for engineering and scientific research. Being an integral part of the dynamic research community, NIT Silchar focuses on designing engineering and management programs that instill leadership and teamwork and carries a global appeal to comply with global technical developments and market demands. The research conducive green campus encourages the young minds to develop attributes and knowledge beyond the constraints of traditional classroom teaching and learning. NITS has been able to create a niche of its own and become the most preferred institute in the eastern region of the country. It stands as a humble spectacle where tradition meets vogue, aspiration meets inspiration and regional excellence defines global benchmarks.
                    </p>
                    <br />
                </div>
                <div className={styles.pics}>

                </div>
            </div>
            <div className={styles.departm}>
                <div className={styles.header}>
                    <h2>About <span>The Department</span></h2>
                </div>

                <div className={styles.aboutUsInfo}>
                <div className={styles.pics}>
                    
                </div>
                    <div>
                    <p className={styles.AboutUsPara}>
                    <span>The Department of Electrical Engineering of NIT Silchar</span>is one of the finest and well-equipped Electrical departments of the North-East region. It boasts of having highly qualified faculties specialized in diverse fields with an unparallel level of expertise in their field. The Department offers B.Tech. in Electrical Engineering, M.Tech. in Power and Energy Systems Engineering & Control and Industrial Automation, and Ph.D in Electrical Engineering. The department is equipped with state of art laboratories to cater research in the frontier research areas of Electrical Engineering facilitating a commendable research ambience in the department. The expertise and dedication of the faculty members along with infrastructural facilities coupled with the perseverance of the students have catapulted the branch to the top league.
                    </p>
                    </div>   
                </div>
            </div>
            <div className={styles.silchar}>
                <div className={styles.header}>
                    <h2>About <span>Silchar</span></h2>
                </div>

                <div className={styles.aboutUsInfo}>
                
                    <div>
                    <p className={styles.AboutUsPara}>
                    <span>Silchar</span>is one of the finest and well-equipped Electrical departments of the North-East region. It boasts of having highly qualified faculties specialized in diverse fields with an unparallel level of expertise in their field. The Department offers B.Tech. in Electrical Engineering, M.Tech. in Power and Energy Systems Engineering & Control and Industrial Automation, and Ph.D in Electrical Engineering. The department is equipped with state of art laboratories to cater research in the frontier research areas of Electrical Engineering facilitating a commendable research ambience in the department. The expertise and dedication of the faculty members along with infrastructural facilities coupled with the perseverance of the students have catapulted the branch to the top league.
                    </p>
                    </div>   
                    <div className={styles.pics}>
                    
                </div>
                </div>
            </div>
            
        </>
    )
}
export default Aboutus;