import React from 'react';
import styles2 from "./CameraReadySumb.module.scss";
import Header from '../Header/header';
import Navbar from "../Navbar/Navbar";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CameraReadySumb = () => {
    const notify = () => {
        toast.info("Link to be added soon!", {
            position: "bottom-center",
            autoClose: 2000,
            style: {
                color: 'black', // Change text color to black
            }
        });
    };

    return (
        <div>
            <Header />
            <Navbar />
            <section className={styles2.instructions}>
                <header className={styles2.instructionsHeading}>
                    FINAL CAMERA READY PAPER AND COPYRIGHT FORM <span> SUBMISSION INSTRUCTIONS</span>
                </header>

                <section className={styles2.instructionsContent}>
                    <ul>
                        <li>You are instructed to follow the instructions for preparing the final Camera Ready Paper and Copyright Form submission as given below:</li>
                    </ul>
                    <p className={styles2.instructionsSubHeading}><strong> Step 1: Final Camera-ready paper submission Preparation </strong></p>
                    <p>1) Please follow the IEEE two-column A4 size standard conference format for preparing your final manuscript. For more details, please visit the IEEE Templates page: <a style={{ color: 'blue', fontWeight: 600 }} target='_blank' rel='noreferrer' href="https://www.ieee.org/conferences/publishing/templates.html"> IEEE Templates.</a></p>
                    <br />
                    <p>2) Revised Version: Revise your paper based on reviewers’ comments/suggestions. The reviewer’s comments are available on the same Microsoft CMT Portal:<a style={{ color: 'blue', fontWeight: 600 }} target='_blank' rel='noreferrer' href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F"> Reviewer Comments</a>. Authors should ensure that the reviewers’ and meta-reviewers’ comments have been addressed in the final manuscript.</p>
                    <br />
                    <p>3) The maximum page limit is six pages, including references. Do not include an author biography at the end. If additional pages are necessary, up to 8 pages are permitted subject to an extra payment of Rs. 2500 ($30) per additional page.</p>
                    <br />
                    <p>4) Similarity index with other papers should be less than 30% excluding references. The maximum file size allowed is 3 MB, and the file format should be PDF (.pdf) without encryption or passwords.</p>
                    <br />
                    <p className={styles2.instructionsSubHeading}><strong> Step 2: IEEE Copyright Notice </strong></p>
                    <ul>
                        <li>An appropriate copyright notice is to appear at the bottom of the first page of each paper. Replace the copyright notice in the camera-ready paper template (if it is provided in the template) with the correct copyright notice as follows:</li>
                    </ul>
                    <br />
                    <p>1) For papers in which all authors are employed by the US government, the copyright notice is: <strong>To be updated soon..</strong></p>
                    <br />
                    <p>2) For papers in which all authors are employed by a Crown government (UK, Canada, and Australia), the copyright notice is: <strong>To be updated soon..</strong></p>
                    <br />
                    <p>3) For papers in which all authors are employed by the European Union, the copyright notice is: <strong>To be updated soon..</strong></p>
                    <br />
                    <p>4) For all other papers the copyright notice is: <strong>To be updated soon..</strong></p>
                    <br />
                    <p className={styles2.instructionsSubHeading}><strong> Step 3: PDF eXpress Check</strong></p>
                    <p>After preparing the final revised manuscript, submit your manuscript to PDF eXpress using Conference ID (61459X) at the URL <a style={{ color: 'blue', fontWeight: 600 }} target='_blank' rel='noreferrer' href="https://ieee-pdf-express.org/Account/Login"> https://ieee-pdf-express.org/Account/Login</a>. If you do not have an account in PDF eXpress, click on the link “Create Account” and fill in your information (email address and password). If you are not familiar with PDF eXpress, you can get detailed instructions on using IEEE PDF eXpress at: <a style={{ color: 'blue', fontWeight: 600 }} target='_blank' rel='noreferrer' href="https://ieee-pdf-express.org/External/UsingIEEEPDFeXpress"> Using IEEE PDF eXpress</a>.</p>
                    <p className={styles2.instructionsSubHeading}><strong> Step 4: Camera Ready Paper Submission</strong></p>
                    <p>Submit the Camera Ready Paper (after passing it through PDF express check) through the author console in CMT. Please change the file name of the PDF eXpress checked camera ready paper to PIDxxx (where xxx is your paper ID in CMT) before submission to CMT. Please note that authors are expected to retain the title of the original paper in the final paper. Also, the author list and order in the original paper cannot be changed in the final manuscript.</p>
                    <p className={styles2.instructionsSubHeading}><strong> Step 5: Submission of the Copyright Form</strong></p>
                    <p>After uploading the Camera Ready Paper (the paper must have passed PDF Check in IEEE PDF eXpress), click on ‘Submit IEEE Copyright Form’ link to enter the IEEE Copyright Form Submission CMT page. Click on the IEEE copyright website link. Now, the author will be redirected to IEEE eCF site to submit copyright form. After filling out the IEEE Copyright Form on eCF website, authors need to download the form and upload it into CMT. Please note that the corresponding author can submit the copyright form for all the authors.</p>

                    {/* <p className={styles2.submitDigestText}>
                        Please click below for Camera Ready Paper Submission:
                    </p>
                    <section className={styles2.submitButtonArea}>
                        <button className={styles2.submitButton} onClick={notify}>
                            Submit Manuscript
                        </button>
                    </section> */}
                </section>
            </section>
            <ToastContainer />
        </div>
    );
}

export default CameraReadySumb;
