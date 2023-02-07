import Image from "next/image"
import React from "react"

const Skill = ({ skill, img }) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-[#202020]">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image
            src={`/assets/skills/${img}.png`}
            alt="/"
            width={64}
            height={64}
          />
        </div>
        <div className="flex flex-col items-center justify-center dark:text-[#F5F5F5]">
          <h3>{skill}</h3>
        </div>
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p2 dark:bg-[#121212]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4 dark:text-[#717a7a]">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Skill skill="HTML" img="html" />
          <Skill skill="CSS" img="css" />
          <Skill skill="JavaScript" img="javascript" />
          <Skill skill="NodeJS" img="node" />
          <Skill skill="ReactJS" img="react" />
          <Skill skill="NextJS" img="nextjs" />
          <Skill skill="MongoDB" img="mongo" />
          <Skill skill="Tailwind" img="tailwind" />
        </div>
      </div>
    </div>
  )
}

export default Skills
