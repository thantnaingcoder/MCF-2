import React from 'react'
import {
  
    ChartLine,
    Users,
    School,
    GraduationCap,
    
  } from "lucide-react";
const UserTrust = () => {
    const userTrust = [
        {
          id:1,
          icon:<ChartLine color="#02996f" size={40} />,
          count:"10K+",
          title:"Total Achievement",
          
        },
        {
          id:2,
          icon:<Users color="#02996f" size={40} />,
          count:"1600K+",
          title:"Total Students",
          
        },
        {
          id:3,
          icon:<School color="#02996f" size={40} />,
          count:"15K+",
          title:"Classes complete",
          
        },
        {
          id:4,
          icon:<GraduationCap color="#02996f" size={40} />,
          count:"100K+",
          title:"Certified Teachers",
          
        }
      ]
  return (
    <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
           {userTrust.map((trust, index) => (
              <div
                
             key={index}  className=" rounded-md items-center bg-primary-50 p-3 md:p-5 flex gap-4 "
            >
              {trust.icon}
              <div>
                <h1 className=" font-heading text-[24px] text-nowrap font-semibold">
                 {trust.count}
                </h1>
                <p className=" text-nowrap">{trust.title}</p>
              </div>
            </div>
           ))}
            </div>
  )
}

export default UserTrust