import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { calben, playfair } from "./fonts";
import "./globals.css";
import AppLayout from "./app-layout";

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
