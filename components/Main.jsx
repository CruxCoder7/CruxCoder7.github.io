import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa"

const Main = ({ dark }) => {
  return (
    <div id="home" className="w-full h-screen text-center dark:bg-[#121212]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="">
          <p className="text-sm tracking-widest text-gray-600 dark:text-[#7F8C8D]">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700 dark:text-[#F5F5F5]">
            Hi, I'm <span className="text-[#5651e5]">Akash</span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-[#F5F5F5]">
            A Full Stack Web Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto dark:text-[#7F8C8D]">
            I'm focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-indigo-600 dark:bg-[#202020]"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/akash-rangesh-3bb445249/",
                  "_blank"
                )
              }
            >
              <FaLinkedinIn color={`${dark ? "white" : "black"}`} />
            </div>
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-indigo-600 dark:bg-[#202020]"
              onClick={() =>
                window.open("https://github.com/CruxCoder7", "_blank")
              }
            >
              <FaGithub color={`${dark ? "white" : "black"}`} />
            </div>
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-indigo-600 dark:bg-[#202020]"
              onClick={() =>
                window.open("https://www.instagram.com/akash._.77/", "_blank")
              }
            >
              <FaInstagram color={`${dark ? "white" : "black"}`} />
            </div>
            <a href="mailto:akashrangesh07@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200 dark:shadow-indigo-600 dark:bg-[#202020]">
                <AiOutlineMail color={`${dark ? "white" : "black"}`} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
