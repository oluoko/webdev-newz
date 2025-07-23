import styles from "@/styles/Layout.module.css";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import NextTopLoader from "nextjs-toploader";
import Meta from "./Meta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const Layout = ({ children }) => {
  return (
    <div className={`${geistSans.className} ${geistMono.className}`}>
      <NextTopLoader color="#12a" showSpinner={false} />
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </div>
  );
};
