import styles from "./Tracks.module.scss";

const Tracks = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>
          <b>Conference<span> Tracks</span></b>
        </h1>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">Track 1:</h3>
            <h2>Power Conversion Technologies for Transportation Electrification and Sustainable Energy Integration</h2>
          </div>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">Track 2:</h3>
            <h2>Modeling and Control of Energy Efficient Drives for Electric Transportation (LAND, AIR AND SEA)</h2>
          </div>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">Track 3:</h3>
            <h2>Smart and Sustainable Charging Infrastructure for e-Mobility</h2>
          </div>
          
         
        </div>
        <div className={styles.right}>
          
          <div className={styles.lcard}>
            <h3 className=" font-semibold">Track 4:</h3>
            <h2>Energy Conversion and Management for Sustainable Smart Energy Systems and Rural Electrification </h2>
          </div>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">Track 5:</h3>
            <h2>Computational Intelligence, Cyber Security and IoT Applications for Energy Efficiency and Conservation</h2>
          </div>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">Track 6:</h3>
            <h2>Automation, Control and Digitisation for Industry Applications</h2>
          </div>
        
        </div>
      </div>
      <br></br><br></br>
      <div className={styles.header}>
        <h1>
          <b>Special Session<span> Tracks</span></b>
        </h1>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
        <div className={styles.bg1}>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">SS 1 :</h3>
            <h2>Advances in Control and Operation of Inverter-Dominated Power Distribution System</h2>
          </div></div>
          
          <div className={styles.bg3}>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">SS 3:</h3>
            <h2>Transformative Solar Energy Solutions for Next-Generation Power and Mobility
</h2>
          </div></div>
          <div className={styles.bg5}>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">SS 5:</h3>
            <h2> Artificial Intelligence and Machine Learning for Smart, Resilient, and Sustainable Energy Systems</h2>
          </div></div>
          <div className={styles.bg7}>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">SS 7:</h3>
            <h2> Advances in Wired and Wireless Charging Infrastructure for Sustainable Vehicular Technologies</h2>
          </div></div>
          
         
        </div>
        <div className={styles.right}>
        <div className={styles.bg2}>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">SS 2 :</h3>
            <h2>Protection Solutions for Inverter Based Resource Dominated Smart Power System (PS-IBR-SPS)</h2>
          </div></div>
        <div className={styles.bg4}>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">SS 4:</h3>
            <h2>Stationary and Mobile battery storage for Advancing grid
            Resilience and flexibiliTy (SMART) </h2>
          </div></div>
          
          <div className={styles.bg6}>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">SS 6:</h3>
            <h2>Hydrogen Fuel Cells and Hybrid Electric Vehicles: Innovations in Control, Design, and Policy for Sustainable e-Mobility.</h2>
          </div></div>
         
        
        </div>
      </div>
    </div>
  );
};
export default Tracks;
