// src/components/Timer.jsx
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    // Clean up the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="timer">
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Timer;
