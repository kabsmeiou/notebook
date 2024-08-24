import React from 'react'

function Week({week}) {
  return (
    <>
      <div className='flex flex-col'>
        <p className='w-max h-max text-[16px]'>{week}</p>
      </div>
    </>
  )
}

export default Week