import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
          <AniLink
            paintDrip
            hex="#4a8b50"
            className={`${
              this.state.isMenuOpen
                ? navbarStyles.hideElement
                : navbarStyles.brand
            }`}
            to="/"
          >
            I am Hussain
          </AniLink>
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
            className={`${navbarStyles.listItemContainer} ${
              this.state.isMenuOpen ? null : navbarStyles.hideElement
            }`}
          >
            <AniLink
              paintDrip
              hex="#4a8b50"
              className={`${
                this.state.isMenuOpen ? null : navbarStyles.hideElement
              }  ${navbarStyles.listItem}`}
              to="/"
            >
              Home
            </AniLink>
          </div>
          <div
            className={`${
              this.state.isMenuOpen ? null : navbarStyles.hideElement
            } ${navbarStyles.listItemContainer}`}
          >
            <AniLink
              paintDrip
              hex="#4a8b50"
              className={`${
                this.state.isMenuOpen ? null : navbarStyles.hideElement
              }  ${navbarStyles.listItem}`}
              to="/about/"
            >
              About
            </AniLink>
          </div>
          <div
            className={`${
              this.state.isMenuOpen ? null : navbarStyles.hideElement
            } ${navbarStyles.listItemContainer}`}
          >
            <AniLink
              paintDrip
              hex="#4a8b50"
              className={`${
                this.state.isMenuOpen ? null : navbarStyles.hideElement
              } ${navbarStyles.listItem}`}
              to="/portfolio/"
            >
              Portfolio
            </AniLink>
          </div>
          <div
            className={`${
              this.state.isMenuOpen ? null : navbarStyles.hideElement
            } ${navbarStyles.listItemContainer}`}
          >
            <AniLink
              paintDrip
              hex="#4a8b50"
              className={`${
                this.state.isMenuOpen ? null : navbarStyles.hideElement
              } ${navbarStyles.listItem}`}
              to="/resume/"
            >
              Resume
            </AniLink>
          </div>
          <div
            className={`${
              this.state.isMenuOpen ? null : navbarStyles.hideElement
            } ${navbarStyles.listItemContainer}`}
          >
            <AniLink
              paintDrip
              hex="#4a8b50"
              className={`${
                this.state.isMenuOpen ? null : navbarStyles.hideElement
              } ${navbarStyles.listItem}`}
              to="/blog/"
            >
              Blog
            </AniLink>
          </div>
          <div
            className={`${
              this.state.isMenuOpen ? null : navbarStyles.hideElement
            } ${navbarStyles.listItemContainer}`}
          >
            <AniLink
              paintDrip
              hex="#4a8b50"
              className={`${
                this.state.isMenuOpen ? null : navbarStyles.hideElement
              } ${navbarStyles.listItem}`}
              to="/contact/"
            >
              Contact
            </AniLink>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
