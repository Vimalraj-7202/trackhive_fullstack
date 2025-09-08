import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {Providers} from '@/app/Providers/reduxprovider';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrackHive",
  description: "A Team Management Application.",
   icons: {
    icon: "/hive.svg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
           {children}
        </Providers>
       
      </body>
    </html>
  );
}
