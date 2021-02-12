import React from "react"

import Topic from "../topic"

import PNStyles from "./platform-name.module.css"

const PlatformName = () => (
  <div className={PNStyles.mainContainer}>
    <Topic align={"center"}><span className={PNStyles.myNameTopic}>I am </span></Topic>
    <div className={PNStyles.myName}>
      Hussain
      <div className={PNStyles.subHeading}>I am a Web Developer</div>
    </div>
    
      

  </div>
)

export default PlatformName
