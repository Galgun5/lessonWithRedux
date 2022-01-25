import React from 'react'
import classes from './AnwerItem.module.sass'

const AnwerItem = props => {

    return (
        <li className={classes.AnwerItem}>
            {props.answer.text}
        </li>
    )
}

export default AnwerItem