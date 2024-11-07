"use client";

import { useEffect, useState } from "react";

const CountdownTimer = ({ duration, setIsCheckBoxActive = null }) => {
  const [time, setTime] = useState(duration),
    [seconds, setSeconds] = useState(0),
    [minutes, setMinutes] = useState(0),
    [hours, setHours] = useState(0);

  let interVal;
  useEffect(() => {
    let totalMinutes = parseInt(Math.floor(time / 60)),
      totalHours = parseInt(Math.floor(totalMinutes / 60));

    interVal = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    setSeconds(parseInt(time % 60));
    setMinutes(parseInt(totalMinutes % 60));
    setHours(parseInt(totalHours % 60));

    if (time === 0) {
      clearInterval(interVal);
      setIsCheckBoxActive && setIsCheckBoxActive(true);
    }

    return () => clearInterval(interVal);
  }, [time]);

  return (
    <div className="flex  opacity-70">
      <div className="flex ">
        <span>{minutes > 9 ? minutes : `0${minutes}`}</span>
      </div>
      &nbsp;:&nbsp;
      <div className="flex  ">
        <span>{seconds > 9 ? seconds : `0${seconds}`}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
