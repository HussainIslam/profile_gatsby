import React, { Component } from "react"
import { Link } from "gatsby"
//import AniLink from "gatsby-plugin-transition-link/Link"

import navbarStyles from "./navbar.module.css"

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
    }
  }

  handleDisplayClick = event => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  render() {
    return (
      /* Main Container */
      <div className={navbarStyles.container}>
        <div className={navbarStyles.brandContainer}>
          <Link
            className={`${
              this.state.isMenuOpen
                ? navbarStyles.hideElement
                : navbarStyles.brand
            }`}
            to="/"
          >
            I am Hussain
          </Link>
        </div>
        <div
          className={`${
            this.state.isMenuOpen
              ? navbarStyles.modifiedLinks
              : navbarStyles.links
          }`}
        >
          <div
            className={`${
              this.state.isMenuOpen ? navbarStyles.hideElement : null
            } ${navbarStyles.displayButtonContainer}`}
          >
            <div
              className={`${
                this.state.isMenuOpen ? navbarStyles.hideElement : null
              } ${navbarStyles.displayButton}`}
              onClick={this.handleDisplayClick}
            >
              &equiv;
            </div>
          </div>
          <div
            className={`${
              this.state.isMenuOpen ? null : navbarStyles.hideElement
            } ${navbarStyles.closeButtonContainer}`}
          >
            <button
              className={`${
                this.state.isMenuOpen ? null : navbarStyles.hideElement
              } ${navbarStyles.closeButton}`}
              onClick={this.handleDisplayClick}
            >
              X
            </button>
          </div>
          <div
            className={`${navbarStyles.listItemContainer} ${
              this.state.isMenuOpen ? null : navbarStyles.hideElement
            }`}
          >
            <Link
              className={`${
                this.state.isMenuOpen ? null : navbarStyles.hideElement
              }  ${navbarStyles.listItem}`}
              to="/"
            >
              Home
            </Link>
          </div>
          <div
            className={`${
              this.state.isMenuOpen ? null : navbarStyles.hideElement
            } ${navbarStyles.listItemContainer}`}
          >
            <Link
              className={`${
                this.state.isMenuOpen ? null : navbarStyles.hideElement
              }  ${navbarStyles.listItem}`}
              to="/about/"
            >
              About
            </Link>
          </div>
          <div
            className={`${
              this.state.isMenuOpen ? null : navbarStyles.hideElement
            } ${navbarStyles.listItemContainer}`}
          >
            <Link
              className={`${
                this.state.isMenuOpen ? null : navbarStyles.hideElement
              } ${navbarStyles.listItem}`}
              to="/portfolio/"
            >
              Portfolio
            </Link>
          </div>
          <div
            className={`${
              this.state.isMenuOpen ? null : navbarStyles.hideElement
            } ${navbarStyles.listItemContainer}`}
          >
            <Link
              className={`${
                this.state.isMenuOpen ? null : navbarStyles.hideElement
              } ${navbarStyles.listItem}`}
              to="/resume/"
            >
              Resume
            </Link>
          </div>
          <div
            className={`${
              this.state.isMenuOpen ? null : navbarStyles.hideElement
            } ${navbarStyles.listItemContainer}`}
          >
            <Link
              className={`${
                this.state.isMenuOpen ? null : navbarStyles.hideElement
              } ${navbarStyles.listItem}`}
              to="/blog/"
            >
              Blog
            </Link>
          </div>
          <div
            className={`${
              this.state.isMenuOpen ? null : navbarStyles.hideElement
            } ${navbarStyles.listItemContainer}`}
          >
            <Link
              className={`${
                this.state.isMenuOpen ? null : navbarStyles.hideElement
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
}

export default NavBar
