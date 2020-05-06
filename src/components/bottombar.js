import React from "react"

import { Link } from "gatsby"

import BB from "./bottombar.module.css"

const BottomBar = () => (
  <div className={BB.mainContainer}>
    <div className={BB.brand}>HUSSAIN</div>
    <div className={BB.socialMedia}>
      <Link className={BB.link}>github</Link>
      <Link className={BB.link}>linkedin</Link>
      <Link className={BB.link}>facebook</Link>
      <Link className={BB.link}>youtube</Link>
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
        <Link className={BB.link} to="#">
          Link 1
        </Link>
        <Link className={BB.link} to="#">
          Link 2
        </Link>
        <Link className={BB.link} to="#">
          Link 3
        </Link>
        <Link className={BB.link} to="#">
          Link 4
        </Link>
      </div>
    </div>
  </div>
)

export default BottomBar
