// import React from 'react';

// const RegistrationTable = () => {
//   const data = {
//     earlyBird: {
//       ieeeMembers: {
//         academics: '₹9000',
//         students: '₹4500',
//         industry: '₹10000',
//         foreignAuthors: '$175',
//       },
//       nonIeeeMembers: {
//         academics: '₹10000',
//         students: '₹5000',
//         industry: '₹11000',
//         foreignAuthors: '$200',
//       },
//     },
//     standard: {
//       ieeeMembers: {
//         academics: '₹11000',
//         students: '₹5500',
//         industry: '₹12000',
//         foreignAuthors: '$225',
//       },
//       nonIeeeMembers: {
//         academics: '₹12000',
//         students: '₹6000',
//         industry: '₹13000',
//         foreignAuthors: '$250',
//       },
//     },
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full table-auto">
//         <thead className="border-b">
//           <tr>
//             <th className="text-centre px-6 py-7 bg-blue-400 centered-">Participants</th>
//             <th className="text-centre  px-6 py-7 bg-blue-300">Early Bird Registration</th>
//             <th className="text-centre  px-6 py-7  bg-blue-400">Standard Registration</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.keys(data.earlyBird.ieeeMembers).map((key) => (
//             <tr className="border-b" key={key}>
//               <td className=" text-center px-5 py-4 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</td>
//               <td className=" text-center px-5 py-4">
//                 IEEE: {data.earlyBird.ieeeMembers[key]}, Non-IEEE: {data.earlyBird.nonIeeeMembers[key]}
//               </td>
//               <td className="px-5 py-4 text-center ">
//                 IEEE: {data.standard.ieeeMembers[key]}, Non-IEEE: {data.standard.nonIeeeMembers[key]}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RegistrationTable;




// import React from 'react';

const RegistrationTable = () => {
  return (
    <div className="overflow-x-auto  m-20">
      <h2 className="text-5xl text-blue-500  font-extrabold text-center font-sans mb-10 font">Registration <  span  className=" text-5xl text-orange-400   font-extrabold">Fee Details</span></h2>
      <table className="min-w-full divide-y divide-gray-200  ">
        <thead className="bg-gray-100">
          <tr>
            <th scope="col" rowSpan="2" className="text-centre uppercase px-4 py-7 text-xl font-Lato font-bold bg-blue-400">
              Participants
            </th>
            <th scope="col" colSpan="2" className="text-centre text-centre  font-bold  text-xl uppercase font-Lato py-8   bg-green-300  style={{ backgroundColor: '#4797FA' }}">
              Early Bird Registration
            </th>
            <th scope="col" colSpan="2" className="text-centre text-centre uppercase  text-xl font-Lato font-bold py-7 bg-blue-400">
              Standard Registration
            </th>
          </tr>
          <tr>
            <th scope="col" className=" px-6 py-3 text-centre  text-lg font-medium bg-blue-200 uppercase tracking-wider">
              IEEE Members
            </th>
            <th scope="col" className="px-6 py-3 text-centre text-lg font-medium  bg-blue-100 uppercase tracking-wider">
              Non-IEEE Members
            </th>
            <th scope="col" className="px-6 py-4 text-centre  text-lg font-medium  bg-blue-200 uppercase tracking-wider">
              IEEE Members
            </th>
            <th scope="col" className="px-6 py-4 text-centre text-lg font-medium  bg-blue-100 uppercase tracking-wider">
              Non-IEEE Members
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Repeat the below tr for each row */}
          <tr>
            <td className="   text-center whitespace-nowrap text-lg text-gray-500">
              Academician/Scientists
            </td>
            <td className="text-center whitespace-nowrap text-lg text-gray-500">
              ₹9000
            </td>
            <td className="text-center whitespace-nowrap text-lg text-gray-500">
              ₹10000
            </td>
            <td className="text-center whitespace-nowrap text-lg text-gray-500">
              ₹11000
            </td>
            <td className="text-center py-4 whitespace-nowrap text-lg text-gray-500">
              ₹12000
            </td>
          </tr>
          <tr className=" bg-gray-100">
            <td className="text-center whitespace-nowrap text-lg text-gray-500">
              Students
            </td>
            <td className="text-center whitespace-nowrap text-lg text-gray-500">
              ₹4500
            </td>
            <td className="text-center whitespace-nowrap text-lg text-gray-500">
              ₹5000
            </td>
            <td className="text-center whitespace-nowrap text-lg text-gray-500">
              ₹5500
            </td>
            <td className="text-center py-4 whitespace-nowrap text-lg text-gray-500">
              ₹6000
            </td>
          </tr>
          <tr>
            <td className="text-center whitespace-nowrap text-lg text-gray-500">
              Industry Person
            </td>
            <td className="text-center whitespace-nowrap text-lg text-gray-500">
              ₹10000
            </td>
            <td className="text-center whitespace-nowrap text-lg text-gray-500">
              ₹11000
            </td>
            <td className="text-center whitespace-nowrap text-lg text-gray-500">
              ₹12000
            </td>
            <td className="text-center  py-4 whitespace-nowrap text-lg text-gray-500">
              ₹13000
            </td>
          </tr>
          <tr className=" bg-gray-100">
            <td className="text-center py-4 whitespace-nowrap text-lg text-gray-500">
              Foreign Author
            </td>
            <td className="text-center py-4  whitespace-nowrap text-lg text-gray-500">
              $175
            </td>
            <td className="text-center py-4 whitespace-nowrap text-lg text-gray-500">
              $200
            </td>
            <td className="text-center py-4 whitespace-nowrap text-lg text-gray-500">
              $225
            </td>
            <td className="text-center whitespace-nowrap text-lg text-gray-500">
              $250
            </td >
          </tr>
          {/* ...other rows */}
        </tbody>
      </table>
      {/* Additional Information like Participation and Notes */}
  
      <p className="text-gray-600 text-center mt-6">* All above fees are exclusive of GST. GST charges will be added as per regulations.</p>
    </div>
  );
};

export default RegistrationTable;



// const  RegistrationTable = () => {
//   return (
//     <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//       <div className="px-4 py-5 sm:px-6 grid grid-cols-1 sm:grid-cols-6 gap-4">
//         {/* Participant Type */}
//         <div className="font-medium text-gray-500 uppercase tracking-wider col-span-1">
//           Participants
//         </div>
//         {/* Early Bird Registration */}
//         <div className="col-span-2 sm:col-span-2">
//           <div className="font-medium text-gray-500 uppercase tracking-wider">
//             Early Bird Registration
//           </div>
//           <div className="flex justify-between mt-2">
//             <div className="font-medium text-gray-500 uppercase tracking-wider">IEEE Members</div>
//             <div className="font-medium text-gray-500 uppercase tracking-wider">Non-IEEE Members</div>
//           </div>
//         </div>
//         {/* Standard Registration */}
//         <div className="col-span-2 sm:col-span-2">
//           <div className="font-medium text-gray-500 uppercase tracking-wider">
//             Standard Registration
//           </div>
//           <div className="flex justify-between mt-2">
//             <div className="font-medium text-gray-500 uppercase tracking-wider">IEEE Members</div>
//             <div className="font-medium text-gray-500 uppercase tracking-wider">Non-IEEE Members</div>
//           </div>
//         </div>
//         {/* Repeating Rows for Each Participant Type */}
//         <div className="col-span-1 mt-4 sm:mt-0">
//           <div className="text-sm text-gray-900">Academician/Scientists</div>
//           {/* ... other participant types */}
//         </div>
//         <div className="col-span-2">
//           <div className="flex justify-between">
//             <div className="text-sm text-gray-900">₹9000</div>
//             <div className="text-sm text-gray-900">₹10000</div>
//           </div>
//           {/* ... other participant types */}
//         </div>
//         <div className="col-span-2">
//           <div className="flex justify-between">
//             <div className="text-sm text-gray-900">₹11000</div>
//             <div className="text-sm text-gray-900">₹12000</div>
//           </div>
//           {/* ... other participant types */}
//         </div>
//         {/* Additional Information like Participation and Notes */}
//         <div className="col-span-6 mt-4">
//           <div className="text-lg font-medium text-gray-900">Participation:</div>
//           <div className="text-sm text-gray-500">For Tutorial & Industry Talks: ₹3000 / $100</div>
//           <div className="text-sm text-gray-500">Conference Attendees: ₹5000 / $150</div>
//         </div>
//         <div className="col-span-6 mt-2">
//           <div className="text-lg font-medium text-gray-900">Note:</div>
//           <ul className="list-disc list-inside text-sm text-gray-500">
//             <li>For one student registration (early bird/standard), authors can submit only one article.</li>
//             <li>For other participants (Academicians/ Scientists/Industry persons/Foreign Authors), authors can submit two articles for one registration (early bird/standard).</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default  RegistrationTable;

