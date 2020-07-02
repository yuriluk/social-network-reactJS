import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = (event) => {
        let text = event.target.value
        props.updateNewMessageText(text)
    }

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => (<DialogItem key={d.id} name={d.name}/>))

    let messageElements = props.dialogsPage.messages
        .map(m => (<Message key={m.id} message={m}/>))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea value={props.dialogsPage.newMessageText} onChange={onMessageChange}/>
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    )
}

export default Dialogs