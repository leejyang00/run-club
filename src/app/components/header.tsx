"use client";

import Image from "next/image";
import logo from "../../../public/logo/pm-logos-black.png";
import instagram from "../../../public/icons/instagram.svg";
import strava from "../../../public/icons/strava.svg";

import LeftSideDrawer from "./LeftSideDrawer";
import { Divider } from "@mui/material";
import dynamic from "next/dynamic";

const NavLink = dynamic(() => import("./NavLink"), { ssr: false });
const SocialLink = dynamic(() => import("./SocialLink"), {
  ssr: false,
});

const Header = (): JSX.Element => {
  return (
    <nav className="flex justify-between px-2 sm:px-2 md:px-30 lg:px-40 xl:px-52 py-2 sm:py-3 w-full bg-[#FFFFF4] border-b shrink">
      {/* Logo */}
      <div>
        <Image src={logo} width={70} alt="Pace Mates" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex text-xs justify-center items-center space-x-8">
        {/* TBD: update the react routing section for SSR and client-side */}
        <NavLink href="/" text="HOME" />
        <NavLink href="/story" text="THE PACEMATES STORY" /> 
        <NavLink href="/" text="RUNS" />
      </div>

      {/* Social Links */}
      <div className="hidden md:flex justify-between items-center space-x-8">
        <Divider
          variant="middle"
          orientation="vertical"
          sx={{
            maxHeight: "50%",
            marginRight: "30px",
            display: "flex",
            justifyItems: "start",
          }}
        />
        <SocialLink
          href="https://www.instagram.com/pacematesrunclub/"
          image={instagram}
          alt="Instagram"
        />
        <SocialLink
          href="https://www.strava.com/clubs/pacematesrunclub"
          image={strava}
          alt="Strava"
        />
      </div>

      {/* Mobile Drawer */}
      <div className="md:hidden flex justify-center items-center">
        <LeftSideDrawer />
      </div>
    </nav>
  );
};

export default Header;
