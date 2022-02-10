import React from 'react'
import classes from './Section.module.css'

const Section = ({ children }) => {
    return <div className={classes['Section']}>{children}</div>
}

export default Section
