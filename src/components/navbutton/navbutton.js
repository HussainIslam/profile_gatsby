import React from "react"
import { Link } from "gatsby"
import Styles from './navbutton.module.css'

const NavButton = ({ isMenuOpen, text }) => {

    const toValue = text == 'Home' ? '/' : `/${text.toLowerCase()}/`;
    
    return (
        <div className={`${Styles.listItemContainer} ${isMenuOpen ? null : Styles.hideElement}`}>
          <Link className={`${isMenuOpen ? null : Styles.hideElement}  ${Styles.listItem}`} to={toValue} >
            {text}
          </Link>
        </div>
    )
}

export default NavButton
