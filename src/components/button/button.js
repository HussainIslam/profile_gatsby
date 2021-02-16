import Style from './button.module.css'
import React from 'react'

const Button = ({ name, filled, link }) => {
    return (
        <>
            <a 
                className={filled ? Style.filled : Style.hollow} 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                {name}
            </a>
        </>
    )
}

export default Button
