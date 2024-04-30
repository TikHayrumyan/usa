import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    { path: "../public/Fonts/Anton-Regular.ttf", weight: "700" },
    { path: "../public/Fonts/Acumin.ttf", weight: "400" },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
      </body>
    </html>
  );
}
