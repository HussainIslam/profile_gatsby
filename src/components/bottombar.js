import React from "react"

import { Link } from "gatsby"

import GitHub from "../images/social_icons/github.svg"
import Facebook from "../images/social_icons/facebook.svg"
import Linkedin from "../images/social_icons/linkedin.svg"
import Youtube from "../images/social_icons/youtube.svg"

import BB from "./bottombar.module.css"

const BottomBar = () => (
  <div className={BB.mainContainer}>
    <div className={BB.brand}>HUSSAIN</div>
    <div className={BB.socialMedia}>
      <div className={BB.iconSet}>
        <img src={GitHub} alt="github logo" />
        <a className={BB.link} href="https://github.com">
          github
        </a>
      </div>
      <div className={BB.iconSet}>
        <img src={Linkedin} alt="linkedin logo" />
        <a className={BB.link} href="https://linkedin.com">
          linkedin
        </a>
      </div>
      <div className={BB.iconSet}>
        <img src={Facebook} alt="facebook logo" />
        <a className={BB.link} href="https://facebook.com">
          facebook
        </a>
      </div>
      <div className={BB.iconSet}>
        <img src={Youtube} alt="youtube logo" />
        <a className={BB.link} href="https://youtube.com">
          youtube
        </a>
      </div>
    </div>
    <div className={BB.linksMainContainer}>
      <div className={BB.header}>Quick Links</div>
      <div className={BB.onlyLinksContainer}>
        <Link className={BB.link} to="/about/">
          About
        </Link>
        <Link className={BB.link} to="/portfolio/">
          Portfolio
        </Link>
        <Link className={BB.link} to="/resume/">
          Resume
        </Link>
        <Link className={BB.link} to="/blog/">
          Blog
        </Link>
        <Link className={BB.link} to="/contact/">
          Contact
        </Link>
      </div>
    </div>
    <div className={BB.linksMainContainer}>
      <div className={BB.header}>Useful Links</div>
      <div className={BB.onlyLinksContainer}>
        <a className={BB.link} href="https://google.com">
          Link 1
        </a>
        <a className={BB.link} href="https://google.com">
          Link 2
        </a>
        <a className={BB.link} href="https://google.com">
          Link 3
        </a>
        <a className={BB.link} href="https://google.com">
          Link 4
        </a>
      </div>
    </div>
  </div>
)

export default BottomBar
