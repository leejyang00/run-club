import React, { useState } from "react";
import Image from "next/image";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CalendarIcon from "./CalendarIcon";
import { Button, Divider } from "@mui/material";

interface EventProps {
    date: Date;
    time: string;
    event: string;
    src: string;
    route: string;
    description: string;
}

interface CalendarCellProps {
    month: number;
    cell: Date;
    events: EventProps[];
}

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const CalendarCell = (props: CalendarCellProps): JSX.Element => {
    const { month, cell, events } = props;
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className='flex flex-col p-1 sm:h-24'>
            <div className="w-full flex justify-end">
                <span className={`text-xs ${cell.getMonth() !== month ? 'text-gray-300' : ''}`}>{cell.getDate()}</span>
            </div>
            {events.map((item, idx) =>
                <div key={idx} className="group">
                    <div className="text-xs border-l-4 border-solid border-cyan-700 pl-1 cursor-pointer mb-2" onClick={() => setOpen(true)}>
                        {item.time} {item.event}
                    </div>
                    <Image src={item.src} width={200} height={200} alt={item.event} priority className="absolute hidden group-hover:block" />
                    <Modal
                        open={open}
                        onClose={() => setOpen(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 outline-0 shadow-xl w-3/4 max-h-128 overflow-scroll lg:w-1/2">
                            <div className="p-10 bg-white">
                                <div className="flex items-center justify-between flex-row">
                                    <div className="justify-between w-full">
                                        <Typography id="modal-modal-title" variant="h4" component="h1" className="mb-5 text-center md:text-left">
                                            {item.event}
                                        </Typography>
                                        <div className="mb-5 w-48 block mx-auto md:hidden">
                                            <img src={item.src} alt={item.event} />
                                        </div>
                                        <div className="flex flex-col items-center md:flex-row">
                                            <CalendarIcon month={month} date={cell.getDate()} day={cell.getDay()} />
                                            <div className="flex flex-col ml-0 text-center md:ml-8 md:text-left">
                                                <Typography id="modal-modal-title" component="h6">
                                                    <span className="font-bold mr-2">{days[cell.getDay()]}</span>
                                                    <span className="text-gray-500">{item.time}</span>
                                                </Typography>
                                                <Typography id="modal-modal-title" component="h6">
                                                    <span className="font-bold mr-2">Meet Up Spot</span>
                                                    <span className="text-gray-500">{item.event}</span>
                                                </Typography>
                                                <Typography id="modal-modal-title" component="h6">
                                                    Ready up and let's get running 🏃
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-48 hidden md:block">
                                        <img src={item.src} alt={item.event} />
                                    </div>
                                </div>
                                <Divider className="my-3 md:my-5" />
                                <div className="flex flex-col w-full items-center md:flex-row">
                                    <a href={item.route} target="_blank">
                                        <Button variant="contained" className="bg-cyan-700 max-w-fit m-0 hover:bg-cyan-700 md:mr-5">Route</Button>
                                    </a>
                                    <div className="w-fit mt-2 md:m-0">
                                        <img src="icons/mapmyrun.png" alt={item.event} />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#FFFFF4] px-10 py-4 text-sm" id="modal-modal-content">
                                {item.description}
                            </div>
                        </Box>

                    </Modal>
                </div>
            )}
        </div>
    );
};

export default CalendarCell;