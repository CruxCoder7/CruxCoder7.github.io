import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <>
      <Head>
        <title>Akash | Full Stack Dev</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
        <link rel="manifest" href="/assets/site.webmanifest" />
      </Head>
      <Navbar dark={dark} setDark={setDark} />
      <Component {...pageProps} dark={dark} />
    </>
  );
}
