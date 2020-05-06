import React from "react"

import { Link } from "gatsby"

import navbarStyles from "./navbar.module.css"

const NavBar = () => (
  <div className={navbarStyles.container}>
    <div className={navbarStyles.brand}>I am Hussain</div>
    <div className={navbarStyles.unorderedlist}>
      <Link to="/about/">About</Link>
      <Link to="/portfolio/">Portfolio</Link>
      <Link to="/resume/">Resume</Link>
      <Link to="/blog/">Blog</Link>
      <Link to="/contact/">Contact</Link>
    </div>
  </div>
)

export default NavBar
