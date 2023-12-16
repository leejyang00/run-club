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
            <div className="flex flex-col flex-grow items-center justify-center pb-sm-6 pt-sm-3 bg-[#F8F6F0]">
                <h1 className="text-7xl text-primary pb-6">
                    The Pacemates Story
                </h1>
                <p className="text-base">
                    This is the content for "THE PACEMATES STORY" page.
                </p>
            </div>
        </>
    );
}