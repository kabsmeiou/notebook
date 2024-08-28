import React, { useEffect, useState } from 'react'

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

function Time() {
  const [currentTime, setCurrentTime] = useState(get_current_time());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(get_current_time());
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {currentTime}
    </div>
  )
}

export default Time