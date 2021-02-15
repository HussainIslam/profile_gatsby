import React from 'react'
import { useSocialIconsCSV } from '../../hooks/use-social-csv'
import SocialIcon from '../social-icon/social-icon'
import Style from './side-bar.module.css'

const SideBar = () => {
    const { nodes } = useSocialIconsCSV().allSocialIconsCsv
    
    return (
        <div className={Style.sidebar}>{
            nodes.map((item, index) =>{
                return(<SocialIcon key={index} item={item} />)
            })
        }</div>
    )
}

export default SideBar
