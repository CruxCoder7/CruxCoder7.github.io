import Image from "next/image"
import React from "react"
import netflixImg from "../public/assets/projects/netflix.jpg"
import { RiRadioButtonFill } from "react-icons/ri"
import Link from "next/link"
const netflix = () => {
  return (
    <div className="w-full dark:bg-[#121212] overflow-x-hidden">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          src={netflixImg}
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white p-2 ">
          <h2 className="">Netflix UI</h2>
          <h3 className="">ReactJS / Tailwind / Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 h-[60vh] ">
        <div className="col-span-4">
          <p className="dark:text-[#7F8C8D]">Project</p>
          <h2 className="dark:text-[#7F8C8D]">Overview</h2>
          <p className="dark:text-[#717a7a] mt-5 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            illum cum porro consectetur, sit veniam ipsa dolorum voluptates
            totam, ab, asperiores inventore autem nemo odio possimus expedita
            molestiae dignissimos natus! Ducimus, ipsam praesentium nulla hic
            officiis voluptatum rem sint explicabo tempore! Rerum illum quae,
            alias deserunt explicabo adipisci velit debitis.
          </p>
          <button className="px-8 py-2 mt-4 mr-8 dark:shadow-none">Demo</button>
          <button className="px-8 py-2 mt-4 mr-8 dark:shadow-none">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 dark:shadow-gray-500 dark:shadow-lg dark:bg-[#202020]">
          <div className="p-2 dark:text-[#F5F5F5]">
            <p>Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center dark:text-[#F5F5F5]">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-[#F5F5F5]">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-[#F5F5F5]">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-[#F5F5F5]">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-[#F5F5F5]">
                <RiRadioButtonFill className="pr-1" /> Google API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer dark:text-[#7F8C8D]">Back</p>
        </Link>
      </div>
    </div>
  )
}

export default netflix
