import React from "react";
import { Typography } from "@mui/material";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const CalendarGrid = (): JSX.Element => {
    return (
        <>
            <div className="grid grid-cols-7 border-x border-[#eee] py-2 hidden sm:grid">
                {days.map((item, idx) => 
                    <div className="text-center" key={item}>
                        <Typography className="text-gray-500 text-sm">{item}</Typography>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-7 border-x border-[#eee] py-2 grid sm:hidden">
                {shortDays.map((item, idx) => 
                    <div className="text-center" key={idx}>
                        <Typography className="text-gray-500 text-sm">{item}</Typography>
                    </div>
                )}
            </div>
        </>
        
    );
};

export default CalendarGrid;

