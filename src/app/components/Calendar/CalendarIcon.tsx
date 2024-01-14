import React from "react";

interface CalendarIconProps {
    month: number,
    date: number,
    day: number,
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec"]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const CalendarIcon = (props: CalendarIconProps): JSX.Element => {
    const { month, date, day } = props;

    return (

        <div>
            <div className="w-20 flex-none text-center border-solid border-2 border-gray-300 rounded-t lg:rounded-t-none lg:rounded-l">
                <div className="block rounded-t overflow-hidden text-center">
                    <div className="py-1">
                        {months[month]}
                    </div>
                    <div className="pt-1">
                        <span className="text-2xl text-cyan-700 font-bold leading-tight">
                            {date}
                        </span>
                    </div>
                    <div className="pb-2 border-solid border-t-2 rounded-b-lg text-center border-gray-300 -pt-2 -mb-1">
                        <span className="text-sm">
                            {days[day]}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarIcon;