import React from "react";
import styles from '../Pages/Aboutus.module.scss'
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/header";
// import Footer from "../Components/Footer/Footer";

const Aboutus = () =>{
    return(
        <>
        <Header/>
        <Navbar/>
        
        <hr></hr>
        <br></br>
        <div className={styles.nit}>
            <div className={styles.header}>
                <h2>About <span>NIT Silchar</span></h2>
            </div>

            <div className={styles.aboutUsInfo}>
                <p className={styles.AboutUsPara}>
                    <span>With a vision </span>to train and transform young professionals into responsible citizens for the betterment of the society, NIT Silchar produces skilled and trained industry-ready professionals through imparting quality technical education and acts as the center of excellence for engineering and scientific research. Being an integral part of the dynamic research community, NIT Silchar focuses on designing engineering and management programs that instill leadership and teamwork and carries a global appeal to comply with global technical developments and market demands. The research conducive green campus encourages the young minds to develop attributes and knowledge beyond the constraints of traditional classroom teaching and learning. NITS has been able to create a niche of its own and become the most preferred institute in the eastern region of the country. It stands as a humble spectacle where tradition meets vogue, aspiration meets inspiration and regional excellence defines global benchmarks.
                </p>
                <br />
            </div>

            <div className={styles.pics}>
                <div className={styles.img1}>
                    <img src='/HomeSlider/conference6.jpg' alt='Conference at NIT Silchar'/>
                </div>
                <div className={styles.img2}>
                    <img src='/HomeSlider/conference7.jpeg' alt='Another conference at NIT Silchar'/>
                </div>
            </div>
        </div>
        <div className={styles.departm}>
            <div className={styles.header}>
                <h2>About <span>The Department</span></h2>
            </div>
            <hr></hr>
            <br></br>

            <div className={styles.aboutUsInfo}>
                <div className={styles.pics}>
                    <img src='/HomeSlider/ee.jpeg' alt='Electrical Engineering Department'/>
                </div>
                <div>
                    <p className={styles.AboutUsPara}>
                        <span>The Department of Electrical Engineering of NIT Silchar </span>is one of the finest and well-equipped Electrical departments of the North-East region. It boasts of having highly qualified faculties specialized in diverse fields with an unparallel level of expertise in their field. The Department offers B.Tech. in Electrical Engineering, M.Tech. in Power and Energy Systems Engineering & Control and Industrial Automation, and Ph.D in Electrical Engineering. The department is equipped with state of art laboratories to cater research in the frontier research areas of Electrical Engineering facilitating a commendable research ambience in the department. The expertise and dedication of the faculty members along with infrastructural facilities coupled with the perseverance of the students have catapulted the branch to the top league.
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
                        <span>Silchar </span>
                        nestled in the southern expanse of Assam, it is a charming city rich in history, culture, and natural beauty. Its colonial past, reflected in its architecture, merges seamlessly with Assamese and Bengali traditions, creating a vibrant cultural tapestry. Surrounded by verdant hills and the tranquil Barak River, Silchar offers a serene retreat for nature lovers. Moreover, its culinary landscape, blending Assamese and Bengali flavors, promises a delightful gastronomic experience.The tea gardens in Silchar are known for their lush greenery and contribute significantly to Assam's renowned tea industry, offering scenic beauty and producing high-quality tea. Whether you're exploring its historical sites, partaking in cultural festivals, or simply indulging in its culinary delights, Silchar invites visitors to immerse themselves in the essence of Assam's charm and allure.
                    </p>
                </div>   
                <div className={styles.pics}>
                    <img src='/HomeSlider/silch.jpeg' alt='Scenic view of Silchar'/>
                </div>
            </div>
        </div>
        <div className={styles.tour}>
            <div className={styles.header}>
                <h2>Tourist Attractions In <span>North-East India</span></h2>
            </div>
            <br></br>
            <div className={styles.pics}>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src='/tourism/tumjang.jpg' alt='Tumjang Peak, Haflong'/>
                    </div> 
                    <div className={styles.info}>
                        <h3>Tumjang Peak, Haflong</h3>
                        <h4>Distance: 85km , via NH37</h4>
                         <h4>Time: 2 hrs 38 min</h4>
                       
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src='/tourism/son-beel.png' alt='Son-Beel, Karimganj'/>
                    </div> 
                    <div className={styles.info}>
                        <h3>Son Beel,The Second Largest Wetland in Asia</h3>
                        <h4>Distance: 85km, via NH37</h4>
                         <h4>Time: 2 hrs 38 min</h4>
                       
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src='/tourism/kakochang.jpg' alt='Kakochang Water Falls, Kaziranga'/>
                    </div> 
                    <div className={styles.info}>
                        <h3>Kakochang Water Falls, Kaziranga</h3>
                        <h4>Distance: 400 kilometers from Silchar</h4>
                        <h4>Time: Approx. 12 hrs</h4>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src='/tourism/borail.jpg' alt='Borail Eco-Camp/Borail Wildlife sanctuary
</h3>'/>
                    </div> 
                    <div className={styles.info}>
                        <h3>Borail Eco-Camp/Borail Wildlife sanctuary
</h3>
                        <h4>Distance: 42 Km , Via  NH306</h4>
                        <h4>Time: 1 hrs 30 min </h4>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src='/tourism/borakhai.jpg' alt='Borakhai Tea Gardens'/>
                    </div> 
                    <div className={styles.info}>
                        <h3>Borakhai Tea Gardens
</h3>
                        <h4>Distance: 1.5 Km, Walking distance</h4>
                        <h4>Time: 15 min </h4>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src='/tourism/durtlang.jpg' alt='Durtlang hills'/>
                    </div> 
                    <div className={styles.info}>
                        <h3>Durtlang Hills, Mizoram
</h3>
                        <h4>Distance: 180 km from Silchar</h4>
                        <h4>Time: Approx. 6 hours </h4>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src='/tourism/kamakhya.jpg' alt='Maa Kamakhya Mandir, Guwahati'/>
                    </div> 
                    <div className={styles.info}>
                        <h3>Maa Kamakhya Mandir, Guwahati</h3>
                        <h4>Distance: 300 kilometers from Silchar</h4>
                        <h4>Time: Approx. 10 hours.</h4>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src='/tourism/cherapunji.jpg' alt='Seven Sister Falls, Cherrapunji'/>
                    </div> 
                    <div className={styles.info}>
                        <h3>Seven Sister Falls, Cherrapunji</h3>
                        <h4>Distance:  250 kilometers from Silchar</h4>
                        <h4>Time: Approx. 9 hours</h4>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src='/tourism/meghalaya.jpg' alt='Living Roots Bridge, Meghalaya'/>
                    </div> 
                    <div className={styles.info}>
                        <h3>Living Roots Bridge, Meghalaya</h3>
                        <h4>Distance:200 kilometers from Silchar</h4>
                        <h4>Time: Approx. 8 hrs </h4>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        </>
    )
}
export default Aboutus;
