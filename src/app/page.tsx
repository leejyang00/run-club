import Header from "./components/header";
import Footer from "./components/footer";
import Centre from "./components/centre";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Centre />
      <Footer />
    </main>
  );
}
