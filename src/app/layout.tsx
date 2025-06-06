import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import { Outfit } from "next/font/google";
import React from "react";
// import { HeroUIProvider } from "@heroui/system";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

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
          <Providers>
          {/* <HeroUIProvider> */}
            <div className="bg-pattern"></div>
            <main className="container md:max-auto sm:max-auto p-0 ">
              <Header  />
                <div
                  className="p-5 sm:p-0 lg:p-0"
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
            </Providers>
          {/* </HeroUIProvider> */}
        </body>
      </React.StrictMode>
    </html>
  );
}
