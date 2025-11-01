import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-modal-video/scss/modal-video.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

import InitializeAOS from "@/helper/InitializeAOS";
// import RouteScrollToTop from "@/helper/RouteScrollToTop";
// import ColorPalate from "@/helper/ColorPalate";

import { ReactNode } from "react";
import Script from "next/script";
import { Nunito_Sans, Caveat, Outfit } from "next/font/google";

export const metadata = {
  title: "Charifund | Nonprofit & Fundraising Charity NEXT JS Template",
  description: "Nonprofit & Fundraising Charity NEXT JS Template.",
};

// ✅ Use Next.js font optimization (no <link> tags)
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${caveat.variable} ${outfit.variable}`}>
      <body suppressHydrationWarning>
        <InitializeAOS />
        {/* <RouteScrollToTop />
        <ColorPalate /> */}
        {children}

        {/* ✅ Load Bootstrap JS safely */}
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
