import React from 'react'
import classes from './MainContent.module.css'

const MainContent = () => {
    return (
        <div className={classes['main-content']}>
            <div
                className={classes['share-box'] + ' ' + classes['common-card']}
            >
                Share
            </div>
        </div>
    )
}

export default MainContent
