import Image from "next/image";
import logo from "../../../public/logo/pm-logos-black.png";

export default function Footer() {
  return (
    <footer className="py-8 px-12">
      <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
        <div className="flex flex-col items-center">
          <Image src={logo} width={150} alt="Pace Mates" priority />
        </div>
        <div className="flex font-medium text-sm">
          <div>
            <button>
              <a href="mailto:pacematesrunclub@gmail.com">
                <span className="underline">
                  PACEMATESRUNNINGCLUB@GMAIL.COM
                </span>
              </a>
            </button>
            &nbsp; // &nbsp;
            <button>
              <a href="https://www.instagram.com/pacematesrunclub/">
                <span className="underline">@PACEMATESRUNCLUB</span>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xs">© 2023 PaceMates™. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
