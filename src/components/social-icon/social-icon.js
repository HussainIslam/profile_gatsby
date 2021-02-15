import React from 'react'
import BB from './social-icon.module.css'

const SocialIcon = ({ item }) => {
    return (
        <a 
            className={BB.iconSet}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={require(`../../images/social_icons/${item.icon}`)} alt={`${item.name} logo`} className={BB.icon} />
        </a>
    )
}

export default SocialIcon
