import Image from "next/image";
import { useState } from "react";
import { Button, Drawer } from "@mui/material";
import bars from "../../../public/icons/bars.svg";
import xmark from "../../../public/icons/xmark.svg";
import logo from "../../../public/logo/pm-logos-black.png";
import instagram from "../../../public/icons/instagram.svg";
import strava from "../../../public/icons/strava.svg";
import dynamic from "next/dynamic";

const LeftSideDrawer = (): JSX.Element => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          console.log("clicked!");
          setActive(!active);
        }}
      >
        <Image src={bars} width={40} alt="menu" priority></Image>
      </Button>
      <Drawer
        anchor="right"
        open={active}
        onClose={() => setActive(false)}
        PaperProps={{
          sx: { width: "100%", paddingX: 2, backgroundColor: '#FFFFF4' },
        }}
      >
        <div className="min-h-screen flex flex-col">
          <div className="flex justify-between items-center">
            <Image src={logo} width={100} alt="Pace Mates" priority />
            <Button onClick={() => setActive(false)}>
              <Image src={xmark} width={20} alt="xmark" priority />
            </Button>
          </div>
          <div className="flex flex-col flex-grow justify-center items-center space-y-8 text-2xl">
            {/* use a href to close the navigation tab */}
            <a href="/" color={"rgba(#000000)"}>
              HOME
            </a>
            <a href="/story" color={"rgba(#000000)"}>
              THE PACEMATES STORY
            </a>
            <a href="/" color={"rgba(#000000)"}>
              RUNS
            </a>
          </div>
          <div className="py-14 flex justify-center items-center space-x-8">
            <button>
              <a
                href="https://www.instagram.com/pacematesrunclub/"
                target="_blank"
              >
                <Image src={instagram} width={25} alt="instagram" priority />
              </a>
            </button>
            <button>
              <a
                href="https://www.strava.com/clubs/pacematesrunclub"
                target="_blank"
              >
                <Image src={strava} width={25} alt="instagram" priority />
              </a>
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default LeftSideDrawer;
