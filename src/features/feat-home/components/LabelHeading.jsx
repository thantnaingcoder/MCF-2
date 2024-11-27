import React from 'react'

const LabelHeading = (label,heading) => {
  return (
    <div className=" flex flex-col items-center gap-2 mb-10">
    <h1 className=" font-label text-[20px] text-[#FD9035] font-semibold">
      Discover News
    </h1>
    <h1 className=" font-heading text-[26px] font-semibold">
      Our Top Listed courses
    </h1>
  </div>
  )
}

export default LabelHeading