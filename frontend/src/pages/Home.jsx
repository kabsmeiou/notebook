import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import monet from '../assets/monet.jpg'
import Calendar from '../components/Calendar'

function get_current_time() {
  const today = new Date();
  var hours = "0" + today.getHours()
  var minutes = "0" + today.getMinutes()
  
  // pad leading zero
  return ( 
    <p className='font-extrabold text-6xl'>
      {hours.slice(-2)}:{minutes.slice(-2)}
    </p>
  )
}

function Home() {
  const [currentTime, setCurrentTime] = useState(get_current_time());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(get_current_time());
    }, 2000); 

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className='h-screen w-screen top-0 left-0 bg-[#FEFAE0] overflow-hidden select-none'>
      <Header />
      <div className='flex h-screen'> 
        {/* the image */}
        <div className='h-max flex flex-col'>
          <div className='h-[689px] w-[1120px] mt-14 bg-cover'
          style={{ backgroundImage: `url(${monet})` }}>
          </div>
          <p className='text-lg p-4 ms-32 font-[500] roboto-serif'>The Garden of Monet at Argenteuil,  Monet, 1873</p>
        </div>
        {/* container for left side elements (calendar, texts, time) */}
        <div className='h-max mt-14 w-screen flex flex-col justify-center items-center gap-y-4'>
          <div className='flex flex-col items-center roboto-serif font-[50]'>
            {currentTime}
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