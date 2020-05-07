import React from "react"

import { Link } from "gatsby"

import BB from "./bottombar.module.css"

const BottomBar = () => (
  <div className={BB.mainContainer}>
    <div className={BB.brand}>HUSSAIN</div>
    <div className={BB.socialMedia}>
      <a className={BB.link} href="https://github.com">
        github
      </a>
      <a className={BB.link} href="https://linkedin.com">
        linkedin
      </a>
      <a className={BB.link} href="https://facebook.com">
        facebook
      </a>
      <a className={BB.link} href="https://youtube.com">
        youtube
      </a>
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
