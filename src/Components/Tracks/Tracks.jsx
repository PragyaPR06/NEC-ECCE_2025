import styles from "./Tracks.module.scss";

const Tracks = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>
          <b>Conference Tracks</b>
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
    </div>
  );
};
export default Tracks;
