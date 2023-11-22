import Centre from "./components/centre";
import InfoBar from "./common/InfoBar";
import Header from "./components/header";
import Footer from "./components/footer";

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
