import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navigation } from "./_components/Navigation/Navigation";
import { Footer } from "./_components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ReduxProvider } from "./_components/providers/ReduxProvider";

const manrope = localFont({
  src: [
    {
      path: "./../public/fonts/manrope/Manrope-VariableFont_wght.ttf",
      weight: "400",
    },
    {
      path: "./../public/fonts/manrope/Manrope-VariableFont_wght.ttf",
      weight: "700",
    },
  ],
  variable: "--font-manrope",
});
const fraunces144 = localFont({
  src: [
    {
      path: "./../public/fonts/fraunces/Fraunces-VariableFont_SOFT,WONK,opsz,wght.ttf",
      weight: "600",
    },
  ],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Workit landing page",
  description: "Frontend mentor challange",
  icons: {
    icon: "/images/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${fraunces144.variable} font-manrope text-body padding-body-b`}
      >
        <ReduxProvider>
          <Navigation />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
