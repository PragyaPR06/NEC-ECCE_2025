import React, { Fragment } from 'react';
import styles2 from "./Accomodation.module.scss";

import Header from '../Components/Header/header';
import Navbar from "../Components/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Accomodation = () => {

    // Function to show toast notification
    const handleComingSoon = () => {
        toast.success("Coming Soon!", {
            position: "bottom-center",
            autoClose: 3000, // Toast will disappear after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style:{
                fontWeight:"bold",
                color:"darkgreen"
            },
        });
    };

    return (
        <Fragment>
            <Header />
            <Navbar />
            <br />
            <section className={styles2.instructions}>
                <h1 className={styles2.instructionsHeading}>Accomodation <span></span></h1>
                <br />
                <div className={styles2.instructionsContent}>
                    <p>
                        Please book your accommodation for the NE-IECCE 2025 conference in advance, as June- July is the peak tourist season in Silchar and hotels fill up quickly.
                    </p>
                </div>
                <br />
            </section>

            <section className={styles2.importantNotice}>
                <h2 className={styles2.headd}>
                    <strong>Hostel Accommodation for Students (Male/ Female):</strong>
                </h2>
            </section>
            <br />

            <p className={styles2.submissionTemplate}>
                <button onClick={handleComingSoon}>Google Form Link</button>
            </p>
            <br />
            <br />

            {/* <section className={styles2.importantNotice}>
                <h2 className={styles2.headd}>
                    <strong>Institute Guest House Accommodation (Limited room available):</strong>
                </h2>
            </section>
            <br />

            <p className={styles2.submissionTemplate}>
                <button onClick={handleComingSoon}>Google Form Link</button>
            </p>
            <br />
            <br />
            <hr />
            <br />
            <hr /> */}
            <section className={styles2.importantNotice}>
                <h2 className={styles2.instructionsHeading}>Hotel Accommodation for <span> NE-IECCE 2025</span></h2>
                <br />
                <ul className={styles2.submissionGuidelinesText}>
                    <p className={styles2.submissionGuidelinesTextHead}> 
                    <strong className="flex justify-center text-orange-700">4-Star Hotels:</strong>

                    </p><br />
                    <div className="space-y-8">

                <div className='m-9'>
                    
                     {/* Hotel Cachar Club */}
                    <div>
                        <h2>Hotel Cachar Club</h2>
                        <h3>Distance from NITS Campus: <span>8 kms</span></h3>
                        <h3>For Instant Booking: <span style={{ color: 'blue' }}> (+91) 6901276803</span></h3>
                        <h3>Email: <span style={{ color: 'blue' }}> fo@hotelcacharclub.com</span></h3>
                        <h3>Online Booking:</h3>
                        <div className="flex justify-center">
                        <ul className="list-disc list-inside text-blue-600 text-left">
                            {/* <li>
                            <a href="https://www.hotelcacharclub.com" target="_blank" rel="noopener noreferrer">
                                Official Website
                            </a>
                            </li> */}
                            <li>
                            <a href="https://www.makemytrip.com/hotels/hotel_cachar_club-details-silchar.html" target="_blank" rel="noopener noreferrer">
                                MakeMyTrip
                            </a>
                            </li>
                            <li>
                            <a href="https://www.goibibo.com/hotels/cachar-club-hotel-in-silchar-5466182556942398963/" target="_blank" rel="noopener noreferrer">
                                Goibibo
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>

                    {/* Borail View Regency */}
                    <div>
                        <h2>Borail View Regency</h2>
                        <h3>Distance from NITS Campus: <span>10 kms</span></h3>
                        <h3>For Instant Booking: <span style={{ color: 'blue' }}> (+91) 3842351096 / (+91) 3842351097</span></h3>
                        <h3>Email: <span style={{ color: 'blue' }}> borailviewregency1@gmail.com</span></h3>
                        <h3>Online Booking:</h3>
                        <div className="flex justify-center">
                        <ul className="list-disc list-inside text-blue-600 text-left">
                            <li>
                            <a href="https://www.makemytrip.com/hotels/borail_view_regency-details-silchar.html" target="_blank" rel="noopener noreferrer">
                                MakeMyTrip
                            </a>
                            </li>
                            <li>
                            <a href="https://www.goibibo.com/hotels/borail-view-regency-hotel-in-silchar-8156435534934008312/" target="_blank" rel="noopener noreferrer">
                                Goibibo
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>

                    {/* Sagarika Regency */}
                    <div>
                        <h2>Sagarika Regency</h2>
                        <h3>Distance from NITS Campus: <span>8 kms</span></h3>
                        <h3>For Instant Booking: <span style={{ color: 'blue' }}> (+91) 8472893800 / (+91) 6002981238</span></h3>
                        <h3>Email: <span style={{ color: 'blue' }}> sagarikaregencysil@gmail.com</span></h3>
                        <h3>Online Booking:</h3>
                        <div className="flex justify-center">
                        <ul className="list-disc list-inside text-blue-600 text-left">
                            <li>
                            <a href="https://www.goibibo.com/hotels/sagarika-regency-hotel-in-silchar-4931253788648888183" target="_blank" rel="noopener noreferrer">
                                Goibibo
                            </a>
                            </li>
                            <li>
                            <a href="https://www.makemytrip.com/hotels/sagarika_regency-details-silchar.html" target="_blank" rel="noopener noreferrer">
                                MakeMyTrip
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>

                    {/* Sagarika Resort */}
                    <div>
                        <h2>Sagarika Resort</h2>
                        <h3>Distance from NITS Campus: <span>11 kms</span></h3>
                        <h3>For Instant Booking: <span style={{ color: 'blue' }}> (+91) 8811854943 / (+91) 9957086868</span></h3>
                        <h3>Email: <span style={{ color: 'blue' }}> Not Available</span></h3>
                        <h3>Online Booking:</h3>
                        <div className="flex justify-center">
                        <ul className="list-disc list-inside text-blue-600 text-left">
                            <li>
                            <a href="https://www.makemytrip.com/hotels/sagarika_resort-details-silchar.html" target="_blank" rel="noopener noreferrer">
                                MakeMyTrip
                            </a>
                            </li>
                            <li>
                            <a href="https://www.goibibo.com/hotels/sagarika-resort-hotel-in-silchar-5716635739050095849/" target="_blank" rel="noopener noreferrer">
                                Goibibo
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>

                    </div>
                    </div>

<div>


                                        <p className={styles2.submissionGuidelinesTextHead}> 
                                        <div className='space-y-20'>
                                        <strong className=" space-y-6 flex justify-center  text-orange-700">Budget Hotels:</strong><br /><br />
                                        </div>
                                
                                        </p>
                                        <div className="space-y-8">

                    {/* Apurva Hotel */}
                    <div>
                        <h2>Apurva Hotel</h2>
                        <h3>Distance from NITS Campus: <span>6 kms</span></h3>
                        <h3>For Instant Booking: <span style={{ color: 'blue' }}> (+91) 8811981017 / (+91) 6001091731</span></h3>
                        <h3>Email: <span style={{ color: 'blue' }}> apurvahotel202401@gmail.com</span></h3>
                        <h3>Online Booking:</h3>
                        <div className="flex justify-center">
                        <ul className="list-disc list-inside text-blue-600 text-left">
                            <li>
                            <a href="https://www.makemytrip.com/hotels/apurva_hotel-details-silchar.html" target="_blank" rel="noopener noreferrer">
                                MakeMyTrip
                            </a>
                            </li>
                            <li>
                            <a href="https://www.goibibo.com/hotels/apurva-hotel-in-silchar-1532686291064831334/" target="_blank" rel="noopener noreferrer">
                                Goibibo
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>

                    {/* Grand Regency */}
                    <div>
                        <h2>Grand Regency</h2>
                        <h3>Distance from NITS Campus: <span>6 kms</span></h3>
                        <h3>For Instant Booking: <span style={{ color: 'blue' }}> (+91) 9395901315 / (+91) 6003124565</span></h3>
                        <h3>Email: <span style={{ color: 'blue' }}> Not Available</span></h3>
                        <h3>Online Booking:</h3>
                        <div className="flex justify-center">
                        <ul className="list-disc list-inside text-blue-600 text-left">
                            <li>
                            <a href="https://www.goibibo.com/hotels/grand-regency-hotel-in-silchar-571027423243040107" target="_blank" rel="noopener noreferrer">
                                Goibibo
                            </a>
                            </li>
                            <li>
                            <a href="https://www.makemytrip.com/hotels/hotel_grand_regency-details-silchar.html" target="_blank" rel="noopener noreferrer">
                                MakeMyTrip
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>

                    {/* The Bishal */}
                    <div>
                        <h2>The Bishal</h2>
                        <h3>Distance from NITS Campus: <span>7 kms</span></h3>
                        <h3>For Instant Booking: <span style={{ color: 'blue' }}> (+91) 9957608965 / 0384-2316116</span></h3>
                        <h3>Email: <span style={{ color: 'blue' }}> Not Available</span></h3>
                        <h3>Online Booking:</h3>
                        <div className="flex justify-center">
                        <ul className="list-disc list-inside text-blue-600 text-left">
                            <li>
                            <a href="https://www.makemytrip.com/hotels/the_bishal_a_luxury_hotel-details-silchar.html" target="_blank" rel="noopener noreferrer">
                                MakeMyTrip
                            </a>
                            </li>
                            <li>
                            <a href="https://www.goibibo.com/hotels/the-bishal-a-luxury-hotel-in-silchar-5596051753979735400/" target="_blank" rel="noopener noreferrer">
                                Goibibo
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>

                    {/* Barak View Residency */}
                    <div>
                        <h2>Barak View Residency</h2>
                        <h3>Distance from NITS Campus: <span>9 kms</span></h3>
                        <h3>For Instant Booking: <span style={{ color: 'blue' }}> (+91) 7099071087 / (+91) 9665519834</span></h3>
                        <h3>Email: <span style={{ color: 'blue' }}> barakviewresidencysilchar@gmail.com</span></h3>
                        <h3>Online Booking:</h3>
                        <div className="flex justify-center">
                        <ul className="list-disc list-inside text-blue-600 text-left">
                            <li>
                            <a href="https://www.makemytrip.com/hotels/barak_view_residency-details-silchar.html" target="_blank" rel="noopener noreferrer">
                                MakeMyTrip
                            </a>
                            </li>
                            <li>
                            <a href="https://www.goibibo.com/hotels/barak-view-residency-hotel-in-silchar-8071832816357155309/" target="_blank" rel="noopener noreferrer">
                                Goibibo
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>

                    </div>
                    </div>

                </ul>
                <br />
                <br />

            </section>

            {/* Add ToastContainer */}
            <ToastContainer />
            <p className={styles2.helpsec}>
                For any query related to accommodation, please contact Mr. Sayantan Chowdhury (+91 8981350767)
            </p>
        </Fragment>
    );
}

export default Accomodation;
