import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import localFont from "next/font/local";
import Footer from "./components/Footer";

const myFont = localFont({
  src: [
    { path: "../public/Fonts/Roboto-Regular.ttf", weight: "400" },
    { path: "../public/Fonts/Roboto-Medium.ttf", weight: "500" },
    { path: "../public/Fonts/Roboto-Bold.ttf", weight: "600" },
    { path: "../public/Fonts/Anton-Regular.ttf", weight: "700" },

  ],
});

export const metadata: Metadata = {
  title: "Creator Deck",
  description: "An Agency That Engineers Influence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
