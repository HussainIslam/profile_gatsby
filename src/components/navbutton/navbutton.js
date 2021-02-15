import React from "react"
import { Link } from "gatsby"
import Styles from './navbutton.module.css'

const NavButton = ({ text }) => {

    const toValue = text === 'Home' ? '/' : `/${text.toLowerCase()}/`;
    
    return (
        <div className={Styles.listItemContainer}>
          <Link className={Styles.listItem} to={toValue} >
            {text}
          </Link>
        </div>
    )
}

export default NavButton
