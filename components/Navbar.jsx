import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = ({ dark, setDark }) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/property" ||
      router.asPath === "/crypto" ||
      router.asPath === "/netflix" ||
      router.asPath === "/twitch"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      if (dark) {
        setNavBg("#121212");
        setLinkColor("#ecf0f3");
      } else {
        setNavBg("#ecf0f3");
        setLinkColor("black");
      }
    }
  }, [router, dark]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-lg z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src="/assets/ak-logo-fixed.png"
            alt="/"
            width="100"
            height="100"
          />
        </Link>
        <div>
          <ul className="hidden md:flex" style={{ color: `${linkColor}` }}>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:text-[#5651e5] font-medium">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase  hover:text-[#5651e5] font-medium">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:text-[#5651e5] font-medium">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:text-[#5651e5] font-medium">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:text-[#5651e5] font-medium">
                Contact
              </li>
            </Link>
            <li className="ml-10 mt-[-3px]">
              {dark ? (
                <BsSunFill onClick={() => setDark(!dark)} size={25} />
              ) : (
                <MdDarkMode onClick={() => setDark(!dark)} size={25} />
              )}
            </li>
          </ul>
          <div className="md:hidden cursor-pointer" onClick={handleNav}>
            <AiOutlineMenu size={25} color={dark ? "white" : "black"} />
          </div>
        </div>
      </div>

      <div>
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 dark:bg-[#121212] dark:text-[#F5F5F5] "
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="">
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/assets/ak-logo-fixed.png"
                  alt="/"
                  width={87}
                  height={35}
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:shadow-gray-500"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  className="py-4 text-sm font-medium hover:text-[#5651e5]"
                  onClick={() => setNav(false)}
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  className="py-4 text-sm font-medium hover:text-[#5651e5]"
                  onClick={() => setNav(false)}
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  className="py-4 text-sm font-medium hover:text-[#5651e5]"
                  onClick={() => setNav(false)}
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  className="py-4 text-sm font-medium hover:text-[#5651e5]"
                  onClick={() => setNav(false)}
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  className="py-4 text-sm font-medium hover:text-[#5651e5]"
                  onClick={() => setNav(false)}
                >
                  Contact
                </li>
              </Link>
              <li className="py-4">
                {dark ? (
                  <MdDarkMode onClick={() => setDark(!dark)} size={25} />
                ) : (
                  <BsSunFill onClick={() => setDark(!dark)} size={25} />
                )}
              </li>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%] ">
                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-gray-500"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/akash-rangesh-3bb445249/",
                      "_blank"
                    )
                  }
                >
                  <FaLinkedinIn />
                </div>
                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-gray-500"
                  onClick={() =>
                    window.open("https://github.com/CruxCoder7", "_blank")
                  }
                >
                  <FaGithub />
                </div>
                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-gray-500"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/akash._.77/",
                      "_blank"
                    )
                  }
                >
                  <FaInstagram />
                </div>
                <a href="mailto:akashrangesh07@gmail.com">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-gray-500">
                    <AiOutlineMail />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
