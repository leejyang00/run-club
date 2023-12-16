import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import InfoBar from "./common/InfoBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PaceMates Run Club",
  description: "Pacing Together, Creating Stories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <main className="min-h-screen flex flex-col">
          <InfoBar />
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
