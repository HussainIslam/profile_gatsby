import React from "react"

import { useTechIcons } from "../../hooks/use-tech-icons"
import TI from "./tech-icons.module.css"

import Topic from "../topic"

const TechIcons = () => {
  const data = useTechIcons()
  return (
    <div className={TI.mainContainer}>
      <div className={TI.iconContainer}>
        {data.map((item, index) => {
          const titleName = item.node.name.substring(5, item.node.name.length)
          return (
            <div key={item.node.id} className={TI.iconDiv}>
              <img
                className={TI.icon}
                src={item.node.publicURL}
                alt="technology icon"
                title={titleName}
              />
              <p className={TI.iconName}>
                {titleName[0].toUpperCase() +
                  titleName.substring(1, titleName.length)}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TechIcons
