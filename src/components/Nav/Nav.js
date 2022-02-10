import React, { Fragment } from 'react'
import classes from './Nav.module.css'
const Nav = ({ children }) => {
    return (
        <Fragment>
            <div className={classes['nav']}>{children}</div>
        </Fragment>
    )
}

export default Nav
