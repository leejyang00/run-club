import Image from "next/image";
import logo from "../../../public/logo/pm-logos-black.png";
import instagram from "../../../public/icons/instagram.svg";
import strava from "../../../public/icons/strava.svg";

const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="px-10 py-3 sm:py-8 sm:px-28 flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
        <div className="hidden sm:flex flex-col items-center">
          <Image src={logo} width={100} alt="Pace Mates" priority />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="font-medium text-xs flex flex-col justify-center text-center sm:text-sm">
            <button>
              <a href="mailto:pacematesrunclub@gmail.com" target="_blank">
                <span className="underline">
                  PACEMATESRUNNINGCLUB@GMAIL.COM
                </span>
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
          <div className="flex justify-center items-center pt-3 space-x-5">
            <button>
              <a
                href="https://www.instagram.com/pacematesrunclub/"
                target="_blank"
              >
                <Image src={instagram} width={20} alt="instagram" priority />
              </a>
            </button>
            <button>
              <a
                href="https://www.strava.com/clubs/pacematesrunclub"
                target="_blank"
              >
                <Image src={strava} width={20} alt="instagram" priority />
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-5">
        <p className="text-xs">© 2023 PaceMates™. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
