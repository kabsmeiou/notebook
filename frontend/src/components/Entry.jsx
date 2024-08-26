import React from 'react'

function Entry({title, date}) {
  return (
    <div className="flex gap-x-4 w-full">
      <div className='h-[60px] w-[2px] bg-[#D4A373]'></div>
      <div className='flex flex-col justify-center w-full'>
        <div className='w-full lg:text-[22px] md:text-[16px]'>Sample Title</div>
        <div className='w-full lg:text-[16px] md:text-[10px]'>8:17, August 19, 2024</div>
      </div>
    </div>
  )
}

export default Entry