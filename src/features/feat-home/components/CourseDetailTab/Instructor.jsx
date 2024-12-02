import React from 'react'
import TabsInstroctor from "../../../../assets/aboutUs/instructor/TabInstructor/TabsInstructor.png"
import { Facebook, GraduationCap, Play, Star } from 'lucide-react'
import Fb from "../../../../assets/aboutUs/instructor/TabInstructor/Facebook.png"
import Ig from "../../../../assets/aboutUs/instructor/TabInstructor/Instagram.png"
import Lin from "../../../../assets/aboutUs/instructor/TabInstructor/Linkedin.png"
import X from "../../../../assets/aboutUs/instructor/TabInstructor/Twitter.png"

const Instructor = () => {
  return (
      <div className=' flex flex-col md:gap-5'>
    <div className=' w-full  border-2 rounded-lg container max-w-full  border-gray-200 p-2'>
    
   
     <div className=' flex flex-col sm:flex-row  gap-3 md:gap-4 lg:gap-5 '>
         <img className=' min-w-[200px] lg:w-full ' src={TabsInstroctor} alt="instructor" />
         <div className=' w-full mx-auto  flex flex-col gap-3 items-start justify-center'>
          <div>
          <h1 className=' font-heading text-[#171717] text-[31px] font-semibold '>Lily Alcelus</h1>
         
         <p className=' font-sans text-[#09B850]  text-[20px]'>Software Engineer</p> 
          </div>
         <div className=' flex  gap-3'>
            <img src={Fb} alt="icon" />
            <img src={Ig} alt="icon" />
            <img src={Lin} alt="icon" />
            <img src={X} alt="icon" />
         </div>
          <div className=' flex gap-3 lg:gap-10'>
             <div className=' flex items-center gap-1'><GraduationCap color='#FD7E14' /><p className='text-sm md:text-md'>1200 students</p></div>
             <div className=' flex items-center gap-1'>
                <div className=' p-1 flex  bg-[#CCE3FF] rounded-full'><Play size={15}   color="#0074FF" />
                </div><p className='text-sm md:text-md'>12 courses</p></div>
             <div className=' flex items-center gap-1'><p className='text-sm md:text-md'>4.3</p><Star color='#FD7E14' fill='#FD7E14'/></div>
          </div>
         </div>
     </div>
 </div>

     <div className=' flex flex-col gap-5'>
      <h1 className=' font-heading text-[#171717] text-[20px] md:text-[31px] font-bold'>About an instructor</h1>
       <div>
        
        <p className='md:leading-[32px] md:text-[20px] font-sans text-[#525252]'><b>Lily Alcelus</b> is a skilled web developer and JavaScript instructor with over 10
 years of industry experiences. Specializing in JavaScript, HTML, CSS, and popular frameworks like React and Vue, they’ve worked on projects for KBZ Known for their clear, supportive teaching style. <br/>
 <b>Lily Alcelus</b> is dedicated to helping beginners gain confidence and practical coding skills through hands-on lessons and real-world projects.</p>
       </div>
    </div>
    
   

    </div>
    
  )
}

export default Instructor