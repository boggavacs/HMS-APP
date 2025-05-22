import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HMS",
  description: "Remote job & discussion board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
