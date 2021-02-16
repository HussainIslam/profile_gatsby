import React from 'react'
import Button from '../button/button'


import Style from './project.module.css'


const Project = ({item, index}) => {
    return (
        <div key={index} className={Style.mainContainer}>
            <h4 className={Style.projectTitle}>{item.name}</h4>
            <div className={Style.imageContainer}>
                <img
                    src={require(`../../images/portfolio_images/${item.screenshot}`)}
                    alt="project screenshot"
                    className={Style.imageTag}
                />
            </div>
            <p className={Style.itemDescription}>{item.description}</p>
            <div className={Style.infoContainer}>
                <Button name='GitHub' filled={false} link={item.github} />
                <Button name='Demo' filled={false} link={item.live} />
            </div>
        </div>
    )
}

export default Project