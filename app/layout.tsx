import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import localFont from "next/font/local";
import Footer from "./components/Footer";

const myFont = localFont({
  src: [
    { path: "../public/Fonts/Anton-Regular.ttf", weight: "700" },
    { path: "../public/Fonts/Acumin.ttf", weight: "400" },
    { path: "../public/Fonts/Acumin-BdPro.otf", weight: "600" },

  ],
});

export const metadata: Metadata = {
  title: "Creator Deck",
  description: "An Agency That Engineers Influence",
  icons: {
    icon: "../public/Logos/redLogoMobile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
      <link rel="icon" href="../public/Logos/redLogoMobile.png" sizes="any" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
