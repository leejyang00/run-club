import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="text-sm sm:text-base space-y-5 flex flex-col flex-grow justify-center items-center text-center">
        <div>24 . 10 . 23</div>
        <div>BRISBANE SIGN, South Brisbane QLD 4101</div>
        <div>7 pm</div>
        <div>
          <a
            href="https://www.mapmyrun.com/routes/view/5789592190/"
            target="_blank"
          >
            <p className="underline hover:text-gray-500 duration-200">route</p>
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
