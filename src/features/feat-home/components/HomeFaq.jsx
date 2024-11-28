import React from 'react'
import LabelHeading from './LabelHeading'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import AccordionFaq from './AccordionFaq'
   
const HomeFaq = () => {
  
  return (
    <div className=' my-20'>
        <LabelHeading label="FAQ" heading="Popular Frequently asked questions" />


        <AccordionFaq />
    


    </div>
  )
}

export default HomeFaq