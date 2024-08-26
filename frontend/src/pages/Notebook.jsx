import React from 'react'
import Header from '../components/Header'
import Entry from '../components/Entry'
import { useNavigate } from 'react-router-dom'
import parasol from '../assets/parasol.jpg'
import bridge from '../assets/bridge.jpg'
import house from '../assets/peasant.jpg'
import plumtrees from '../assets/plumtrees.jpg'

function Notebook() {

  return (
    <div className='h-screen w-screen top-0 left-0 bg-[#FEFAE0] overflow-hidden select-none'>
      <Header />
      <div className="flex w-screen h-full gap-x-10">
        <div className="flex w-2/5 roboto-serif">
          <div className='flex flex-col items-start gap-y-8 w-4/5 mt-28 ms-16'>
            <div className='flex gap-4 text-[24px]'>
              <button className=''>Entries</button>
              <div className='w-[1px] h-[36px] bg-black'></div>
              <button className='opacity-[0.5]'>Drafts</button>
            </div>
            <div className='relative flex flex-col gap-y-8 w-full ms-14'>
              <Entry />
              <Entry />
              <Entry />
              <Entry />
              <Entry />
            </div>
          </div>
        </div>
        <div className='hidden flex items-center h-full w-max ms-4'>
          <div className='w-[520px] h-[700px] mb-36 shadow-md bg-white'></div>
        </div>
        <div className='flex items-center h-screen w-3/5 overflow-hidden'>
          <div className='grid grid-rows-12 grid-cols-12 lg:h-[700px] md:h-[500px] sm:h-[400px] w-full mb-36 gap-1'>
            <div className='row-span-5 col-span-7 bg-cover bg-center' 
            style={{ backgroundImage: `url(${house})` }}></div>
            <div className='col-start-8 col-span-5 row-span-7 bg-cover bg-center ' 
            style={{ backgroundImage: `url(${parasol})` }}></div>
            <div className='flex row-span-2 col-span-4 items-center'>
              Name here
            </div>
            <div className='row-span-5 col-span-8 bg-cover bg-center' 
            style={{ backgroundImage: `url(${plumtrees})` }}></div>
            <div className='row-span-5 col-span-4 bg-cover bg-center' 
            style={{ backgroundImage: `url(${bridge})` }}></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-2/5">
          <div className='flex flex-col items-center roboto-serif font-[50]'>
            8:35
            <p className='text-3xl font-[300]'>
              Good day, Kabs!
            </p>
          </div>
          <div>
              {/* quote */}
            <p className='w-[390px] text-center roboto-serif'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam"
            </p>
          </div>
        </div>
      </div>
      {/* footer */}
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