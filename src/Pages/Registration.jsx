import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/header';

const Registrations = () => {
  return (
    <>
      <Header/>
      <Navbar />

      <div className="container mx-auto px-4 py-8 bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-4xl font-bold text-red-600 text-center mb-4" style={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 700 }}>Registration FEE</h2>
          <div className="overflow-x-auto">
            <strong>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-200">
                    <th rowSpan={2} className="border border-gray-400 px-4 py-2">Category</th>
                    <th colSpan={2} className="border border-gray-400 px-4 py-2">
                      Early Bird Registration Fee
                      <br />
                      <span className="text-purple-700">[Up to May 01, 2025]</span>
                    </th>
                    <th colSpan={2} className="border border-gray-400 px-4 py-2">
                      Standard Registration Fee
                      <br />
                      <span className="text-purple-700">[After May 01, 2025]</span>
                    </th>
                  </tr>
                  <tr className="bg-yellow-100">
                    <th className="border border-gray-400 px-4 py-2">IEEE Member</th>
                    <th className="border border-gray-400 px-4 py-2">Non-IEEE Member</th>
                    <th className="border border-gray-400 px-4 py-2">IEEE Member</th>
                    <th className="border border-gray-400 px-4 py-2">Non-IEEE Member</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { category: "Author: Indian (Academia/Industry)", fees: ["₹ 9000", "₹ 10000", "₹ 11000", "₹ 12000"] },
                    { category: "Author: Foreign (Academia/Industry)", fees: ["$ 300", "$ 350", "$ 350", "$ 400"] },
                    { category: "Author: Indian (Student)", fees: ["₹ 6750", "₹ 7500", "₹ 8250", "₹ 9000"] },
                    { category: "Author: Foreign (Student)", fees: ["$ 225", "$ 260", "$ 260", "$ 300"] },
                    { category: "Attendee: Indian (Academia/Industry)", fees: ["₹ 6000", "₹ 7000", "₹ 7000", "₹ 8000"] },
                    { category: "Attendee: Foreign (Academia/Industry)", fees: ["$ 200", "$ 225", "$ 225", "$ 250"] },
                    { category: "Attendee: Indian (Student)", fees: ["₹ 4000", "₹ 5000", "₹ 5000", "₹ 6000"] },
                    { category: "Attendee: Foreign (Student)", fees: ["$ 150", "$ 175", "$ 175", "$ 225"] },
                    { category: "Tutorial Only: Indian", fees: ["₹1000", "₹1000", "₹1000", "₹ 1000"] },
                    { category: "Tutorial Only: Foreign", fees: ["$ 20", "$ 20", "$ 20", "$ 20"] },
                    { category: "Additional Page: Indian", fees: ["₹ 2500 / page", "₹ 2500 / page", "₹ 2500 / page", "₹ 2500 / page"] },
                    { category: "Additional Page: Foreign", fees: ["$ 30 / page", "$ 30 / page", "$ 30 / page", "$ 30/ page"] },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-green-100"}>
                      <td className="border border-gray-400 px-4 py-2">{row.category}</td>
                      {row.fees.map((fee, feeIndex) => (
                        <td key={feeIndex} className="border border-gray-400 px-4 py-2 text-center">{fee}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </strong>
          </div>
         
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h1 className="text-4xl font-bold mb-4 text-blue-600" style={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 700 }}>Guidelines</h1>
          <strong>
  <p className="text-gray-700 space-y-2">
    • One Author: Indian/Foreign (Academia/Industry) registration will cover up to 2 papers for inclusion in the conference proceedings. For each additional paper beyond the first two, a separate registration must be completed accordingly.<br />
    • One Author: Indian/Foreign (Student) registration will cover only 1 paper for inclusion in the conference proceedings. For each additional paper beyond the first two, a separate registration must be completed accordingly.<br />
    • Each registration is valid for submission of 6 pages only. An additional paper and over-length pages are subject to extra fees per page.<br />
    • Author: Indian/Foreign (Student) registration are not eligible for North-East India Travel Award.<br />
    • For North-East India Travel Award authors must register under Author: Indian/Foreign (Academia/Industry). Details are available on <a href="https://ne-iecce2025.org/studentAwards" target="_blank" className="text-blue-600 underline">https://ne-iecce2025.org/studentAwards</a><br />
    • Tutorial is free for conference Author registrants.<br />
    • Registering participants must refer the appropriate registration fees for different category.<br />
    • Accompanying Person will not have access to Technical Events<br />
    • The foreign authors who are unable to travel due to visa or other limitations, can present their paper online with prior approval from the conference organizing chair.<br />
    • The authors can pay the conference registration fee through NEFT/ RTGS/ IMPS/ Direct Deposit/ Swift Transfer to the below bank account.<br />
    • Any type of registration includes access to all conference activities, breakfasts, lunches, dinners, and coffee breaks.<br />
    • Please keep a copy of the Payment Transaction ID, generated by the payment gateway / by your bank. You may need these later in registration process or to track your payment/registration.<br />
    • The eligible authors are requested to provide the scan copy of valid IEEE membership card / Student Institute ID proof during the registration process.<br />
    • Receipt will be provided in the name of registered author only.<br />
    • Any one of the authors/co-authors can present the accepted paper.<br />
    • Unregistered papers will not be included in the final program for presentation and submission to IEEE Xplore.<br />
    • The paid registration fee is non-refundable.<br />
    • For availing student registration, please upload Student ID Card, and the presenter of the paper must be the same.<br />
    • At least one author of the accepted paper must register with appropriate conference fee to include the paper in the NE-IECCE 2025 conference program and must be presented for further submission to IEEE Xplore after quality check.<br />
    • During the fee payment process, authors must include the following format in the transaction/payment remarks or description field:<br />
    <strong>PaperIDNumber_RegisteringAuthorName_2025</strong><br />
    This will help us track your payment efficiently.<br />
    For example:<br />
    If your paper ID is 103 and your name is Saurabh Ganguly, you should enter:<br />
    <strong>103_SGanguly_2025</strong><br />
    If you are registering for two papers (e.g., paper IDs 103 and 105), please enter:<br />
    <strong>103_105_SGanguly_2025</strong>
  </p>
</strong>
<div className="bg-white shadow-md rounded-lg p-6 mb-8">
  <h1 className="text-3xl font-bold mb-4 text-red-600" style={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 700 }}>
    Important Information About Discount Rates
  </h1>
  <p className="text-gray-700 leading-relaxed">
    • During the fee payment process, you will be required to either enter your IEEE membership number or upload a valid student ID (as applicable).<br />
    • Please ensure that your membership is renewed and up-to-date well before the registration fee payment.<br />
    • We will not be able to grant the early bird/member discounted rate if your membership information is not valid or current at the time of the fee revision.<br />
  </p>
  <p className="mt-4 text-red-700 font-semibold">
    Important Note:
  </p>
  <p className="text-gray-700">
    NE-IECCE organizing team reserves the right to charge the full price at any time if a valid membership or student ID cannot be presented.
  </p>
</div>
<div>
          <h2 class="text-2xl font-bold text-red-600">Important Information About Discount Rates</h2>
          <p class="mt-4">
            During the fee payment process, you will be required to either enter your IEEE membership number or upload a valid student ID (as applicable).
            <br /><br />
            Please ensure that your membership is renewed and up-to-date well before the registration fee payment.
            <br /><br />
            We will not be able to grant the early bird/member discounted rate if your membership information is not valid or current at the time of the fee revision.
          </p>
          <p class="mt-4 text-red-600 font-bold">Important Note:</p>
          <p>
            NE-IECCE organizing team reserves the right to charge the full price at any time if a valid membership or student ID cannot be presented.
          </p>
        </div>

        {/* Steps to Register Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
  <h1 className="text-3xl font-bold mb-4 text-red-600" style={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 700 }}>
    Steps to Register for NE-IECCE 2025
  </h1>
          <div class="overflow-x-auto mt-4">
            <table class="w-full border border-red-500 border-collapse text-sm text-left">
              <thead class="bg-gray-100">
                <tr>
                  <th class="border border-red-500 p-2">Online Money Transfer</th>
                  <th class="border border-red-500 p-2">OPTION 1</th>
                  <th class="border border-red-500 p-2">OPTION 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-red-500 p-2"></td>
                  <td class="border border-red-500 p-2">Online Bank Transfer Only</td>
                  <td class="border border-red-500 p-2">QR Code</td>
                </tr>
                <tr class="bg-gray-50 font-medium">
                  <td class="border border-red-500 p-2">Step 1</td>
                  <td class="border border-red-500 p-2" colSpan="2">
                    The bank details for transferring the registration fee electronically are as follows
                  </td>
                </tr>
                <tr>
                  <td class="border border-red-500 p-2">Account Name</td>
                  <td class="border border-red-500 p-2"> IEEE IAS JT CHAPTER</td>
                  <td class="border border-red-500 p-2" rowSpan="8" style={{ textAlign: 'center' }}>
                    <img
                      src="/register/qrCode.jpg"

                      alt="QR Code"
                      class="w-60 mx-auto border border-gray-300"
                    />
                    <p class="mt-2 text-sm">UPI ID: ieeeias@sbi</p>
                    <p class="text-xs text-gray-500">BHIM UPI | yono SBI| Paytm | GPay</p>
                    <p class="text-xs text-blue-600">Digital Rupee Accepted</p>
                  </td>
                </tr>
                <tr>
                  <td class="border border-red-500 p-2">Account Number</td>
                  <td class="border border-red-500 p-2">43749033661</td>
                </tr>
                <tr>
                  <td class="border border-red-500 p-2">IFSC Code</td>
                  <td class="border border-red-500 p-2">SBIN0007061</td>
                </tr>
                <tr>
                  <td class="border border-red-500 p-2">MICR Code</td>
                  <td class="border border-red-500 p-2">788002004</td>
                </tr>
                <tr>
                  <td class="border border-red-500 p-2">SWIFT Code (Foreign Exchange)</td>
                  <td class="border border-red-500 p-2">SBININBB481</td>
                </tr>
                <tr>
                  <td class="border border-red-500 p-2">Type of Account</td>
                  <td class="border border-red-500 p-2">Current</td>
                </tr>
                <tr>
                  <td class="border border-red-500 p-2">Bank</td>
                  <td class="border border-red-500 p-2">SBI</td>
                </tr>
                <tr>
                  <td class="border border-red-500 p-2">Branch</td>
                  <td class="border border-red-500 p-2">NIT Silchar</td>
                </tr>
                <tr class="bg-gray-50 font-medium">
                  <td class="border border-red-500 p-2">Step 2</td>
                  <td class="border border-red-500 p-2" colSpan="2">
                    Please save the payment receipt (PDF format) of the money transferred to the <sup></sup> NE-IECCE 2025 account.
                  </td>
                </tr>
                <tr class="bg-gray-50 font-medium">
                  <td class="border border-red-500 p-2">Step 3</td>
                  <td class="border border-red-500 p-2" colSpan="2">
                    Fill out the online Google registration form.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Updated Register Button */}
          <div class="text-center mt-6">
            <a
              href="https://your-google-form-link.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-base font-medium transition">
                Register via Google Form
              </button>
            </a>
          </div>
        </div>


        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-yellow-800">
            At least one author of the accepted paper must register with appropriate conference fee to include the paper in the NE-IECCE 2025 conference program and must be presented for further submission to IEEE Xplore after quality check.
          </p>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-blue-800">
            For any query, contact: <a href="mailto:neiecce.ieee@ee.nits.ac.in" className="text-blue-600 hover:underline">neiecce.ieee@ee.nits.ac.in</a>
          </p>
        </div>

      
      </div>
    </>
  );
};

export default Registrations;