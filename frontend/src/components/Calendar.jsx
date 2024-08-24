import React, {useEffect, useState } from 'react'
import Week from './Week'

const today = new Date();

function Calendar() {
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(today.getFullYear);
    }, 60000 * 24); 

    return () => clearInterval(interval);
  }, []);

  const months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];
  
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  
  const rows = 7;
  const divs = Array.from({length: rows});

  const dayCount = 7;
  const counts = Array.from({length: dayCount});

  return (
    <>
      <div className='flex flex-col h-max w-max items-center rounded shadow-md bg-[#CCD5AE] px-6 py-4 gap-y-2'>
        <p className='font-bold text-[26px]'>{months[today.getMonth()]}</p>
        <div>
          <ul className='flex gap-x-8'>
            {counts.map((_, x) => (
              <li className='flex justify-center w-[33px]'>{weekdays[x]}</li>
            ))}
          </ul>
          <div className="flex flex-col gap-y-4 mt-2">
            {divs.map((_, x) => (
              <div key={x} className="w-full flex gap-x-[32px]">
                {counts.map((_, y) => (
                  <div key={y} className='flex justify-center w-[33px]'>{(y + (7 * x)) % 31 + 1}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className='text-center text-xl font-semibold'>{currentYear}</div>
      </div>
    </>
  )
}

export default Calendar