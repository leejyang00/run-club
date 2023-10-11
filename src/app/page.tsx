import Image from "next/image";
import logo from "../../public/logo/pm-logos-black.png";
import bars from "../../public/icons/bars.svg";
import instagram from "../../public/icons/instagram.svg";
import Header from "./components/header"
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="space-y-5 flex flex-col flex-grow justify-center items-center text-center">
        <div>WITNESS US</div>
        <div>CUZ SMTHNG AMZNG</div>
        <div>IS COMING</div>
      </div>
      <Footer />
    </main>
  );
}
