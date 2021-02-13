import Style from './project.module.css'

import React from 'react'

const Project = ({item, index}) => {
    return (
        <div key={index} className={Style.mainContainer}>
            <h4>{item.name}</h4>
            <div className={Style.imageContainer}>
                <img
                    src={require(`../../images/portfolio_images/${item.screenshot}`)}
                    alt="project screenshot"
                    className={Style.imageTag}
                />
            </div>
            <p className={Style.itemDescription}>{item.description}</p>
            <div className={Style.infoContainer}>
                <a href={item.github} target="_blank" rel="noopener noreferrer">Github</a>
                <a href={item.live} target="_blank" rel="noopener noreferrer">Live</a>
            </div>
        </div>
    )
}

export default Project