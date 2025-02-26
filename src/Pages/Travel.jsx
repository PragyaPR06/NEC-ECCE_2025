
import styles from "../Pages/Travel.module.scss";
import Header from "../Components/Header/header";
import Navbar from "../Components/Navbar/Navbar";
export default function Travel() {
  return (
   
    <div className={styles.container }>
     <Header></Header>
     <Navbar></Navbar>
    <h2 className={styles.instructionsHeading}>How to reach <span>NIT Silchar</span></h2>
    
    <p className={styles.info}>
       <strong> NIT Silchar</strong> is well connected to the city of Silchar, which can be reached primarily via air 
        and rail transport. If you are an international traveller, it is important to confirm that you possess a valid visa 
        before entering India. <strong>Please familiarize yourself with the current travel requirements 
        and any recently issued travel advisories related to your trip to India.</strong>
    </p>
<br></br>
    <div className={styles.card}>
        <div class={styles.card_header}>
           <strong><h2>1. Closest International Airports to Silchar</h2></strong> 
        </div><br></br>
        <div class={styles.card_content}>
            <ul>
                <li>
                    <strong>Lokpriya Gopinath Bordoloi International Airport, Guwahati International Airport (GAU)</strong>
                    <p>
                        From Guwahati International Airport, one can take a domestic flight to Silchar 
                        Airport (IXS). Both routes are viable depending on your travel preferences and 
                        schedules. Alternatively, there is a train from Guwahati Railway Station to Silchar 
                        Railway Station, which takes about 12 hours to complete the journey.
                    </p>
                </li>
                <li>
                    <strong>Netaji Subhash Chandra Bose International Air Airport, Kolkata International Airport (CCU)</strong>
                    <p>
                        From Kolkata International Airport one can take a domestic flight to Silchar Airport 
                        (IXS).
                    </p>
                </li>
            </ul>
        </div>
    </div>
<br></br>
{/* <div className={styles.img1}>
                    <img src='/tourism/map.jpg' alt='Conference at NIT Silchar'/>
                </div> */}
    <div  className={styles.card}>
        <div class={styles.card_header}>
            <strong><h2>2. Air Connectivity</h2></strong>
        </div><br></br>
        <div class={styles.card_content}>
            <p>
               <strong>Silchar Airport (IXS)</strong>  operates Domestic flights with multiple daily connections. Direct 
                flights available from:
            </p>
            <ul>
                <li>Kolkata (1 hour 10 minutes)</li>
                <li>Guwahati (40 minutes)</li>
                <li>Delhi (connected via Kolkata/Guwahati)</li>
                <li>Odisha (connected via Kolkata)</li>
            </ul>
            <p>
                Major airlines operating: Air India, IndiGo, Alliance Air.<br></br>
                Airport has regular taxi services to NIT Silchar campus.
            </p>
        </div>
    </div>
<br></br>
    <div  className={styles.card}>
        <div class={styles.card_header}>
            <strong><h2>3. Rail Connectivity</h2></strong>
        </div><br></br>
        <div class={styles.card_content}>
            <p>
               <strong>Silchar Railway Station</strong>  is well-connected through broad gauge network. 
                Another nearby railway junction to Silchar, located approximately 30 km from NITS, 
                is Badarpur Railway Station. From Badarpur, it takes about 40 minutes to reach the 
                NIT Silchar campus.
            </p>
            <p>Regular trains available from:</p>
            <ul>
                <li>Guwahati (Lumding-Silchar route)</li>
                <li>Agartala</li>
                <li>New Delhi (via Guwahati)</li>
                <li>Kolkata (via Guwahati)</li>
            </ul>
            <p>Multiple premium trains including:</p>
            <ul>
                <li>Silchar-Sealdah Express</li>
                <li>Barak Valley Express</li>
                <li>Humsafar Express</li>
            </ul>
        </div>
    </div><br></br>

    <div className={styles.card}>
        <div class={styles.card_header}>
            <strong><h2>4. Distance from popular destinations</h2></strong>
        </div><br></br>
        <div class={styles.card_content}>
            <table>
                <thead>
                    <tr>
                        <th>Destination</th>
                        <th>Distance</th>
                        <th>Travel Time (Approx.)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Silchar Airport (IXS) to NIT Silchar</td>
                        <td>43 km</td>
                        <td>1 hour</td>
                    </tr>
                    <tr>
                        <td>Silchar Railway Station to NIT Silchar</td>
                        <td>14 km</td>
                        <td>30 minutes</td>
                    </tr>
                    <tr>
                        <td>Guwahati Airport to Silchar Airport (IXS)</td>
                        <td>330 km</td>
                        <td>40 minutes (by flight)</td>
                    </tr>
                    <tr>
                        <td>Guwahati railway station to Silchar railway station</td>
                        <td>300 km</td>
                        <td>10 hours (by train)</td>
                    </tr>
                    <tr>
                        <td>Kolkata Airport (CCU) to Silchar Airport (IXS)</td>
                        <td>650 km</td>
                        <td>1 hour (by flight)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>

  )
}