import React from 'react'
import CommitteeData from "../Data/Data_Committee.json"
const Committee = () => {
  return (
    <div className=' flex-col justify-center items-center'>
        {CommitteeData.map((element)=>{
            return(
                <div className="card_main">
                    <div className=" strip bg-blue-900 flex justify-center items-center text-center p-[1rem] text-[2rem] text-white font-extrabold">
                        {element.name}
                    </div>
                    <div className="flex flex-wrap gap-1 justify-evenly items-center p-3">
                    {element.members.map((el)=>{
                        return(
                    <div className="cards text-[clamp(0.9rem,4vw,1.2rem)] w-[30vw] pl-8 flex justify-center items-start flex-col h-[10vh] min-h-28 min-w-[400px] rounded-lg shadow-md">
                        <div className='name'>{el.name}</div>
                        <div className="affiliation">{el.affiliation}</div>
                    </div>
                        )
                    })}
                    </div>
                </div>
            );
        })}
    </div>
  )
}
export default Committee;