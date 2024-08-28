import React, {useState, useEffect} from 'react'

import Header from '../components/Header'
import monet from '../assets/monet.jpg'
import Calendar from '../components/Calendar'
import Time from '../components/Time'


function Home() {  
  return (
    <div className='h-screen w-screen top-0 left-0 bg-[#FEFAE0] overflow-hidden select-none'>
      <Header />
      <div className='flex h-screen'> 
        {/* the image */}
        <div className='h-max flex flex-col'>
          <div className='flex-auto h-[689px] w-[1120px] mt-14 bg-cover'
          style={{ backgroundImage: `url(${monet})` }}>
          </div>
          <p className='text-lg p-4 ms-32 font-[500] roboto-serif'>The Garden of Monet at Argenteuil,  Monet, 1873</p>
        </div>
        {/* container for left side elements (calendar, texts, time) */}
        <div className='h-max mt-14 w-screen flex flex-col justify-center items-center gap-y-4'>
          <div className='flex flex-col items-center roboto-serif font-[50]'>
            <Time />
            <p className='text-3xl font-[300]'>
              Good day, Kabs!
            </p>
          </div>
          {/* calendar */}
          <Calendar />
          <div>
            {/* quote */}
            <p className='w-[390px] text-center roboto-serif'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home