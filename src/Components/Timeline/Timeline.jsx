import React from "react";
import data from "../../Data/data.json";

const Timeline = () => {
  return (
    <div className=" container flex-col justify-center items-start">
      <div className="header flex justify-center items-center text-[3rem] font-bold text-purple-800 ">Timeline</div>
      <div className="timeline flex-col p-10 justify-center items-center">
        {data.map((element) => {
          return (
            <div className="container flex-col justify-start items-center pl-5 md:w-[50vw] w-[200px]">
              <div className="w-3 h-3 rounded-full bg-gray-500 flex items-center justify-center absolute ml-[-6px] mt-[8px]"></div>
              <div className=" border-l-2 h-[20vh] pl-5">
                <h2 className=" font-bold text-[1.5rem] ">{element.date}</h2>
                <h3 className=" text-[1rem] ">{element.description}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Timeline;
