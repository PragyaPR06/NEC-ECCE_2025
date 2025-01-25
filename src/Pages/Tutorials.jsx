import React, { Fragment } from "react";
import styles3 from "../Pages/KeynoteSpeakers.module.css";
import Header from "../Components/Header/header";
import Navbar from "../Components/Navbar/Navbar";

const Tutorials = () => {
  const speakers = [
    {
      id: 1,
      name: "Dr. Avanish Tripathi",
      info: "Assistant Professor, Department of Energy Science and Engineering, IIT Delhi",
      description:
        "Dr. Avanish received his B.Tech. degree in Electrical Engineering from Indian Institute of Technology (BHU), Varanasi in 2009. He was awarded M.S. and PhD degrees from Department of Electrical Engineering, IISc Bangalore in 2017. MS and PhD works were focused towards Low Switching Frequency Pulse Width Modulation for high-power and/or high-speed induction motor drives. Dr. Avanish has gained industry experience as operations officer in Indian Oil Corporation (2009-2011) after B.Tech.; as Sr. Research Engineer in Delta Electronics, Bangalore (2017-2019) & Texas Instruments, Bangalore (2019-2020) post Ph.D. At Delta Electronics, his work was focused on design and development of 3.5 MW propulsion converter meant for Indian Railways. He was awarded ‘Employee of the Quarter’ award for his work at Delta Electronics. Later on, Dr. Avanish has served as Assistant Professor in Department of Electrical Engineering, IIT Roorkee (2020-2022). He has been part of Department of Energy Science and Engineering, IIT Delhi as Assistant Professor since October’2022. ",
      image:
        "https://dese.iitd.ac.in/public/storage/faculty_images/faculty_XZv27r19rg.PNG",
    },
    {
      id: 2,
      name: "Dr. Sivaneasan Bala Krishnan",
      info: "Associate Professor, Deputy Director, SIT Teaching and Learning Academy",
      description:
        "Dr Sivaneasan received the B.Eng. and Ph.D. degrees in Electrical and Electronic Engineering from Nanyang Technological University, Singapore, in 2007 and 2012 respectively. In 2011, he joined the School of Electrical and Electronic Engineering, Nanyang Technological University, Singapore, as a Research Engineer and subsequently as a Research Fellow until 2015. He then joined Nanyang Polytechnic as a Lecturer in 2015. In 2019, he joined Singapore Institute of Technology as an Assistant Professor and subsequently promoted to an Associate Professor in 2023. He is registered as Chartered Engineer with UK Engineering Council. He is also IEEE Industry Applications Society (IAS) Distinguished Lecturer for IEEE Region 10. Dr Sivaneasan conducts research and development in the areas of power engineering in particular microgrids and smart grid technologies. He has published more than 45 technical papers. He also co-authored two scholarly book chapter on Vehicle-to-Grid (V2G) for a book titled Energy Storage for Smart Grids: Planning and Operation for Renewable and Variable Energy Resources (VERs) and on Impact of EV Charging for a book titled Advanced Concepts and Technologies for Electric Vehicles. In addition, he also won the “Best Innovation in Renewable Energy” award at National Instruments ASEAN Graphical System Design Achievement Awards for his work on a functional smart grid prototype. His work on IIoT based electrical asset management system at a local shipyard won the Best Paper Award at the IEEE International Conference in Power Engineering Applications (ICPEA 2022).",
      image: "https://www.singaporetech.edu.sg/directory/sites/directory/files/styles/profile_picture/public/profile-picture/A101501%20Sivaneasan%20Bala%20Krishnan%202024.jpg?itok=M1I72xwm",
    },
    {
        id: 3,
        topic:"Design and Engineering of High Power Converters",
        name: "Dr. Sujit K. Biswas",
        info: " Dean (Academic) & Professor, Dept. of Electrical Engg. St. Thomas’ College of Engineering and Technology, Kolkata, India. Former Professor & Head, Dept. of Electrical Engg., Jadavpur University, Kolkata, India",
        description:
          "Sujit K. Biswas was born in Kolkata, India. He received the B.E.E. degree from Jadavpur University, Kolkata, India, in 1978, and the M.E. and Ph.D. degrees from the Indian Institute of Science, Bangalore, India, in 1980 and 1986, respectively, all in electrical engineering. He has been a member of several National and International Committees and has served as an External Expert to several Government of India organizations. His research interests include static power conversion, electrical drives, power semiconductor applications, magnetics, and applied electronics.,Prof. Biswas is a Life Fellow of the Institute of Electronics & Telecommunication Engineers (India) and the Institution of Engineers (India). Currently, he is the Chairman of the IEEE Kolkata Section. He received several awards, amongst which are the Indian National Science Academy Medal for young Scientists and the IETE-Bimal Bose Award for “Outstanding contribution in the field of power electronics.",
        image:
          "http://www.sujitkbiswas.com/wp-content/uploads/2019/03/s-k-biswas-898x1289.png",
      },
      {
        id: 4,
        name: "Dr. Sivakumar Nadarajan",
        info: "PhD (Electrical and Power Engineering), National University of Singapore, Singapore",
        description:
          "Dr. Sivakumar Nadarajan joined SIT in July 2024, he obtained his PhD in electrical engineering from National University of Singapore, Singapore in 2016. Prior to SIT, he worked in Rolls-Royce, Singapore for 15 years as a technical manager and Head of CoE – Electrical equipment heath monitoring. He has accumulated around 19 years of industrial experiences from aerospace, marine, automotive, and other industrial sectors. He also worked as a lecturer in an Anna university affiliated college in Chennai, India, for a year where he thought electrical engineering modules for undergraduate and post graduate students, his research interests primarily in the field of condition monitoring and failure prognosis of safety and mission critical applications, architect safety critical electrical systems, applied AI for prognostic health management, fault tolerant electrical machines, medium fidelity modelling and simulation, and electrical drives.",
        image:
          "https://www.singaporetech.edu.sg/directory/sites/directory/files/styles/profile_picture/public/profile-picture/A103675%20Nadarajan%20Sivakumar.jpg?itok=33kDIgO8",
      },
  ];

  return (
    <Fragment>
      <Header />
      <Navbar />
      <section className={styles3.header}>
        Tutorial <span>Speakers</span>
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
            <h2 className={styles3.topic}>{speaker.topic}</h2>
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

export default Tutorials;
