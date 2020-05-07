import React from "react"

import { useTechIcons } from "../hooks/all-hooks"
import TI from "./tech-icons.module.css"

import Topic from "./topic"

const TechIcons = () => {
  const data = useTechIcons()
  return (
    <div className={TI.mainContainer}>
      <Topic align={"baseline"}>I can</Topic>
      <div className={TI.iconContainer}>
        {data.map((item, index) => {
          const titleName = item.node.name.substring(5, item.node.name.length)
          console.log(titleName)
          return (
            <div key={item.node.id} className={TI.iconDiv}>
              <img
                className={TI.icon}
                src={item.node.publicURL}
                alt="technology icon"
                data-sal="fade"
                data-sal-delay={index * 30}
                data-sal-duration="2000"
                data-sal-easing="ease"
                title={titleName}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TechIcons
