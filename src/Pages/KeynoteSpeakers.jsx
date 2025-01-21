import React, { Fragment } from "react";
import styles3 from "../Pages/KeynoteSpeakers.module.css";
import Header from "../Components/Header/header";
import Navbar from "../Components/Navbar/Navbar";

const KeynoteSpeakers = () => {
  const speakers = [
    {
      id: 1,
      name: "Prof. Sairaj Dhople",
      info: "Department of Electrical and Computer Engineering University of Minnesota Minneapolis, MN, USA",
      description:
        "Sairaj V. Dhople received the B.S., M.S., and Ph.D. degrees in electrical engineering, in 2007, 2009, and 2012, respectively, from the University of Illinois, Urbana-Champaign, Urbana, IL, USA. He is currently an Assistant Professor with the Department of Electrical and Computer Engineering, University of Minnesota, Minneapolis, MN, USA, where he is affiliated with the Power and Energy Systems research group. His research interests include modeling, analysis, and control of power electronics and power systems with a focus on renewable integration.",
      image:
        "https://ieeexplore.ieee.org/mediastore/IEEE/content/freeimages/63/10413575/10294199/dhopl-3327234-small.gif",
    },
    {
      id: 2,
      name: "Prof. SN Singh",
      info: "Ph.D. Electrical (Power Systems), Indian Institute of Technology, Kanpur",
      description:
        "Prof. S. N. Singh is currently the Director of Atal Bihari Vajpayee Indian Institute of Information Technology and Management, Gwalior, on leave from his role as Professor (HAG) at IIT Kanpur. He holds M.Tech. and Ph.D. degrees in Electrical Engineering from IIT Kanpur. Prior to this, he served in roles at IIT Roorkee, Asian Institute of Technology (Bangkok), and as Vice-Chancellor of Madan Mohan Malaviya University of Technology (2017–2020).Prof. Singh is a Fellow of IEEE, INAE, IET, and other prestigious institutions. He has received numerous accolades, including the IEEE Educational Activity Board Award (2013) and IEEE IAS Outstanding Educator/Mentor Award (2021). His research interests span power system optimization, renewable energy integration, and FACTS technology.With over 500 publications, 40 Ph.D. supervisions, and multiple textbooks to his credit, his contributions to education and research are globally recognized. His NPTEL video lectures on HVDC Transmission and Power System Operation & Control are widely followed. Prof. Singh has also held key positions in IEEE, including Chairman of IEEE UP Section and Vice-Chair for R10 Technical Activities.",
      image: "https://www.iiitm.ac.in/images/demo/teachers/1650440085_Prof.-Sri-Niwas-Singh.jpg",
    },
    {
        id: 3,
        name: "Prof. Jian Sun",
        info: " Professor, Department of Electrical, Computer, and Systems Engineering (ECSE), Rensselaer Polytechnic Institute. Director, New York State Center for Future Energy Systems (CFES)",
        description:
          "Sun received his Dr.-Ing. degree from the University of Paderborn, Germany. Before joining Rensselaer in 2002, he was a Principal Engineer at Rockwell Collins and a Post-Doc Fellow at Georgia Institute of Technology. He is a Professor in the ECSE Department and Director of the Center for Future Energy Systems (CFES), funded by New York State. Sun's research focuses on power electronics, particularly in renewable energy, HVDC transmission, and power systems. He developed the small-signal sequence impedance theory, which has addressed real-world stability issues and influenced new grid codes and industry standards. As Director of CFES, he oversees research, education, and industry collaborations. Sun is a Fellow of IEEE, served as Editor-in-Chief of IEEE Power Electronics Letters, and holds several awards, including the Modeling and Control Technical Achievements Award and the R. David Middlebrook Achievement Award. He has over 200 publications and holds 11 US patents and 1 European patent.",
        image:
          "https://faculty.rpi.edu/sites/default/files/2021-12/Jian%2520Sun%2520Photo.jpg",
      },
      {
        id: 4,
        name: "Prof. Subhas Mukhopadhyay",
        info: "Professor of Mechanical/Electronics Engineering with the School of Engineering, Macquarie University, NSW 2109, Australia",
        description:
          "Dr. Subhas Chandra Mukhopadhyay is a Professor of Mechanical/Electronics Engineering at Macquarie University, Australia, where he also leads the Mechatronics Engineering Programme and serves as Director of International Engagement. His research focuses on sensors, instrumentation, wireless sensor networks, IoT, mechatronics, robotics, and drones. He has authored 14 patents, 10 books, over 450 papers, and edited 18 conference proceedings and 40 journal special issues. A Fellow of IEEE (USA), IET (UK), and IETE (India), he is an editor for IEEE Sensors Journal, IEEE Transactions on Instrumentation and Measurements, and IEEE Review of Biomedical Engineering. Dr. Mukhopadhyay founded and chairs the IEEE Instrumentation and Measurement Society and IEEE Sensors Council New South Wales Chapters. He was a Distinguished Lecturer for the IEEE Sensors Council (2017-2022) and has delivered over 450 talks. He has organized 20+ international conferences, including as General Chair for IEEE Sensors Conferences in 2009 and 2021.",
        image:
          "https://researchers.mq.edu.au/files-asset/17788419/Subhas.jpg?w=160&f=webp",
      },
      {
        id: 5,
        name: "Prof. Virendra Kumar Vijay",
        info: " Professor, CRDT, Indian Institute of Technology Delhi",
        description:
          "Prof Virendra Kumar Vijay is most acclaimed and internationally known professor in biogas and rural technologies. His concepts on linking higher educational institutes for village development and biogas purification and bottling technology were well adopted by Government of India and launched as programs by concerned ministry in the government. Prof. Vijay and his team developed the concept and vision of Unnat Bharat Abhiyan ( Movement for Progressive India), which was adopted by MoE, GOI in 2014. The program aims to create a virtuous cycle between society and an inclusive academic system by providing knowledge of educational institutes, experience of voluntary organizations and resources of government to support holistic rural development. He got patent on biogas small scale biogas upgradation technology which has been licensed to 7 industries and many gaushalas in field areas. He has been operating India’s first biogas car for last 6 years which has crossed more than 50000 km run on biogas. Based on the data by Indian Institute of technology Delhi on performance of engine, emission de-rating and degradation on use of upgraded biogas in the car, Bureau of Indian Standard has formulated biomethane (bio-CNG) standard in India in 2013 (IS:16087).",
        image:"/speaker/iitd.jpg"
          // "https://media.licdn.com/dms/image/v2/C4D03AQGWsNjDvvA6XA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516998416552?e=1743033600&v=beta&t=TvSbL3EWD7azVGZx_8q4dwQflHqzFsG8R_gV_LnSxkM",
      },
      {
        id: 6,
        name: "Dr. Kouki Matsuse",
        info: "Professor Emeritus, Department of Electronics and Bioinformatics, Meiji University, Japan",
        description:
          "Kouki Matsuse received his B.E., M.E., and Ph.D. in electrical engineering from Meiji University, Japan, in 1966, 1968, and 1971. He joined the faculty of Meiji University in 1971 and became a Professor in 1979, later becoming Professor Emeritus in 2014. Matsuse was a Visiting Professor at Iowa State University in 1980 and a Guest Professor at Tsinghua University in 1998. He has authored or coauthored 102 IEEE papers, 230 conference papers, and 17 books. He holds 17 patents, including 4 U.S. and 2 European patents. Matsuse has contributed to standards for power electronics and is a Fellow of the National Academy of Inventors.",
        image:
          "https://ethw.org/w/images/d/d2/Kouki_Matsuse.jpg",
      },
  ];

  return (
    <Fragment>
      <Header />
      <Navbar />
      <section className={styles3.header}>
        Keynote <span>Speakers</span>
        <br />
      </section>
      <hr />
      {speakers.map((speaker, index) => (
        <section
          key={speaker.id}
          className={`${styles3.profileSection} ${
            index % 2 === 1 ? styles3.reverse : ""
          }`}
        >
          <div className={styles3.profileImage}>
            <img src={speaker.image} alt={speaker.name} />
          </div>
          <div className={styles3.profileDetails}>
            <h3 className={styles3.speakerName}>{speaker.name}</h3>
            <h3 className={styles3.keynoteSpeakerInfo}>{speaker.info}</h3>
            <p className={styles3.speakerDescription}>
              {speaker.description}
            </p>
          </div>
        </section>
      ))}
    </Fragment>
  );
};

export default KeynoteSpeakers;
