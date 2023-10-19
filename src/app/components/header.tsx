"use client";

import Image from "next/image";
import logo from "../../../public/logo/pm-logos-black.png";
import instagram from "../../../public/icons/instagram.svg";
import strava from "../../../public/icons/strava.svg";

import LeftSideDrawer from "./leftSideDrawer";

const Header: React.FC = () => {
  return (
    <nav className="flex justify-between px-2 py-0 sm:py-5 sm:px-28 w-full">
      <div>
        <Image src={logo} width={100} alt="Pace Mates" priority />
      </div>
      <div className="hidden md:flex space-x-12">
        <button className="hover:underline">About</button>
        <button className="hover:underline">Merch</button>
        <button className="hover:underline">Run</button>
      </div>
      <div className="hidden md:flex justify-center items-center space-x-8">
        <button>
          <a href="https://www.instagram.com/pacematesrunclub/" target="_blank">
            <Image src={instagram} width={25} alt="instagram" priority />
          </a>
        </button>
        <button>
          <a href="https://www.strava.com/clubs/pacematesrunclub" target="_blank">
            <Image src={strava} width={25} alt="instagram" priority />
          </a>
        </button>
      </div>
      <div className="md:hidden flex justify-center items-center mr-3">
        <LeftSideDrawer />
      </div>
    </nav>
  );
};

export default Header;
