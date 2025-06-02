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
    FINAL CAMERA-READY PAPER AND COPYRIGHT FORM <span> SUBMISSION INSTRUCTIONS</span>
  </header>

  <section className={`${styles2.instructionsContent} space-y-4 text-justify text-[16px] leading-relaxed`}>
    <p>Authors are requested to carefully follow the instructions outlined below for preparing and submitting the final Camera-Ready Paper, Copyright Form, and Plagiarism Report. All documents must be submitted on or before 28th April 2025.</p>

    <p className={styles2.instructionsSubHeading}><strong>Step 1: Final Camera-ready paper submission Preparation</strong></p>
    <p>a) Please follow the IEEE two-column A4 size standard conference format for preparing your final manuscript.</p>
    <p>b) For more details, please visit the IEEE Templates <a className="text-blue-700 font-medium underline" target="_blank" rel="noreferrer" href="https://www.ieee.org/conferences/publishing/templates.html">https://www.ieee.org/conferences/publishing/templates.html</a></p>
    <p>c) Authors should avoid using honorifics such as Mr., Dr., etc., in the author list below the title. Additionally, the title should not be bold and must strictly adhere to the IEEE formatting guidelines.</p>
    <p>d) Please revise your paper in accordance with the reviewers’ comments and suggestions, which are available on the Microsoft CMT portal. Authors must ensure that all comments from both reviewers and meta-reviewers are thoroughly addressed in the final manuscript.</p>
    <p>e) The final paper must not exceed 6 pages, including references. Author biographies should not be included at the end of the manuscript. If additional content is necessary, up to 8 pages are allowed, subject to an extra fee of Rs. 2500 (USD 30) per additional page.</p>
    <p>f) The similarity index (plagiarism) of the final manuscript must be less than 30%, excluding references, as verified by standard plagiarism detection software. A plagiarism report must be uploaded along with the final camera-ready manuscript to ensure eligibility of paper for inclusion in IEEE Xplore. Manuscripts with a similarity index exceeding 30%, & and the similarity rate to a single source exceeding 10 % will not be forwarded for publication. The final submission should be in PDF format (.pdf), without encryption or password protection, and must not exceed 3 MB in file size.</p>
    <p>g) AI Policy for IAS Publications: The use of artificial intelligence (AI)-generated text (e.g., by ChatGPT) in an article shall be disclosed in the acknowledgements section of any paper submitted IEEE Conference or Periodical. The section of the paper that use AI-generated text shall have a citation to the AI system used to generate the text.</p>

    <p className={styles2.instructionsSubHeading}><strong>Step 2: IEEE Copyright Clearance Code Notice</strong></p>
    <p>The final manuscript must include the appropriate copyright clearance notice at the bottom of the first page. Please refer to the LaTeX/Word template available at <a className="text-blue-700 font-medium underline" target="_blank" rel="noreferrer" href="https://ne-iecce2025.org/CallForPapers">https://neiecce2025.org/CallForPapers</a> and replace the dummy code at the bottom of first page of the paper with the following code:</p>
    <p>a) For papers in which all authors are employed by the US government, the copyright notice is: U.S. Government work not protected by U.S. copyright</p>
    <p>b) For papers in which all authors are employed by a Crown government (UK, Canada, and Australia), the copyright notice is: 979-8-3315-1061-9/25/$31.00 ©2025 Crown</p>
    <p>c) For papers in which all authors are employed by the European Union, the copyright notice is: 979-8-3315-1061-9/25/$31.00 ©2025 European Union</p>
    <p>d) For all other papers the copyright notice is: 979-8-3315-1061-9/25/$31.00 ©2025 IEEE</p>

    <p className={styles2.instructionsSubHeading}><strong>Step 3: PDF eXpress Check</strong></p>
    <p>Before uploading the final manuscript for PDF express check, author must ensure to add Copyright Clearance Code Notice as in step 2 and must thoroughly proof read the document to confirm that it will require no revision.</p>

    <p><strong>Creating your IEEE PDF eXpress Account</strong></p>
    <p>a) Log in to the IEEE PDF eXpress website</p>
    <p>b) First-time users should do the following:</p>
    <p>1) Select the New User to create account: link - <a className="text-blue-700 font-medium underline" target="_blank" rel="noreferrer" href="https://ieee-pdf-express.org/account/signup">https://ieee-pdf-express.org/account/signup</a></p>
    <p>2) Enter the following:</p>
    <p>i. 64154X for the Conference ID</p>
    <p>ii. Your email address</p>
    <p>iii. A password</p>
    <p>iv. Continue to enter information as prompted</p>
    <p>v. An online confirmation will be displayed, and an email confirmation will be sent verifying your account setup.</p>
    <p>c) Previous users of PDF eXpress need to follow the above steps, but should enter the same password that was used for previous conferences. Verify that your contact information is valid. Use 64154X for the Conference ID.</p>

    <p className={styles2.instructionsSubHeading}><strong>Step 4: Procedure for IEEE Copyright Form eCF submission:</strong></p>
    <p>To enable your paper to appear in IEEE eXplorer, it is mandatory to transfer the Copyright to IEEE. The corresponding/submitting author of each paper must transfer IEEE eCF. The steps to transfer the Copyright to IEEE are also given below:</p>
    <p>a) Using CMT portal, upload the Camera Ready Paper (the paper must have passed PDF check in IEEE PDF eXpress).</p>
    <p>b) Then click on the IEEE copyright link on the Microsoft CMT portal. You will be redirected to IEEE copyright Form Submission page.</p>
    <p>c) Click on “Click here to redirect to the IEEE copyright website” to transfer eCF and you will be redirected to IEEE copyright portal.</p>
    <p>d) Follow the instructions to complete the IEEE Copyright Transfer Process.</p>
    <p>e) After filling out the Copyright Form, save it as a PDF file. Ensure that you retain a copy of the completed form. Before uploading this PDF to CMT, rename the file as</p>
    <p><strong>PIDxxxC</strong> (where xxx is your paper ID in CMT).It completes the Copyright Transfer of your paper to IEEE. Please note that separate copyright transfer is required for each paper.</p>

    <p className={styles2.instructionsSubHeading}><strong>Step 5: Final files required to upload in CMT</strong></p>
    <p>a) IEEE PDF eXpress checked and approved Final Manuscript</p>
    <p>b) IEEE Copyright Right Form</p>
    <p>c) Plagiarism Report</p>

    <p>Submit the Camera Ready Paper (after passing it through PDF express check) through the author console in CMT. Please change the file name of the PDF eXpress checked Camera Ready Paper to <strong>PIDxxx</strong> (where xxx is your paper ID in CMT) before submission to CMT. Please note that authors are expected to retain the title of the original paper in the final paper. Also, the author list and order in the original accepted Digest cannot be changed in the final manuscript.</p>
  </section>
</section>





            <ToastContainer />
        </div>
    );
}

export default CameraReadySumb;
