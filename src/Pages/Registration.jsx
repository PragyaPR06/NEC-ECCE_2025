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
              <li>At least one author of each accepted paper must register on/before 2nd June, 2025.</li>
              <li>Each(one) Author: Indian/Foreign (Academia/Industry) registration will cover up to 2 papers for inclusion in the conference proceedings.</li>
              <li>Each(one) Author: Indian/Foreign (Student) registration will cover only 1 paper for inclusion in the conference proceedings.</li>
              <li>Tutorial is free for conference Author registrants.</li>
              <li>Registering author must refer the appropriate registration fees for different author category.</li>
              <li>The authors can pay the conference registration fee through NEFT/ RTGS/ IMPS/ Direct Deposit/ Swift Transfer to the following bank account (Will be updated). Additional transaction fees may be charged by the payment gateway.</li>
              <li>To complete the registration process, the authors must fill the Google Form (Will be updated) by 02.06.2025.</li>
              <li>Please keep a copy of the Payment Transaction ID, generated by the payment gateway / by your bank. You may need these later in registration process or to track your payment/registration.</li>
              <li>The eligible authors are requested to provide the scan copy of valid IEEE membership card / Student Institute ID proof during the registration process.</li>
              <li>Receipt will be provided in the name of registered author only.</li>
              <li>Any one of the authors/co-authors can present the accepted paper.</li>
              <li>Unregistered papers will not be included in the final program for presentation and submission to IEEE Xplore.</li>
              <li>The paid registration fee is non-refundable.</li>
            </ul>
          </strong>
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