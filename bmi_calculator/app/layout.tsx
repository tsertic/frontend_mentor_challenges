import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "./_components/Layout/Navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Body Mass Index Calculator",
  description: "Frontend Mentor | Body Mass Index Calculator",
  icons: [{ rel: "icon", url: "./images/favicon-32x32.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-bodyS md:text-bodyM text-dark-electric-blue`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
