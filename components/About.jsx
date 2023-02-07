import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2  flex items-center py-16 dark:bg-[#121212]"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 dark:text-[#7F8C8D]">Who I Am</h2>
          <p className="py-2 text-gray-600 dark:text-[#717a7a]">
            I have been learning Web Development for about 2 years. An active
            Committee Member in the SSN Coding Club and an active representative
            of the Software Development Team in the SNUC Coding Club. Developed
            a Full Stack Application for a student that helps him share his
            academic notes and blogs to the students of Shiv Nadar University
            Chennai.
          </p>
          <p className="py-2 text-gray-600 dark:text-[#717a7a]">
            I have done many personal projects that focuses mainly on the MERN
            stack and I strive hard to continuously update myself on some of the
            emerging technologies in the world of Web Development. I am pursuing
            my B.Tech degree in Artificial Intelligence and Data Science and I
            have some standard knowledge in those respective fields.
          </p>
          <p className="py-2 text-gray-600 dark:text-[#717a7a]">
            I have some reasonable experience in working with structured data
            using Python, and I continue to learn more in this field day by day.
            As part of a Mini Project in my university, my team created an
            application that integrates a Machine Learning model into a website,
            using a backend framework called Flask in Python. I had a great
            learning experience in developing this project and it was
            fascinating to work on both the fields that I love.
          </p>
        </div>
        <div className="w-full h-auto m-auto   flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
          <img src="/assets/programming.svg" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
