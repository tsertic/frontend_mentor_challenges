import "./globals.css";
import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { Footer } from "./_components/Layout/Footer/Footer";
import { Navigation } from "./_components/Layout/Navigation/Navigation";

const publicSans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easybank landing page",
  description: "Frontend Mentor | Easybank landing page",
  icons: [
    {
      rel: "icon",
      sizes: "32x32",
      url: "/favicon-32x32.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.className} bg-base-200 text-base-content text-bodyS xl:text-bodyM`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
