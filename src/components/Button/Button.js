import React, { Fragment } from 'react'
import classes from './Button.module.css'

const Button = (props) => {
    return (
        <Fragment>
            <button
                className={classes[`${props.name}`]}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.children}
            </button>
        </Fragment>
    )
}

export default Button
