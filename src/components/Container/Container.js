import React, { Fragment } from 'react'
import classes from './Container.module.css'

const Container = ({ children }) => {
    return (
        <Fragment>
            <div className={classes['container']}>{children}</div>
        </Fragment>
    )
}

export default Container
