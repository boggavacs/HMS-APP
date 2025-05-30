import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Outfit } from "next/font/google";
import React from "react";
import { HeroUIProvider } from "@heroui/system";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "hms.ro",
  description: "Remote jobs & discussion board",
};

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <React.StrictMode>
        <body className={outfit.className}>
          <HeroUIProvider>
            <main className="2xl:container border-2 md:max-auto sm:max-auto">
              <Header  />
                <div
                  style={{
                  minHeight: "calc(100dvh - 28px - 28px)",
                  display: "flex",
                  flexDirection: "column",
                  }}
                >
                  {children}
                </div>
              <Footer />
            </main>
          </HeroUIProvider>
        </body>
      </React.StrictMode>
    </html>
  );
}
