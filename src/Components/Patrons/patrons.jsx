import styles from "./patrons.module.scss";

const Patrons = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.heading} text-center p-5`}>CHIEF PATRONS</h1>
      <div className={styles.card__container1}>
        <div className={styles.card__article}>
          <img
            src="/patrons/director.jpg"
            alt=""
            className={styles.card__img}
          /><br></br>
           <h3 className={styles.card__title}>Prof. Dilip Kumar Baidya</h3>
            <span className={styles.card__description}>
              Director, NIT Silchar
            </span>

          {/* <div className={styles.card__data}>
            <h2 className={styles.card__title}>Prof. Dilip Kumar Baidya</h2>
            <span className={styles.card__description}>
              Director, NIT Silchar
            </span>
          </div> */}
        </div>

        <div className={styles.card__article}>
          <img src="/patrons/skch.jpeg" alt="" className={styles.card__img} /><br></br>
          <h3 className={styles.card__title}>Prof. Suparna Kar Chowdhury</h3>
            <span className={styles.card__description}>
              Chair, IEEE Kolkata Section
            </span>

          {/* <div className={styles.card__data}>
            <h3 className={styles.card__title}>Prof. Suparna Kar Chowdhury</h3>
            <span className={styles.card__description}>
              Chair, IEEE Kolkata Section
            </span>
          </div> */}
        </div>
      </div>
      <br></br>
      <h1 className={`${styles.heading} text-center p-5`}>PATRONS</h1>
      <div className={styles.card__container2}>
        <div className={styles.card__article}>
          <img src="/patrons/nsinha.jpg" alt="" className={styles.card__img} />
          <br></br>
          <h3 className={styles.card__title}>Prof. N. Sinha</h3>
            <span className={styles.card__description}>NIT Silchar</span>

          {/* <div className={styles.card__data}>
            <h2 className={styles.card__title}>Prof. N. Sinha</h2>
            <span className={styles.card__description}>NIT Silchar</span>
          </div> */}
        </div>

        <div className={styles.card__article}>
          <img
            src="/patrons/fatalukdar.png"
            alt=""
            className={styles.card__img}
          /><br></br><h3 className={styles.card__title}>Prof. F. A. Talukdar</h3>
            <span className={styles.card__description}>
              Chair, IEEE Silchar Subsection
            </span>

          {/* <div className={styles.card__data}>
            <h2 className={styles.card__title}>Prof. F. A. Talukdar</h2><br></br>
            <span className={styles.card__description}>
              Chair, IEEE Silchar Subsection
            </span>
          </div> */}
        </div>

        <div className={styles.card__article}>
          <img src="/patrons/bk.jpg" alt="" className={styles.card__img} /><br></br>
          <h3 className={styles.card__title}>Prof. B. K. Roy</h3>
            <span className={styles.card__description}>
              {" "}
              Chair-Elect., IEEE Silchar Subsection
            </span>

          {/* <div className={styles.card__data}>
            <h2 className={styles.card__title}>Prof. B. K. Roy</h2>
            <span className={styles.card__description}>
              {" "}
              Chair-Elect., IEEE Silchar Subsection
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Patrons;
