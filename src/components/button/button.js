import Style from './button.module.css'
import React from 'react'

const Button = ({ name, filled, link, download }) => {
    return (
        <>
            <a 
                className={filled ? Style.filled : Style.hollow} 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                download={ download ? download : null }
            >
                {name}
            </a>
        </>
    )
}

export default Button
