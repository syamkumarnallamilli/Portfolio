import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display:"swap",
});

export const metadata = {
  title: "Syam Kumar | Web Developer | Full Stack Developer",
  description: "Hi, I'm Syam Kumar. I build modern and responsive websites using technologies. Take a look at my work and skills.",
  keywords: [
    "Syam Kumar",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Spring Boot Developer",
    "Java Developer",
    "Web Developer Portfolio",
  ],
  alternates: {
  canonical: "https://syamdevportfolio.vercel.app/",
},


   authors: [{ name: "Syam Kumar", url: "https://syamdevportfolio.vercel.app/" }],
  metadataBase: new URL("https://syamdevportfolio.vercel.app/"), 
  verification: {
    google: "pxawGgvOEdrGf6I-LWhAPOBd6UnnByz-mTD2cIIrmV0"
  },
  openGraph: {
    title: "Syam Kumar | Full Stack Web Developer",
    description:
      "Explore my portfolio — modern, responsive web apps built using React, Next.js, and Spring Boot.",
    url: "https://syamdevportfolio.vercel.app/",
    siteName: "Syam Kumar Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Syam Kumar Portfolio Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg", 
  },

  robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},

};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <div className="pt-18 min-h-screen">
        {children}
        <Analytics /> 
        </div>
        <Footer/>
        
      </body>
    </html>
  );
}
