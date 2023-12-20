"use client"; // This is a client component
import React, { useState } from 'react';
import CalendarHeader from "./CalendarHeader";

interface DateProps {
  month: number;
  year: number;
}

// Get initial dates, months is in numbers between index 0 - 11
const getDate = (): DateProps => {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  return {
    month: month,
    year: year
  };
}

const Calendar = (): JSX.Element => {
  const [date, setDate] = useState<DateProps>(getDate());
  const updateMonth = (monthShift: number): void => {
    const newMonth = (date.month + monthShift + 12) % 12;
    const yearOffset = Math.floor((date.month + monthShift) / 12);
    const newYear = date.year + yearOffset;
    setDate({...date, month: newMonth, year: newYear })
  }

  return (
    <div>
      <CalendarHeader month={date.month} year={date.year} updateMonth={updateMonth}/>
    </div>
  );
};

export default Calendar;
