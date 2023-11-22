import Centre from "./components/Centre";
import InfoBar from "./common/InfoBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <InfoBar />
      <Header />
      <Centre />
      <Footer />
    </main>
  );
}
