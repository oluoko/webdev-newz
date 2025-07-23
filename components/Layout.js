import styles from "@/styles/Layout.module.css";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import NextTopLoader from "nextjs-toploader";
<<<<<<< HEAD
import Meta from "./Meta";
=======
>>>>>>> 194a9569932a12d45a6a461a20413a87b963a2ff

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
<<<<<<< HEAD
      <Meta />
=======
>>>>>>> 194a9569932a12d45a6a461a20413a87b963a2ff
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
