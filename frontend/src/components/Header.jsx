import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();

  const goToNewPage = (location) => {
    navigate(`/${location}`)
  };

  return (
    <div className='h-[89px] w-screen bg-[#FAEDCD] border-b-[1px] border-black'>
      <div className='flex h-full items-center p-8'>
        <div className='w-3/6'>
          <div className='text-[34px]'>Tales of a Random Human</div>
        </div>
        <nav className='flex w-3/6 justify-end gap-x-12'>
          <button className='text-[20px] p-2' onClick={() => goToNewPage("")}>Home</button>
          <button className='text-[20px] p-2 rounded-lg bg-[#D4A373]' onClick={() => goToNewPage("notebook")}>Notebook</button>
        </nav>
      </div>
    </div>
  )
}

export default Header