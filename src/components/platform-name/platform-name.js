import React from "react"

import Topic from "../topic"

import PNStyles from "./platform-name.module.css"

const PlatformName = () => (
  <div className={PNStyles.mainContainer}>
    <Topic>I develop for</Topic>
    <div
      className={PNStyles.platformContainer}
      data-sal="fade"
      data-sal-duration="2000"
      data-sal-delay="100"
      data-sal-easing="ease"
    >
      <div className={PNStyles.platformTitle}>Web</div>
      <div className={PNStyles.platformDescription}>
        Web or often referred to as Internet is a platform that can host
        different documents and other resources via Hypertext Transfer Protocol.
        This is one of the most evolving parts of computer programming. With
        advent of different technologies that facilitate programming for the
        web, it's demand and capacity has sky rocketed.
      </div>
    </div>
    <div
      className={PNStyles.platformContainer}
      data-sal="fade"
      data-sal-duration="2000"
      data-sal-delay="400"
      data-sal-easing="ease"
    >
      <div className={PNStyles.platformTitle}>Mobile</div>
      <div className={PNStyles.platformDescription}>
        Mobile is another fastest growing platform for software development.With
        invention of mobile devices that are significantly more powerful than
        legacy computing systems,the demand for developing for mobile is
        booming.
      </div>
    </div>
    <div
      className={PNStyles.platformContainer}
      data-sal="fade"
      data-sal-duration="2000"
      data-sal-delay="800"
      data-sal-easing="ease"
    >
      <div className={PNStyles.platformTitle}>Desktop</div>
      <div className={PNStyles.platformDescription}>
        Desktop or personal computer has alwasy been the main focus of software
        development. In invention of web and mobile hasn't reduced the
        importance of development for desktop even by a bit (pun intended).
      </div>
    </div>
    <Topic align={"flex-end"}>
      <span className={PNStyles.myNameTopic}>I am </span>
    </Topic>
    <div
      className={PNStyles.platformContainer}
      data-sal="fade"
      data-sal-duration="2000"
      data-sal-delay="800"
      data-sal-easing="ease"
    >
      <div className={PNStyles.platformDescription}>
        Hussain, is what people call me. My full name is Md. Hussainul Islam
        Sajib. I started coding in May 2018 in college. I soon realized that
        computer programming is something I was destined to do. Thus, I code.
      </div>
      <div className={PNStyles.myName}>Hussain</div>
    </div>
  </div>
)

export default PlatformName
