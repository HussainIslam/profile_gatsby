import React, { useState } from "react"
import NavButton from '../navbutton/navbutton'
import {FaTimesCircle, FaBars} from 'react-icons/fa'

import navbarStyles from "./navbar.module.css"

const NavBar = () =>{
  const [isMenuOpen, setisMenuOpen] = useState(false)

  const handleDisplayClick = event => {
    setisMenuOpen(!isMenuOpen)
  }

  return (
    /* Main Container */
    <div className={navbarStyles.container}>
      <div className={`${isMenuOpen ? navbarStyles.modifiedLinks: navbarStyles.links}`}>
        <div className={`${isMenuOpen ? navbarStyles.hideElement : null} ${navbarStyles.displayButtonContainer}`}>
          <button className={`${isMenuOpen ? navbarStyles.hideElement : null} ${navbarStyles.displayButton}`}onClick={handleDisplayClick}>
            <FaBars />
          </button>
        </div>
        <div className={`${isMenuOpen ? null : navbarStyles.hideElement} ${navbarStyles.closeButtonContainer}`}>
          <button className={`${isMenuOpen ? null : navbarStyles.hideElement} ${navbarStyles.closeButton}`}onClick={handleDisplayClick}>
            <FaTimesCircle />
          </button>
        </div>
        <NavButton text="Home" isMenuOpen={isMenuOpen} />
        <NavButton text="Portfolio" isMenuOpen={isMenuOpen} />
        <NavButton text="Blog" isMenuOpen={isMenuOpen} />
      </div>
    </div>
  )
}

export default NavBar
