import React from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Typography } from "@mui/material";

interface CalendarHeaderProps {
    month: number;
    updateMonth: (monthShift: number) => void;
    year: number;
}

const months = ["January","February","March","April","May","June","July",
"August","September","October","November","December"]

const CalendarHeader = (props: CalendarHeaderProps): JSX.Element => {
    const { month, updateMonth, year } = props;
    const changeMonth = (monthShift: number) => {
        updateMonth(monthShift)
    }
    return (
        <div className="p-2 sm:py-3 w-full border border-[#eee] shrink">
            <div className="flex justify-between">
                <div className="col col-start">
                    <div className="icon" onClick={() => changeMonth(-1)}>
                        <ChevronLeftIcon className="cursor-pointer text-3xl hover:text-cyan-700	"/>
                    </div>
                </div>
                <div className="col col-center">
                <Typography variant="body1">
                    {months[month]} {year}
                </Typography>
                </div>
                <div className="col col-end" onClick={() => changeMonth(1)}>
                    <ChevronRightIcon className="cursor-pointer text-3xl hover:text-cyan-700"/>
                </div>
            </div>
        </div>
    );
};

export default CalendarHeader;