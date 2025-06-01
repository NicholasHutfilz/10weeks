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
  title: "10 Weeks - 10 Projects",
  description: "A magazine-style showcase of 10 projects over 10 weeks",
  keywords: ["projects", "portfolio", "magazine", "showcase"],
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
