"use client"; // This is a client component
import React, { useState } from 'react';
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from './CalendarGrid';
import { eachDayOfInterval, startOfWeek, endOfWeek } from 'date-fns';
import CalendarCell from './CalendarCell';
import events from "../../../../public/event-info.json";

interface DateProps {
  month: number;
  year: number;
}

interface EventProps {
  date: Date;
  time: string;
  event: string;
  src: string;
  route: string;
  description: string
}

// Get initial dates, months is in numbers between index 0 - 11
const getDate = (): DateProps => {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  return {
    month: month,
    year: year,
  };
}

// Get all the day in specified month and year
const getDays = (year: number, month: number): Date[][] => {
  const start = startOfWeek(new Date(year, month, 1));
  const end = endOfWeek(new Date(year, month + 1, 0));
  const daysInMonth = eachDayOfInterval({ start, end });
  const newArr = [];
  while (daysInMonth.length) newArr.push(daysInMonth.splice(0, 7));
  return newArr;
}

// Get all the booked events in specified month and year
const getEvents = (year: number, month: number): EventProps[] => {
  const filteredEvent = events.filter((item) => item.month - 1 === month && item.year === year).map(function (x) { return { date: new Date(x.year, x.month - 1, x.date), event: x.id, time: x.time, src: x.src, route: x.route, description: x.description } });
  return filteredEvent
}

const Calendar = (): JSX.Element => {
  // Variables
  const [date, setDate] = useState<DateProps>(getDate());
  const [bookedDates, setBookedDates] = useState<EventProps[]>(getEvents(date.year, date.month))
  const [days, setDays] = useState<Date[][]>(getDays(date.year, date.month))

  // Functions
  // Update month
  const updateMonth = (monthShift: number): void => {
    const newMonth = (date.month + monthShift + 12) % 12;
    const yearOffset = Math.floor((date.month + monthShift) / 12);
    const newYear = date.year + yearOffset;
    setDate({ ...date, month: newMonth, year: newYear })
    setDays(getDays(newYear, newMonth))
    setBookedDates(getEvents(newYear, newMonth))
  }

  return (
    <div className="w-full px-2 sm:px-2 md:px-30 lg:px-40 xl:px-52 py-2 sm:py-3">
      <CalendarHeader month={date.month} year={date.year} updateMonth={updateMonth} />
      <CalendarGrid />
      <div className="border border-[#eee] divide-y">
        {days.map((row, idx) =>
          <div className='grid grid-cols-7 divide-x divide-solid' key={idx}>
            {row.map((cell, idx) =>
              <CalendarCell cell={cell} month={date.month} events={bookedDates.filter(x => x.date.getDate() === cell.getDate() && x.date.getMonth() === date.month)} key={idx} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
