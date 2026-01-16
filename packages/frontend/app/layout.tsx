import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/lib/apollo-provider";
import Header from "@/components/Header";
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
  title: "Multi-Scan | Multi-Chain Explorer",
  description: "Advanced analytics for multi-chain event data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-100 selection:text-blue-900`}
      >
        <Providers>
          <div className="flex flex-col min-h-screen bg-zinc-50/50">
            <Header />
            <div className="flex-1">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
