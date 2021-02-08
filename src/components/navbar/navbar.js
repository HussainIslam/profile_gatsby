import React, { useState } from "react"
import { Link } from "gatsby"
//import AniLink from "gatsby-plugin-transition-link/Link"

import navbarStyles from "./navbar.module.css"

const NavBar = () =>{
  const [isMenuOpen, setisMenuOpen] = useState(false)

  const handleDisplayClick = event => {
    setisMenuOpen(!isMenuOpen)
  }

  return (
    /* Main Container */
    <div className={navbarStyles.container}>
      <div
        className={`${
          isMenuOpen
            ? navbarStyles.modifiedLinks
            : navbarStyles.links
        }`}
      >
        <div
          className={`${
            isMenuOpen ? navbarStyles.hideElement : null
          } ${navbarStyles.displayButtonContainer}`}
        >
          <button
            className={`${
              isMenuOpen ? navbarStyles.hideElement : null
            } ${navbarStyles.displayButton}`}
            onClick={handleDisplayClick}
          >
            &equiv;
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? null : navbarStyles.hideElement
          } ${navbarStyles.closeButtonContainer}`}
        >
          <button
            className={`${
              isMenuOpen ? null : navbarStyles.hideElement
            } ${navbarStyles.closeButton}`}
            onClick={handleDisplayClick}
          >
            X
          </button>
        </div>
        <div
          className={`${navbarStyles.listItemContainer} ${
            isMenuOpen ? null : navbarStyles.hideElement
          }`}
        >
          <Link
            className={`${
              isMenuOpen ? null : navbarStyles.hideElement
            }  ${navbarStyles.listItem}`}
            to="/"
          >
            Home
          </Link>
        </div>
        <div
          className={`${
            isMenuOpen ? null : navbarStyles.hideElement
          } ${navbarStyles.listItemContainer}`}
        >
          <Link
            className={`${
              isMenuOpen ? null : navbarStyles.hideElement
            }  ${navbarStyles.listItem}`}
            to="/about/"
          >
            About
          </Link>
        </div>
        <div
          className={`${
            isMenuOpen ? null : navbarStyles.hideElement
          } ${navbarStyles.listItemContainer}`}
        >
          <Link
            className={`${
              isMenuOpen ? null : navbarStyles.hideElement
            } ${navbarStyles.listItem}`}
            to="/portfolio/"
          >
            Portfolio
          </Link>
        </div>
        <div
          className={`${
            isMenuOpen ? null : navbarStyles.hideElement
          } ${navbarStyles.listItemContainer}`}
        >
          <Link
            className={`${
              isMenuOpen ? null : navbarStyles.hideElement
            } ${navbarStyles.listItem}`}
            to="/resume/"
          >
            Resume
          </Link>
        </div>
        <div
          className={`${
            isMenuOpen ? null : navbarStyles.hideElement
          } ${navbarStyles.listItemContainer}`}
        >
          <Link
            className={`${
              isMenuOpen ? null : navbarStyles.hideElement
            } ${navbarStyles.listItem}`}
            to="/blog/"
          >
            Blog
          </Link>
        </div>
        <div
          className={`${
            isMenuOpen ? null : navbarStyles.hideElement
          } ${navbarStyles.listItemContainer}`}
        >
          <Link
            className={`${
              isMenuOpen ? null : navbarStyles.hideElement
            } ${navbarStyles.listItem}`}
            to="/contact/"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
