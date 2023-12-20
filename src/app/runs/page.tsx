import { Metadata } from "next";
import React from "react";
import EventCard from "../components/EventCard";
import events from "../../../public/event-info.json";

export const metadata: Metadata = {
    title: "Pacemates - Runs",
    description: "Pacing Together, Join Our Runs",
};

export default function Runs() {
    return (
        <>
            {events.map((item, index) => (
                <EventCard href={item.src} alt={item.alt} key={index} />
            ))}
        </>
    );
}