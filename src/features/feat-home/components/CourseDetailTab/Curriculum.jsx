import React from 'react'
import { Play } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
const Curriculum = () => {

  const courseDataArray = [
    {
      title: "JavaScript Basics",
      lesson: "3 lessons",
      videoDescription: [
        {
          videoTitle: "Intro to JavaScript: Overview, setup, and running code.",
          videoLink: "#",
          videoDuration: "30min 10sec"
        },
        {
          videoTitle: "Variables and Data Types: let, const, strings, numbers, booleans.",
          videoLink: "#",
          videoDuration: "1hr 10sec"
        },
        {
          videoTitle: "Loops: for, while, and do...while loops.",
          videoLink: "#",
          videoDuration: "15min 4sec"
        }
      ]
    },
    {
      title: "Functions and Scope",
      lesson: "3 lessons",
      videoDescription: [
        {
          videoTitle: "Functions: Declaration, expressions, arrow functions.",
          videoLink: "#",
          videoDuration: "30min 10sec"
        },
        {
          videoTitle: "Parameters and Return Values: Passing and returning values.",
          videoLink: "#",
          videoDuration: "1hr 10sec"
        },
        {
          videoTitle: "Scope: Block scope, function scope, global scope, and closures.",
          videoLink: "#",
          videoDuration: "15min 4sec"
        }
      ]
    },
    {
      title: "Arrays and Objects",
      lesson: "3 lessons",
      videoDescription: [
        {
          videoTitle: "Creating arrays, accessing, modifying, and looping through elements.",
          videoLink: "#",
          videoDuration: "30min 10sec"
        },
        {
          videoTitle: "Properties, methods, adding and accessing data.",
          videoLink: "#",
          videoDuration: "1hr 10sec"
        },
        {
          videoTitle: "Array and Object Methods: map, filter, reduce, forEach, Object.keys,...",
          videoLink: "#",
          videoDuration: "15min 4sec"
        }
      ]
    },
    {
      title: "The Document Object Model (DOM)",
      lesson: "3 lessons",
      videoDescription: [
        {
          videoTitle: "DOM Basics: Understanding the DOM and selecting elements.",
          videoLink: "#",
          videoDuration: "30min 10sec"
        },
        {
          videoTitle: "Manipulating the DOM: Adding, removing, and modifying HTML elements.",
          videoLink: "#",
          videoDuration: "1hr 10sec"
        },
        {
          videoTitle: "Event Listeners: Handling user events like clicks, input, etc.",
          videoLink: "#",
          videoDuration: "15min 4sec"
        }
      ]
    }
  ];
  return (
    <div>

<Accordion type="single" collapsible className="w-full flex flex-col gap-2   rounded-lg  ">

       {courseDataArray.map((item,index) => (
        <AccordionContentList key={index} index={index} courseArray={item} />
      ))}
      
    </Accordion>
    </div>
  )
}

export default Curriculum 


const AccordionContentList = ({index,courseArray}) => {
  return (

    <AccordionItem value={`item-${index}`} className=" bg-[#F0F9F9] !mx-0 px-0 !border-none  " >
    <AccordionTrigger className="  mx-5  ">
         <div className=' flex items-center gap-2'>
            <p className=' font-heading  md:text-[16px] text-[#171717] font-medium  '>{courseArray.title}</p>
            <p className=' font-heading  text-[#262626] text-sm  md:leading-[8px]  '>{courseArray.lesson}</p>
         </div>
    </AccordionTrigger>
    
     {courseArray.videoDescription.map((item,index) => (
       <AccordionContent key={index} className=" md:leading-10 px-1 md:px-4 py-2 bg-white !border-none  ">
       <div className=' flex items-center justify-between'>
           <div className=' flex items-center gap-1 md:gap-2'>
           <div className=' p-1 flex  bg-[#CCE3FF] rounded-full'><Play  className=' size-4 md:size-6' color="#0074FF" /></div>
           <p className=' font-sans text-[#262626] text-sm line-clamp-1  lg:text-[16px]'> {item.videoTitle}</p>
           
           </div> 
           
           <p className=' text-[#525252] lg:text-[16px] text-sm font-sans text-nowrap'>{item.videoDuration}</p>
           </div> <hr/>
       </AccordionContent>
     ))}

   
  </AccordionItem>
  )
}