import React from "react"
import NavButton from '../navbutton/navbutton'
import {FaTimesCircle, FaBars} from 'react-icons/fa'

import navbarStyles from "./navbar.module.css"

const NavBar = () =>{

  return (
    /* Main Container */
      <div className={navbarStyles.links}>
        <NavButton text="Home" />
        <NavButton text="Portfolio" />
        <NavButton text="Blog" />
      </div>
  )
}

export default NavBar
