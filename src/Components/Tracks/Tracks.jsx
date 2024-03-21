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
            <h3 className=" font-semibold">TT1:</h3>
            <h2>Power Converters, Devices, EMI/EMC and Packaging</h2>
          </div>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">TT3:</h3>
            <h2>Transportation</h2>
          </div>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">TT5:</h3>
            <h2>Renewable Energy Systems and Energy Storage</h2>
          </div>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">TT7:</h3>
            <h2>Power Engineering Educations and Issues</h2>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">TT2:</h3>
            <h2>Electrical Machines and Industrial Drives</h2>
          </div>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">TT4:</h3>
            <h2>Control and Automation</h2>
          </div>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">TT6:</h3>
            <h2>Smart Grids & Power Quality</h2>
          </div>
          <div className={styles.lcard}>
            <h3 className=" font-semibold">TT8:</h3>
            <h2>Applications of AI and ML Techniques to Power Electronics</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tracks;
