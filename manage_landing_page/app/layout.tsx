import "./globals.css";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Navigation } from "./_components/Layout/Navigation/Navigation";
import { Footer } from "./_components/Layout/Footer/Footer";
import { SimplifyBanner } from "./_components/shared/SimplifyBanner";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});
export const metadata: Metadata = {
  title: "Manage",
  description: "Manage landing page | Frontend Mentors Chalenge",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${beVietnamPro.className} text-base-content/50 text-bodyS lg:text-bodyM  bg-base-100`}
      >
        <Navigation />
        {children}
        <SimplifyBanner />
        <Footer />
      </body>
    </html>
  );
}
