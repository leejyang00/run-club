import Image from "next/image";
import logo from "../../../public/logo/pm-logos-white.png";
import Instagram from "../../../public/icons/instagram-white.svg";
import Strava from "../../../public/icons/strava-white.svg";

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-black border-t text-white pt-3">
      <div className="px-2 sm:px-2 md:px-30 lg:px-40 xl:px-52 py-2 sm:py-3 flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
        <div className="hidden sm:hidden md:flex flex-col items-center">
          <Image src={logo} width={70} alt="PaceMates" priority />
        </div>

        <div className="font-medium text-xs flex flex-col justify-center text-center">
          <button>
            <a href="mailto:pacematesrunclub@gmail.com" target="_blank">
              <span className="underline">PACEMATESRUNNINGCLUB@GMAIL.COM</span>
            </a>
          </button>
          &nbsp; // &nbsp;
          <button>
            <a
              href="https://www.instagram.com/pacematesrunclub/"
              target="_blank"
            >
              <span className="underline">@PACEMATESRUNCLUB</span>
            </a>
          </button>
        </div>

        <div className="hidden sm:hidden md:flex justify-center items-center pt-3 space-x-5 py-2">
          <button>
            <a
              href="https://www.instagram.com/pacematesrunclub/"
              target="_blank"
            >
              <Image src={Instagram} width={18} alt="instagram" priority />
            </a>
          </button>
          <button>
            <a
              href="https://www.strava.com/clubs/pacematesrunclub"
              target="_blank"
            >
              <Image src={Strava} width={18} alt="strava" priority />
            </a>
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center py-3">
        <p className="text-xs">© 2023 PaceMates™. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
