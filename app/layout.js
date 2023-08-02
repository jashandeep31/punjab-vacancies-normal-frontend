import UserState from "@/context/userState";
import "./globals.css";
import { Inter } from "next/font/google";
import LayoutClient from "./layout.client";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Lastest Job in Punjab - punjabvacancies",
    description:
        "Find the latest job vacancies in Punjab on PunjabVacancies.live. We provide up-to-date listings for government and private sector jobs across various industries. Discover your dream career in Punjab today",
    keywords:
        "job vacancies, Punjab, government jobs, private sector jobs, Punjab job opportunities, job openings, careers, employment, job search, job listings, Punjab jobs, job portal, job board, latest vacancies, job alerts, job notifications",
};

import Script from "next/script";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="./favicon.ico" sizes="any" />
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5294151828912060"
                    crossOrigin="anonymous"
                ></script>
            </head>
            <body className={inter.className}>
                <LayoutClient />
                <Toaster />
                <UserState>
                    {children}
                    <Analytics />
                </UserState>
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-DLLENX7Q9E" />
                <Script id="google-analytics">
                    {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-DLLENX7Q9E');
        `}
                </Script>
            </body>
        </html>
    );
}
