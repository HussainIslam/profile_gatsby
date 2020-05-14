import React, { Component } from "react"
//import AniLink from "gatsby-plugin-transition-link/Link"
import { Link } from "gatsby"

import GitHub from "../images/social_icons/github.svg"
import Facebook from "../images/social_icons/facebook.svg"
import Linkedin from "../images/social_icons/linkedin.svg"
import Youtube from "../images/social_icons/youtube.svg"

import BB from "./bottombar.module.css"

class BottomBar extends Component {
  gotoPage = event => {
    console.log(event.target.attributes[1].value)
  }

  render() {
    return (
      <div className={BB.mainContainer}>
        <div className={BB.brand}>I am Hussain</div>
        <div className={BB.socialMedia}>
          <a
            className={BB.iconSet}
            href="https://github.com/HussainIslam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="github logo" />
            <span className={BB.buttonTitle}>github</span>
          </a>
          <a
            className={BB.iconSet}
            href="https://linkedin.com/in/hussainulislam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="linkedin logo" />
            <span className={BB.buttonTitle}>linkedin</span>
          </a>
          <a
            href="https://facebook.com/Hussainul.I"
            target="_blank"
            rel="noopener noreferrer"
            className={BB.iconSet}
          >
            <img src={Facebook} alt="facebook logo" />
            <span className={BB.buttonTitle}>facebook</span>
          </a>
          <a
            className={BB.iconSet}
            href="https://youtube.com/channel/UCpqlY6ltfpz6qyCT9Ejl4Qw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Youtube} alt="youtube logo" />
            <span className={BB.buttonTitle}>youtube</span>
          </a>
        </div>
        <div className={BB.linksMainContainer}>
          <div className={BB.onlyLinksContainer}>
            <Link className={BB.link} to="/">
              Home
            </Link>
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
              Google
            </a>
            <a className={BB.link} href="https://medium.com">
              Medium
            </a>
            <a className={BB.link} href="https://w3schools.com">
              W3Schools
            </a>
            <a className={BB.link} href="https://freecodecamp.com">
              FreeCodeCamp
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default BottomBar
