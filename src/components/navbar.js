import React, { Component } from "react"
import { Link } from "gatsby"

import navbarStyles from "./navbar.module.css"

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
    }
  }

  handleDisplayClick = event => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen }, () =>
      console.log(this.state.isMenuOpen)
    )
  }

  render() {
    return (
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
            <button
              className={`${
                this.state.isMenuOpen ? navbarStyles.hideElement : null
              } ${navbarStyles.displayButton}`}
              onClick={this.handleDisplayClick}
            >
              &equiv;
            </button>
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
              &#8904;
            </button>
          </div>
          <div
            className={`${
              this.state.isMenuOpen ? null : navbarStyles.hideElement
            } ${navbarStyles.listItemContainer}`}
          >
            <Link
              className={`${
                this.state.isMenuOpen ? null : navbarStyles.hideElement
              }  ${navbarStyles.listitem}`}
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
              } ${navbarStyles.listitem}`}
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
              } ${navbarStyles.listitem}`}
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
              } ${navbarStyles.listitem}`}
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
              } ${navbarStyles.listitem}`}
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
