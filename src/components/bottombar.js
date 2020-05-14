import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"

import GitHub from "../images/social_icons/github.svg"
import Facebook from "../images/social_icons/facebook.svg"
import Linkedin from "../images/social_icons/linkedin.svg"
import Youtube from "../images/social_icons/youtube.svg"

import BB from "./bottombar.module.css"

const BottomBar = () => (
  <div className={BB.mainContainer}>
    <div className={BB.brand}>I am Hussain</div>
    <div className={BB.socialMedia}>
      <div className={BB.iconSet}>
        <a
          className={BB.link}
          href="https://github.com/HussainIslam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHub} alt="github logo" />
          github
        </a>
      </div>
      <div className={BB.iconSet}>
        <a
          className={BB.link}
          href="https://linkedin.com/in/hussainulislam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} alt="linkedin logo" />
          linkedin
        </a>
      </div>
      <div className={BB.iconSet}>
        <a
          className={BB.link}
          href="https://facebook.com/Hussainul.I"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Facebook} alt="facebook logo" />
          facebook
        </a>
      </div>
      <div className={BB.iconSet}>
        <a
          className={BB.link}
          href="https://youtube.com/channel/UCpqlY6ltfpz6qyCT9Ejl4Qw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Youtube} alt="youtube logo" />
          youtube
        </a>
      </div>
    </div>
    <div className={BB.linksMainContainer}>
      <div className={BB.onlyLinksContainer}>
        <AniLink paintDrip hex="#4a8b50" className={BB.link} to="/">
          Home
        </AniLink>
        <AniLink paintDrip hex="#4a8b50" className={BB.link} to="/about/">
          About
        </AniLink>
        <AniLink paintDrip hex="#4a8b50" className={BB.link} to="/portfolio/">
          Portfolio
        </AniLink>
        <AniLink paintDrip hex="#4a8b50" className={BB.link} to="/resume/">
          Resume
        </AniLink>
        <AniLink paintDrip hex="#4a8b50" className={BB.link} to="/blog/">
          Blog
        </AniLink>
        <AniLink paintDrip hex="#4a8b50" className={BB.link} to="/contact/">
          Contact
        </AniLink>
      </div>
    </div>
    <div className={BB.linksMainContainer}>
      <div className={BB.header}>Useful Links</div>
      <div className={BB.onlyLinksContainer}>
        <a className={BB.link} href="https://google.com">
          Google
        </a>
        <a className={BB.link} href="https://medium.com">
          Medium
        </a>
        <a className={BB.link} href="https://w3schools.com">
          W3Schools
        </a>
        <a className={BB.link} href="https://freecodecamp.com">
          FreeCodeCamp
        </a>
      </div>
    </div>
  </div>
)

export default BottomBar
