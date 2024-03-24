import styles from "./patrons.module.scss";

const Patrons = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.heading} text-center p-5`}>Chief Patrons</h1>
      <div className={styles.card__container1}>
        <article className={styles.card__article}>
          <img
            src="/patrons/director.jpg"
            alt=""
            className={styles.card__img}
          />

          <div className={styles.card__data}>
            <h2 className={styles.card__title}>Prof. Dilip Kumar Baidya</h2>
            <span className={styles.card__description}>
              Director, NIT Silchar
            </span>
          </div>
        </article>

        <article className={styles.card__article}>
          <img src="/patrons/skch.jpeg" alt="" className={styles.card__img} />

          <div className={styles.card__data}>
            <h2 className={styles.card__title}>Prof. Suparna Kar Chowdhury</h2>
            <span className={styles.card__description}>
              Chair, IEEE Kolkata Section
            </span>
          </div>
        </article>
      </div>
      <h1 className={`${styles.heading} text-center p-5`}>Patrons</h1>
      <div className={styles.card__container2}>
        <article className={styles.card__article}>
          <img src="/patrons/nsinha.jpg" alt="" className={styles.card__img} />

          <div className={styles.card__data}>
            <h2 className={styles.card__title}>Prof. N. Sinha</h2>
            <span className={styles.card__description}>NIT Silchar</span>
          </div>
        </article>

        <article className={styles.card__article}>
          <img
            src="/patrons/fatalukdar.png"
            alt=""
            className={styles.card__img}
          />

          <div className={styles.card__data}>
            <h2 className={styles.card__title}>Prof. F. A. Talukdar</h2>
            <span className={styles.card__description}>
              Chair, IEEE Silchar Subsection
            </span>
          </div>
        </article>

        <article className={styles.card__article}>
          <img src="/patrons/bk.jpg" alt="" className={styles.card__img} />

          <div className={styles.card__data}>
            <h2 className={styles.card__title}>Prof. B. K. Roy</h2>
            <span className={styles.card__description}>
              {" "}
              Chair-Elect., IEEE Silchar Subsection
            </span>
          </div>
        </article>
      </div>
    </div>
  );
};
export default Patrons;
