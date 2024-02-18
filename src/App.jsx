import React, { useEffect, useState } from "react";
import Confetti from 'react-confetti'
import './App.css'


function App() {

  return (
    <div className="w-screen h-screen bg-slate-400 flex items-center justify-center bganimate">
      <Confetti />
      <div className="w-1/2 h-1/2 flex flex-col gap-10 p-10 justify-center items-center">
        <img src="/public/wuwalogo.png" alt="wuwalogo" className="w-1/2 " />
        <h2 className="font-bold text-white text-2xl">Countdown</h2>
        <Timer />
        <div className="flex gap-4">
          <ul>
            <li><a href="https://wutheringwaves.kurogame.com/en/#main" className="text-slate-200 underline" target="_blank">Wuwa main site</a></li>
          </ul>
        </div>
        <div className="flex gap-4">
          <img className="w-4" src="/public/twitter-svgrepo-com.svg" alt="twit" />
          <h1>@eveneve4u</h1>
        </div>
      </div>
    </div>
  );
}

function Timer() {
  const [time, setTime] = useState(new Date());
  const [timesUp, setTimesUp] = useState(false);

  useEffect(() => {
    const now = new Date();
    const targetTime = new Date(Date.UTC(2024, 1, 19, 2, 0, 0)); // February 19, 10 AM UTC+8 is 2 AM UTC

    const timeoutId = setTimeout(() => setTimesUp(true), targetTime.getTime() - now.getTime());

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const targetTime = new Date(Date.UTC(2024, 1, 19, 2, 0, 0)); // February 19, 10 AM UTC+8 is 2 AM UTC

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetTime - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    // Clear the interval if the component is unmounted
    return () => clearInterval(intervalId);
  }, []);


  return (
    <h1 className="text-4xl text-white">
      {/* {timesUp ? 'Times up!' : `Current time: ${time.toLocaleTimeString()}`} */}
      {timesUp ? 'GET IN THE GAME!!!' : `Time remaining: ${time}`}
    </h1>
  );
}

export default App
