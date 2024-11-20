import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState({
    hour: "00",
    minute: "00",
    second: "00",
    period: "AM",
  });

  const [activeCircles, setActiveCircles] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const currTime = new Date();
      let hour = currTime.getHours();
      const minute = currTime.getMinutes();
      const second = currTime.getSeconds();

      const period = hour >= 12 ? "PM" : "AM";
      hour = hour % 12 || 12;

      setTime({
        hour: hour < 10 ? `0${hour}` : hour.toString(),
        minute: minute < 10 ? `0${minute}` : minute.toString(),
        second: second < 10 ? `0${second}` : second.toString(),
        period,
      });
    };

    const interval = setInterval(updateClock, 1000);
    const circleToogleInterval = setInterval(() => {
      setActiveCircles((prev) => !prev);
    }, 500);

    updateClock();

    return () => {
      clearInterval(interval);
      clearInterval(circleToogleInterval);
    };
  }, []);

  return (
    <section className="clock">
      <div className="hour">{time.hour}</div>
      <div className="seperator">
        <div className={`circle ${activeCircles ? "circle-active" : ""}`}>
          &#9679;
        </div>
        <div className={`circle ${activeCircles ? "circle-active" : ""}`}>
          &#9679;
        </div>
      </div>
      <div className="minute">{time.minute}</div>
      <div className="seperator">
        <div className={`circle ${activeCircles ? "circle-active" : ""}`}>
          &#9679;
        </div>
        <div className={`circle ${activeCircles ? "circle-active" : ""}`}>
          &#9679;
        </div>
      </div>
      <div className="second">{time.second}</div>
      <div className="period">{time.period}</div>
    </section>
  );
};

export default Clock;
