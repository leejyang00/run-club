import Calendar from "../components/Calendar/Calendar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Pacemates - Our Story",
    description: "Run with us!",
};

export default function About() {
    return (
        <>
            <Calendar/>
        </>
    );
}