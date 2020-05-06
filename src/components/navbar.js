import React from "react"

import { Link } from "gatsby"

import navbarStyles from "./navbar.module.css"

const NavBar = () => (
  <div className={navbarStyles.container}>
    <div className={navbarStyles.brandContainer}>
      <Link to="/" className={navbarStyles.brand}>
        I am Hussain
      </Link>
    </div>
    <div className={navbarStyles.unorderedlist}>
      <Link className={navbarStyles.listitem} to="/about/">
        About
      </Link>
      <Link className={navbarStyles.listitem} to="/portfolio/">
        Portfolio
      </Link>
      <Link className={navbarStyles.listitem} to="/resume/">
        Resume
      </Link>
      <Link className={navbarStyles.listitem} to="/blog/">
        Blog
      </Link>
      <Link className={navbarStyles.listitem} to="/contact/">
        Contact
      </Link>
    </div>
  </div>
)

export default NavBar
