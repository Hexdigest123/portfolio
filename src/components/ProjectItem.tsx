"use client"
import Link from "next/link"
import { useState } from "react"
import { SkillIcons } from "./SkillIcons"
import Image from "next/image"


interface Props {
  projectName: string
  skills: SkillIcons[]
  href: string
  bgImage: string
}

export default function(props: Props) {
  const [showSkills, setShowSkills] = useState(false)
  let skillList = props.skills.map((skill, index) => {
    return <dfn title={skill.split(".")[0]} key={index}><Image src={skill} alt={`${skill} icon`} className="w-10 h-10 mx-2" width={40} height={40} /></dfn>
  })

  return (
    <div className="w-full h-64 rounded-b-xl flex justify-between flex-col bg-no-repeat bg-contain" style={{ backgroundImage: `url('${props.bgImage}')` }}>
      <div className="flex justify-between items-center">
        <Link href={props.href} className="bg-accent text-white font-bold text-xl py-2 px-4 rounded-br-xl">{props.projectName}</Link>
        <button className="bg-accent text-white font-bold text-xl py-2 px-4 rounded-bl-xl" onClick={() => { setShowSkills(!showSkills) }}>Skills</button>
      </div>
      {
        showSkills ?
          <div className="p-4 flex justify-evenly items-center flex-wrap">
            {skillList}
          </div>
          : null
      }
    </div>
  )
}
