import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "./components/Layout";

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
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
