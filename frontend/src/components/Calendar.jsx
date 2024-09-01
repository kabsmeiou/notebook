import React, { useEffect, useState } from 'react'

function get_date() {
  const today = new Date();
  return today.getDate();
}

function get_month() {
  const today = new Date();
  return today.getMonth();
}

function get_year() {
  const today = new Date();
  return today.getFullYear();
}

function Calendar() {
  const [currentYear, setCurrentYear] = useState(get_year());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(get_year());
    }, 60000 * 24); 

    return () => clearInterval(interval);
  }, []);

  const months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];
  
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const dayCount = 7;
  const counts = Array.from({length: dayCount});

  const firstDayOfMonth = new Date(get_year(), get_month() + 1, 1).getDay();
  const lastDateOfMonth = new Date(get_year(), get_month() + 2, 0).getDate();
  const lastDayOfMonth = new Date(get_year(), get_month() + 2, 0).getDay();
  const sentinel = Array.from({length: 42}); //fixed calendar size

  const prevLastDayOfMonth = new Date(get_year(), get_month(), 0).getDate();

  return (
    <>
      <div className='flex flex-col h-max w-max items-center rounded shadow-md bg-[#FAEDCD] px-6 py-4 gap-y-2 select-none'>
        <p className='font-[550] text-[26px] roboto-serif'>{months[get_month()]}</p>
        <div>
          <ul className='flex gap-x-8 roboto-serif font-[500]'>
            {counts.map((_, x) => (
              <li key={x} className='flex justify-center w-[33px]'>{weekdays[x]}</li>
            ))}
          </ul>
          <div className="flex gap-y-4 mt-4">
            <div className="flex flex-wrap w-full max-w-[425px] gap-y-4 gap-x-[32px]">
              {sentinel.map((_, y) => {
                const max = (lastDateOfMonth + firstDayOfMonth)
                const value = y % max + 1;
                // highlight current date
                if (y === get_date() + firstDayOfMonth - 1) {
                  return <div key={y} className='flex justify-center items-center h-[33px] w-[33px] rounded-full bg-[#D4A373] border-black border-[1px]'>{value - firstDayOfMonth}</div>
                } else if (y >= firstDayOfMonth && y < max){ 
                  return <div key={y} className='flex justify-center items-center h-[33px] w-[33px]'>{value - firstDayOfMonth}</div>
                } else if (y <= firstDayOfMonth) {  // change opacity for dates not in the current month
                  return <div key={y} className='flex justify-center items-center h-[33px] w-[33px] opacity-[0.5]'>{(prevLastDayOfMonth - firstDayOfMonth + 2) + y}</div> 
                } else {   // fill the calendar with next month's dates
                  return <div key={y} className='flex justify-center items-center h-[33px] w-[33px] opacity-[0.5]'>{y - (34 - (7 - (lastDayOfMonth + 1)))}</div> 
                }
              })}
            </div>
          </div>
        </div>
        <div className='text-center text-xl font-semibold mt-2 roboto-serif'>{currentYear}</div>
      </div>
    </>
  )
}

export default Calendar