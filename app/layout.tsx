import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { calben, playfair } from "./fonts";
import "./globals.css";
import AppLayout from "./app-layout";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "10 Weeks - Nicholas Hutfilz",
  description: "How much can I improve my life in 10 weeks? Let's find out.",
  keywords: ["10 weeks", "nicholas hutfilz", "10 weeks hutfilz", "10 weeks nicholas hutfilz", "10 weeks 10 projects"],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          data-website-id="685eba61f3cb052a10731155"
          data-domain="10weeks.to"
          src="https://datafa.st/js/script.js"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${calben.variable} ${playfair.variable} font-body antialiased`}
      >
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
