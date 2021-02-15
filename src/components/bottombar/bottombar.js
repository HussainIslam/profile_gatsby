import React from "react"
import { Link } from "gatsby"

import { useSocialIconsCSV } from '../../hooks/use-social-csv'
import SocialIcon from '../social-icon/social-icon'
import BB from "./bottombar.module.css"

const BottomBar = () => {
  const { nodes } = useSocialIconsCSV().allSocialIconsCsv
  return (
    <div className={BB.mainContainer}>
      <div className={BB.internalContainer}>
        <div className={BB.socialMedia}>
          {nodes.map((item, index) => {
            return(<SocialIcon key={index} item={item} />)
          })}
        </div>
        <div className={BB.onlyLinksContainer}>
          <Link className={BB.link} to="/">Home</Link>
          <Link className={BB.link} to="/portfolio/">Portfolio</Link>
          <Link className={BB.link} to="/blog/">Blog</Link>
        </div>
      </div>
    </div>
  )
}

export default BottomBar
