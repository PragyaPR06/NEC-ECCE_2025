import styles from "./Tracks.module.css";

const Tracks = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>
          <b>Tracks</b>
        </h1>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">Track 1:</h3>
            <h2>Power Conversion Technologies For Transportation Electification And Sustainable Energy Integration</h2>
          </div>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">Track 2:</h3>
            <h2>Modeling And Control Of Energy Efficienct Drives For Electic Transportation (LAND, AIR AND SEA)</h2>
          </div>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">Track 3:</h3>
            <h2>Smart And Sustainable Charging Infrastructure For E-Mobility</h2>
          </div>
          
         
        </div>
        <div className={styles.right}>
          
          <div className={styles.lcard}>
            <h3 className=" font-semibold">Track 4:</h3>
            <h2>Energy Conversion And Management For Sustainable Smart Energy Systems And Rural Electification </h2>
          </div>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">Track 5:</h3>
            <h2>Computational Intelligence, Cyber Security And Iot Applications For Energy Efficiency And Conservation</h2>
          </div>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">Track 6:</h3>
            <h2>Automation, Control And Digitisation For Industry Applications</h2>
          </div>
        
        </div>
      </div>
    </div>
  );
};
export default Tracks;
