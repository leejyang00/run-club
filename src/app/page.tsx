import Image from "next/image";
import logo from "../../public/logo/pm-logos-black.png";
import bars from "../../public/icons/bars.svg";
import instagram from "../../public/icons/instagram.svg";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* header */}
      <nav className="flex justify-between px-2 py-0 sm:py-5 sm:px-28 w-full">
        <div>
          <Image src={logo} width={100} alt="Pace Mates" priority />
        </div>
        <div className="hidden md:flex space-x-12">
          <button className="hover:underline">About</button>
          <button className="hover:underline">Merch</button>
          <button className="hover:underline">Run</button>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <Image src={instagram} width={25} alt="instagram" priority />
        </div>
        <div className="md:hidden flex justify-center items-center mr-3">
          <button>
            <Image src={bars} width={40} alt="menu" priority />
          </button>
        </div>
      </nav>

      <div className="space-y-5 flex flex-col flex-grow justify-center items-center text-center">
        <div>WITNESS US</div>
        <div>CUZ SMTHNG AMZNG</div>
        <div>IS COMING</div>
      </div>

      <footer className="py-8 px-12">
        <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
          <div className="flex flex-col items-center">
            <Image src={logo} width={150} alt="Pace Mates" priority />
          </div>
          <div className="flex font-medium text-sm">
            <div>
              <a href="mailto:pacematesrunclub@gmail.com">
                <button>
                  <span className="underline">
                    PACEMATESRUNNINGCLUB@GMAIL.COM
                  </span>
                </button>
                &nbsp; // &nbsp;
                <button>
                  <a href="https://www.instagram.com/pacematesrunclub/">
                    <span className="underline">@PACEMATESRUNCLUB</span>
                  </a>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs">© 2023 PaceMates™. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
