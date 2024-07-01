


import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/header';
import styles from '../Pages/Registration.module.scss';

const Registrations = () => {
  return (
    <>
     <Header/>
        <Navbar />
            <div className={styles.Registrations}>
                <img src="/register/regiter.PNG" alt="sponsorship pdf" ></img>
                </div>
        </>
    // {/* <Header/>
    // <Navbar/>
    // <div className="overflow-x-auto  m-20">
    //   <h2 className="text-5xl text-blue-500  font-extrabold text-center font-sans mb-10 font">Registration <  span  className=" text-5xl text-orange-400   font-extrabold">Fee Details</span></h2>
    //   <table className="min-w-full divide-y divide-gray-200  ">
    //     <thead className="bg-gray-100">
    //       <tr>
    //         <th scope="col" rowSpan="2" className="text-centre uppercase px-4 py-7 text-xl font-Lato font-bold bg-blue-400">
    //           Participants
    //         </th>
    //         <th scope="col" colSpan="2" className="text-centre text-centre  font-bold  text-xl uppercase font-Lato py-8   bg-green-300  style={{ backgroundColor: '#4797FA' }}">
    //           Early Bird Registration
    //         </th>
    //         <th scope="col" colSpan="2" className="text-centre text-centre uppercase  text-xl font-Lato font-bold py-7 bg-blue-400">
    //           Standard Registration
    //         </th>
    //       </tr>
    //       <tr>
    //         <th scope="col" className=" px-6 py-3 text-centre  text-lg font-medium bg-blue-200 uppercase tracking-wider">
    //           IEEE Members
    //         </th>
    //         <th scope="col" className="px-6 py-3 text-centre text-lg font-medium  bg-blue-100 uppercase tracking-wider">
    //           Non-IEEE Members
    //         </th>
    //         <th scope="col" className="px-6 py-4 text-centre  text-lg font-medium  bg-blue-200 uppercase tracking-wider">
    //           IEEE Members
    //         </th>
    //         <th scope="col" className="px-6 py-4 text-centre text-lg font-medium  bg-blue-100 uppercase tracking-wider">
    //           Non-IEEE Members
    //         </th>
    //       </tr>
    //     </thead>
    //     <tbody className="bg-white divide-y divide-gray-200">
    //       Repeat the below tr for each row */}
    //       {/* <tr>
    //         <td className="   text-center whitespace-nowrap text-lg text-gray-500">
    //           Academician/Scientists
    //         </td>
    //         <td className="text-center whitespace-nowrap text-lg text-gray-500">
    //           ₹9000
    //         </td>
    //         <td className="text-center whitespace-nowrap text-lg text-gray-500">
    //           ₹10000
    //         </td>
    //         <td className="text-center whitespace-nowrap text-lg text-gray-500">
    //           ₹11000
    //         </td>
    //         <td className="text-center py-4 whitespace-nowrap text-lg text-gray-500">
    //           ₹12000
    //         </td>
    //       </tr>
    //       <tr className=" bg-gray-100">
    //         <td className="text-center whitespace-nowrap text-lg text-gray-500">
    //           Students
    //         </td>
    //         <td className="text-center whitespace-nowrap text-lg text-gray-500">
    //           ₹4500
    //         </td>
    //         <td className="text-center whitespace-nowrap text-lg text-gray-500">
    //           ₹5000
    //         </td>
    //         <td className="text-center whitespace-nowrap text-lg text-gray-500">
    //           ₹5500
    //         </td>
    //         <td className="text-center py-4 whitespace-nowrap text-lg text-gray-500">
    //           ₹6000
    //         </td>
    //       </tr>
    //       <tr>
    //         <td className="text-center whitespace-nowrap text-lg text-gray-500">
    //           Industry Person
    //         </td>
    //         <td className="text-center whitespace-nowrap text-lg text-gray-500">
    //           ₹10000
    //         </td>
    //         <td className="text-center whitespace-nowrap text-lg text-gray-500">
    //           ₹11000
    //         </td>
    //         <td className="text-center whitespace-nowrap text-lg text-gray-500">
    //           ₹12000
    //         </td>
    //         <td className="text-center  py-4 whitespace-nowrap text-lg text-gray-500">
    //           ₹13000
    //         </td>
    //       </tr>
    //       <tr className=" bg-gray-100">
    //         <td className="text-center py-4 whitespace-nowrap text-lg text-gray-500">
    //           Foreign Author
    //         </td>
    //         <td className="text-center py-4  whitespace-nowrap text-lg text-gray-500">
    //           $175
    //         </td>
    //         <td className="text-center py-4 whitespace-nowrap text-lg text-gray-500">
    //           $200
    //         </td>
    //         <td className="text-center py-4 whitespace-nowrap text-lg text-gray-500">
    //           $225
    //         </td>
    //         <td className="text-center whitespace-nowrap text-lg text-gray-500">
    //           $250
    //         </td >
    //       </tr>
    //       {/* ...other rows */}
    //     {/* </tbody>
    //   </table>
    //   {/* Additional Information like Participation and Notes */}
    //   {/* <div className="px-6 py-4  mt-14 bg-gray-50">
    //     <h3 className="text-2xl  font-semibold leading-6 text-gray-900">Participation:</h3>
    //     <p className="mt-1 text-lg text-gray-500">
    //       For Tutorial & Industry Talks: ₹3000 / $100
    //     </p>
    //     <p className="mt-1 text-lg text-gray-500">
    //       Conference Attendees: ₹5000 / $150
    //     </p>
    //   </div> */}
    //   {/* <div className="px-6 py-4">
    //     <h3 className="text-2xl font-medium leading-6 text-gray-900">Note:</h3>
    //     <ul className="mt-1 list-disc list-inside text-md text-gray-500">
    //       <li>For one student registration (early bird/standard), authors can submit only one article.</li> */}
    //       {/* <li>For other participants (Academicians/ Scientists/Industry persons/Foreign Authors), authors can submit two articles for one registration (early bird/standard).</li>
    //     </ul>
    //   </div>
    //   <p className="text-gray-600 text-center mt-6">* All above fees are exclusive of GST. GST charges will be added as per regulations.</p>
    // </div> */} 
    
  );
};

export default Registrations;




