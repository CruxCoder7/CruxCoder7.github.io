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
      </Head>
      <Navbar dark={dark} setDark={setDark} />
      <Component {...pageProps} dark={dark} />
    </>
  );
}
