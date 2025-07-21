import styles from "@/styles/Layout.module.css";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";

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
      <div className={styles.container}>
        <nav className={styles.nav}> Navigation</nav>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};
