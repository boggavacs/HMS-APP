import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import React from "react";
import Footer from "@/components/footer/Footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "hms.ro",
  description: "Remote jobs & discussion board",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <React.StrictMode>
        <body>
          <Providers>
            <div className="flex justify-center">
            <div className="bg-pattern"></div>
            <main className="">
              <Header />
              <div className="mx-5 h-full">
                {children}
              </div>
              <Footer />
            </main>
            </div>
          </Providers>
        </body>
      </React.StrictMode>
    </html>
  );
}
