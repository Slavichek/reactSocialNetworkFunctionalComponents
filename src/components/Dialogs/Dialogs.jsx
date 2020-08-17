import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';



const Dialogs = (props) => {


    let dialogUser = props.dialogUser.map((user) => <DialogItem name={user.name} id={user.id} />)

    let dialogMessage = props.dialogMessage.map((userMessage) => <MessageItem id={userMessage.id} message={userMessage.message} />)

    let newDialogElement = React.createRef();

    let addDialog = () => {
        let text = newDialogElement.current.value;
        props.addDialog(text);

    }




    return (
        <div className={classes.dialog}>
            <div className={classes.dialog__list}>
                {dialogUser}
            </div>
            <div className={classes.message__list}>
                {dialogMessage}
                <div>
                    <textarea name="" id="" cols="30" rows="10" ref={newDialogElement}></textarea>
                    <button onClick={addDialog}>add dilog</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;