import React from "react";
import { useState, useEffect } from "react";
const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    const total_seconds = parseInt(Math.floor(milliseconds / 1000));
    const total_minutes = parseInt(Math.floor(total_seconds / 60));
    const total_hours = parseInt(Math.floor(total_minutes / 60));

    const seconds = parseInt(total_seconds % 60);
    const minutes = parseInt(total_minutes % 60);
    return (
      <p>
        <span className="bg-indigo-500 text-white px-2 py-1 border-radius-lg rounded mx-1">
          {total_hours}
        </span>
        :
        <span className="bg-indigo-500 text-white px-2 py-1 border-radius-lg rounded mx-1">
          {minutes}
        </span>
        :
        <span className="bg-indigo-500 text-white px-2 py-1 border-radius-lg rounded mx-1">
          {seconds}
        </span>
      </p>
    );
  };

  return <div>{getFormattedTime(time)}</div>;
};

export default Timer;
