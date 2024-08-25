import React from 'react'
import Header from '../components/Header'

function Notebook() {
  return (
    <div className='h-screen w-screen top-0 left-0 bg-[#FEFAE0] overflow-hidden'>
      <Header />
      <div className='absolute bottom-0 w-screen h-[60px] bg-[#FAEDCD]'>
        <div className='flex flex-col w-full h-full justify-center items-center roboto-serif'>
          <div>
            <p>"The limits of my language means the limits of my world."</p>
            <p className='float-right text-xs'>- L. Wittgenstein</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notebook