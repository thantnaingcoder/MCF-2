import React from 'react'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../../../components/BreadCrumb'
import PageLayout from '../components/PageLayout'
import { Signal ,GraduationCap,Star ,Globe   } from 'lucide-react';
const CoursesDetailPage = () => {
  const {slug} = useParams()
  return (

      <div>
          <div className=" bg-[#EFFAF4] h-screen">
             <div className=' py-10'>
              <PageLayout>
                 <BreadCrumb currentPageTitle={slug}/> 

                 <div className=' flex flex-col gap-5'>
                     <h1 className=' font-heading font-semibold text-[#171717] text-[39px]'>Java Programming for Beginner</h1>
                     <p className=' text-[20px] text-[#404040] font-sans'> lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                     <div className=' flex items-center gap-5 6]'>
                       <div className=' flex items-center gap-2' > <Signal color="#FD7E14"/> <p className='font-[16px] text-[#262626]'>Beginner</p></div>
                       <div className=' flex items-center gap-2'> <GraduationCap color="#FD7E14"/> <p className='font-[16px] text-[#262626]'>1200 Enrolled</p></div>
                       <div className=' flex items-center gap-2'> <Star fill='#FD7E14' color="#FD7E14"/> <p className='font-[16px] text-[#262626]'>4.5/5.0</p></div>
                       <div className=' flex items-center gap-2'> <Globe color="#FD7E14"/> <p className='font-[16px] text-[#262626]'>English</p ></div>
                     </div>
                 </div>
              </PageLayout>
               
             </div>
             
          </div>





      </div>
      
  )
}

export default CoursesDetailPage