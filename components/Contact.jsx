import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../public/assets/contact.jpg";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = ({ dark }) => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true);
          console.log(result.text);
          e.target.reset();
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          e.target.reset();
        }
      );
  };

  return (
    <div
      id="contact"
      className="w-full lg:h-[150vh] dark:bg-[#121212] overflow-y-hidden overflow-x-hidden"
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full dark:bg-[#121212] ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4 dark:text-[#7F8C8D]">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8 dark:bg-[#121212]">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 dark:bg-[#202020] dark:shadow-gray-500 dark:shadow-lg">
            <div className="lg:p-4 h-full dark:bg-[#202020]">
              <div>
                <img
                  src="/assets/coding.svg"
                  alt=""
                  className="hover:scale-105 ease-in duration-300 mb-4"
                />
              </div>
              <div className="dark:bg-[#202020] dark:text-[#F5F5F5]">
                <h2 className="py-2">Akash</h2>
                <p className="">Full Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or internships. Contact me and
                  let's talk.
                </p>
              </div>
              <div className="">
                <p className="uppercase pt-8 dark:text-[#F5F5F5]">
                  Connect With Me
                </p>
                <div className="flex items-center justify-between py-4 ">
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-indigo-600 dark:bg-[#202020]"
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
                    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-indigo-600 dark:bg-[#202020]"
                    onClick={() =>
                      window.open("https://github.com/CruxCoder7", "_blank")
                    }
                  >
                    <FaGithub color={`${dark ? "white" : "black"}`} />
                  </div>
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-indigo-600 dark:bg-[#202020]"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/akash._.77/",
                        "_blank"
                      )
                    }
                  >
                    <FaInstagram color={`${dark ? "white" : "black"}`} />
                  </div>
                  <a href="mailto:akashrangesh07@gmail.com">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-indigo-600 dark:bg-[#202020]">
                      <AiOutlineMail color={`${dark ? "white" : "black"}`} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 dark:bg-[#202020] dark:shadow-gray-500 dark:shadow-lg">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 dark:text-[#F5F5F5]">
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none"
                      name="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 dark:text-[#F5F5F5]">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none"
                      name="ph_no"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-[#F5F5F5]">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none"
                    name="email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-[#F5F5F5]">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none"
                    name="subject"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-[#F5F5F5]">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 resize-none focus:outline-none"
                    rows="10"
                    name="message"
                    required
                  ></textarea>
                </div>
                <input
                  className="w-full p-4 text-gray-100 mt-4 dark:shadow-none cursor-pointer"
                  type="submit"
                  value="Send Message"
                />
              </form>
            </div>
            <div
              className={
                success
                  ? "absolute rounded-xl top-[50%] right-0 w-[300px] h-[100px] xl:right-[-21%]  ease-in duration-300 bg-[#6c6d6e]  dark:bg-[#0d0d0d] text-green-400 p-8 flex justify-center items-center"
                  : "absolute rounded-xl top-[50%] right-[-100%] w-[300px] h-[100px] ease-in duration-300 bg-[#ecf0f3] dark:bg-[#0d0d0d] text-green-400 p-8 flex justify-center items-center"
              }
            >
              <p> ✅ Message Sent Successfully! </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-[3.75rem] dark:bg-[#121212]">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-indigo-600">
              <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
