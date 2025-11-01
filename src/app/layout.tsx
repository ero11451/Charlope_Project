import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-modal-video/scss/modal-video.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import "./globals.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { Inter, Hubot_Sans, Edu_VIC_WA_NT_Beginner } from "next/font/google";


import InitializeAOS from "@/helper/InitializeAOS";

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
// Load each font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const hubotSans = Hubot_Sans({
  subsets: ["latin"],
  variable: "--font-hubot",
  display: "swap",
});

const edu = Edu_VIC_WA_NT_Beginner({
  subsets: ["latin"],
  variable: "--font-edu",
  display: "swap",
});


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${caveat.variable} ${outfit.variable} ${inter.variable} ${hubotSans.variable} ${edu.variable}`}>
      <head>
      <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
       <link
          href="https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@400..700&family=Hubot+Sans:ital,wght@0,200..900;1,200..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <link
         href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" 
         rel="stylesheet" 
         integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
        />
      
      </head>
      <body suppressHydrationWarning>
        <InitializeAOS />
        {/* <RouteScrollToTop />
        <ColorPalate /> */}
        {children}

        {/* ✅ Load Bootstrap JS safely */}
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4" />
        <Script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4" />


      </body>
    </html>
  );
}
