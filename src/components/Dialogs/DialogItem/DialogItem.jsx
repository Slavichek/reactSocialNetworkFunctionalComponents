import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog__item}>
            <NavLink to={path} className={classes.dialog__link}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;