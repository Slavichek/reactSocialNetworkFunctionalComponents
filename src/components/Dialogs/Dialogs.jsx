import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';


const Dialogs = (props) => {

    debugger;
    let dialogUser = props.dialogUser.map((user) => <DialogItem name={user.name} id={user.id} />
    )

    let dialogMessage = props.dialogMessage.map((userMessage) => <MessageItem id={userMessage.id} message={userMessage.message} />)


    return (
        <div className={classes.dialog}>
            <div className={classes.dialog__list}>
                {dialogUser}
            </div>
            <div className={classes.message__list}>
                {dialogMessage}
            </div>
        </div>
    )
}

export default Dialogs;