// pages/about.js
// import Layout from "../components/Layout"
import { Typography } from "@mui/material";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Pacemates - Our Story",
    description: "Pacing Together, Creating Stories",
};

export default function About() {
    return (
        <>
            <div className="flex flex-col flex-grow items-center justify-center pb-6 pt-3 bg-[#F8F6F0]">
                <Typography variant="h1" gutterBottom>
                    The Pacemates Story
                </Typography>
                <Typography variant="body1">
                    This is the content for "THE PACEMATES STORY" page.
                </Typography>
            </div>
        </>
    );
}