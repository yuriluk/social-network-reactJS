import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {



    let dialogsElements = props.dialogs
        .map(el => (<DialogItem key={el.id} name={el.name}/>))

    let messageElements = props.messages
        .map(el => (<Message key={el.id} message={el.message}/>))

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs