import React from "react";

import Header from "../../app/components/Header";
import "../globals.css";
import Footer from "@/app/components/Footer";
import InfoBar from "@/app/common/InfoBar";
import { Typography } from "@mui/material";

export default function Runs() {
  return (
    <main className="min-h-screen flex flex-col">
      <InfoBar />
      <Header />
      <div className="flex flex-col flex-grow items-center justify-center pb-6 pt-3 bg-[#F8F6F0]">
        <Typography variant="h1" gutterBottom>
          Runs
        </Typography>
      </div>
      <Footer />
    </main>
  );
}
