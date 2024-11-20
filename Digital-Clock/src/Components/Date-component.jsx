import React, { useState, useEffect } from "react";

const Dates = () => {
  const [dateInfo, setDateInfo] = useState({
    day: "Sunday",
    date: "01",
    month: "Jan",
    year: "1999",
  });

  useEffect(() => {
    const updateDate = () => {
      const currDate = new Date();
      const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      setDateInfo({
        day: dayNames[currDate.getDay()],
        date: currDate.getDate(),
        month: monthNames[currDate.getMonth()],
        year: currDate.getFullYear(),
      });
    };

    updateDate();
  }, []);

  return (
    <section className="dates">
      <div className="day">{dateInfo.day}</div>
      <div className="date">
        <div className="curr-date">{dateInfo.date}</div>
        <div className="dash">/</div>
        <div className="curr-month">{dateInfo.month}</div>
        <div className="dash">/</div>
        <div className="curr-year">{dateInfo.year}</div>
      </div>
    </section>
  );
};

export default Dates;
