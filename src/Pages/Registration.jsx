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
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>One <strong>Author</strong> : Indian/Foreign (Academia/Industry) registration will cover up to 2 papers for inclusion in the conference proceedings. For each additional paper beyond the first two, a separate registration must be completed accordingly.</li>
              <li>One Author: Indian/Foreign (Student) registration will cover only 1 paper for inclusion in the conference proceedings. For each additional paper beyond the first registered paper, a separate registration must be completed accordingly.</li>
              <li>Each registration is valid for submission of 6 pages only. An additional paper and over-length pages are subject to extra fees per page. Maximum number of pages allowed is 8.</li>
              <li>Author: Indian/Foreign (Student) registration are not eligible for North-East India Travel Award.</li>
              <li>For North-East India Travel Award authors must register under Author: Indian/Foreign (Academia/Industry). Details are available on https://ne-iecce2025.org/studentAwards</li>
              <li>Tutorial is free for conference Author registrants.</li>
              <li>Registering participants must refer the appropriate registration fees for different category.</li>
              <li>Anyone accompanying the registered participant will not have access to any of the Conference sessions, lunch, High Tea, and Gala dinner.</li>
              <li>The foreign authors who are unable to travel due to visa or other limitations, can present their paper online with prior approval from the Conference Organizing Chair.</li>
              <li>The authors can pay the conference registration fee through SBI Collect (Indian Transaction) / Swift Transfer (Foreign Transaction) to the below bank account.  </li>
              <li>Any type of registration (except tutorial only registrations) includes access to all Conference sessions, lunch, High Tea, and Gala dinner.</li>
              <li>Please keep a copy of the Payment Transaction ID/e-receipt, generated by the payment gateway. You may need these later in registration process or to track your payment/registration.</li>
              <li>The eligible authors are requested to provide the scan copy of valid IEEE membership card / Student Institute ID proof during the registration process.</li>
              <li>Receipt will be provided in the name of registered author only</li>
              <li>If the registration made is under the category Author: Indian or Foreign (Academia/Industry), any one of the authors/co-authors can present the accepted paper.</li>
              <li>For availing student registration, the presenter of the paper must be the same as the registrant (please upload Student ID Card as proof).</li>
              <li>At least one author of the accepted paper must register with appropriate conference fee to include the paper in the NE-IECCE 2025 conference program and must be presented for further submission to IEEE Xplore after quality check.</li>
              <li>The paid registration fee is non-refundable. </li>
              <li>During the fee payment process, authors must include the following format in the transaction/payment remarks or description field:
<p>PaperIDNumber_RegisteringAuthorName_2025
This will help us track your payment efficiently.
<p>For example:</p></p>
<p>If your paper ID is 103 and your name is Saurabh Ganguly, you should enter: {'\t'}  <strong>103_SGanguly_2025 </strong>  </p>
{/* <p>103_SGanguly_2025</p> */}
<p>If you are registering for two papers (e.g., paper IDs 103 and 105), please enter: {'\t'}  <strong>103_105_SGanguly_2025 </strong></p>
</li>
<h2><strong>Important information about discount rates:</strong></h2>
<p>During the fee payment process, authors must include the following format in the transaction/payment remarks or description field:</p>
              <p>Please ensure that your membership is renewed and up-to-date well before the registration fee payment.</p>
              <p>Conference committee will not be able to grant the early bird/member discounted rate, if your membership information is not valid or current after the closure of Early Bird Registration.</p>
              <h2><strong>Important note:</strong></h2>
              <p>NE-IECCE organizing team reserve the right to charge the full author registration fee, if any registered student is unable to produce a valid IEEE student membership Card and student ID Card.</p>
            </ul>
          </strong>
          <br></br>
          <hr></hr>
          <br></br>
          <div >
          <h1 className="text-4xl font-bold mb-4 text-blue-600" style={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 700 }}>Steps to Register for NE-IECCE 2025</h1>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li><strong>Click on the below link for NE-IECCE 2025 registration (only for Indian authors)[ NOTE: While entering data in the SBI Collect portal for payment of the registration fee, please do not use commas or any special characters. For example, if you are registering for two papers, enter 120 and 420 in the Paper ID(s) field, not 120, 420. Similarly, avoid using commas in the address field]</strong></li>
            <div className="flex items-center justify-center mt-9">
  <button className="relative overflow-hidden text-white font-bold py-3 px-6 rounded-full shadow-md transition-colors duration-500 ease-in-out bg-red-600 group w-100 h-12 flex items-center justify-center">
    <span className="relative z-10 text-center w-full whitespace-nowrap">Early Bird Registration Link</span>
    <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-600 to-green-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
  </button>
</div>








          </ol>
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