import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GDias.tech",
  description: "end-to-end digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/imgs/logo-white.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
