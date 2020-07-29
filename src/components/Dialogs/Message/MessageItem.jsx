import React from 'react';
import classes from './MessageItem.module.css';
import { NavLink } from 'react-router-dom';

const MessageItem = (props) => {
    return (
        <div className={classes.message__item}>{props.message}</div>
    )
}


export default MessageItem;