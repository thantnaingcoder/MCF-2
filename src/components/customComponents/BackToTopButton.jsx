import React from 'react'
import { ArrowUpFromLine } from 'lucide-react';
import upArrow from "../../assets/up-arrow.png"
const BackToTopButton = () => {
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><img className=' hover:scale-105 active:scale-90 duration-100 w-9 h-9 md:w-12 md:h-12' src={upArrow} alt="toTop"/></button>
  )
}

export default BackToTopButton