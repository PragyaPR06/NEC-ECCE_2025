import styles from "./patrons.module.css";

const Patrons = () =>{
return(<div className={styles.container}>
<h1 className={styles.heading}>Chief Patrons</h1>
<br></br><br></br>
<div className={styles.card__container1}>
<article className={styles.card__article}>
      <img src="/patrons/director.jpg" alt="image" className={styles.card__img}/>

      <div className={styles.card__data}>
         <span className={styles.card__description}>Director, NIT Silchar</span>
         <h2 className={styles.card__title}>Prof. Dilip Kumar Baidya</h2>
         <a href="#" className={styles.card__button}>Read More</a>
      </div>
   </article>

   <article className={styles.card__article}>
      <img src="/patrons/director.jpg" alt="image" className={styles.card__img}/>

      <div className={styles.card__data}>
         <span className={styles.card__description}>Chair, IEEE Kolkata Section</span>
         <h2 className={styles.card__title}>Prof. Suparna Kar Chowdhury</h2>
         <a href="#" className={styles.card__button}>Read More</a>
      </div>
   </article>

</div>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<h1 className={styles.heading}>Patrons</h1>
<br></br><br></br>
<div className={styles.card__container2}>
   <article className={styles.card__article}>
      <img src="/patrons/director.jpg" alt="image" className={styles.card__img}/>

      <div className={styles.card__data}>
         <span className={styles.card__description}>NIT Silchar</span>
         <h2 className={styles.card__title}>Prof. N. Sinha</h2>
         <a href="#" className={styles.card__button}>Read More</a>
      </div>
   </article>

   <article className={styles.card__article}>
      <img src="/patrons/director.jpg" alt="image" className={styles.card__img}/>

      <div className={styles.card__data}>
         <span className={styles.card__description}>Chair, IEEE Silchar Subsection</span>
         <h2 className={styles.card__title}>Prof. F. A. Talukdar</h2>
         <a href="#" className={styles.card__button}>Read More</a>
      </div>
   </article>

   <article className={styles.card__article}>
      <img src="/patrons/director.jpg" alt="image" className={styles.card__img}/>

      <div className={styles.card__data}>
         <span className={styles.card__description}> Chair-Elect., IEEE Silchar Subsection</span>
         <h2 className={styles.card__title}>Prof. B. K. Roy</h2>
         <a href="#" className={styles.card__button}>Read More</a>
      </div>
   </article>
</div>
</div>)
}
export default Patrons;