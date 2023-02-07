import Image from "next/image";
import React from "react";
import webImg from "../public/assets/projects/website.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
const crypto = ({ dark }) => {
  return (
    <div className="w-full dark:bg-[#121212] overflow-x-hidden">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          src={webImg}
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white p-2 ">
          <h2 className="">SSN Coding Club</h2>
          <h3 className="">NextJS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 h-[60vh] ">
        <div className="col-span-4">
          <p className="dark:text-[#7F8C8D]">Project</p>
          <h2 className="dark:text-[#7F8C8D]">Overview</h2>
          <p className="dark:text-[#717a7a] mt-5 mb-5">
            This website is maintained as an open source project by the SSN
            coding club! This is the ultimate resource to get all information
            about the club in one place. Get to know what our vision is and what
            we have to offer from the homepage. Meet the team and reach out to
            us using the information provided in the 'About' page. Find out when
            our next meets are scheduled and also access past recordings using
            the easy-to-navigate timeline on the 'Meets' page. Take a look at
            the projects you can contribute to or perhaps get your own project
            featured on the 'Projects' page. This is just the start of the
            website - we have implemented the core pages but there are a variety
            of new features that can be added by contributors.
          </p>
          <a href="https://ssncodingclub.tech/" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8 dark:shadow-none">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/CruxCoder7/Coding-Club-Website"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8 dark:shadow-none">
              Code
            </button>
          </a>
        </div>
        <div className="h-fit col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 dark:shadow-gray-500 dark:shadow-lg dark:bg-[#202020]">
          <div className="p-2 dark:text-[#F5F5F5]">
            <p>Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center dark:text-[#F5F5F5]">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-[#F5F5F5]">
                <RiRadioButtonFill className="pr-1" /> Vanilla CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer dark:text-[#7F8C8D]">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default crypto;
