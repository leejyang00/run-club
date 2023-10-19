import Image from "next/image";
import logo from "../../../public/logo/pm-logos-black.png";
import bars from "../../../public/icons/bars.svg";
import instagram from "../../../public/icons/instagram.svg";

export default function Header() {
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
            <div className="hidden md:flex justify-center items-center">
                <Image src={instagram} width={25} alt="instagram" priority />
            </div>
            <div className="md:hidden flex justify-center items-center mr-3">
                <button>
                    <Image src={bars} width={40} alt="menu" priority />
                </button>
            </div>
        </nav>
    );
}
