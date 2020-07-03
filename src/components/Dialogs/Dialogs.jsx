import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let onAddMessage = () => {
        props.addMessage()
    }

    let onMessageChange = (event) => {
        let text = event.target.value
        props.messageChange(text)
    }

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => (<DialogItem key={d.id} id={d.id} name={d.name}/>))

    let messageElements = props.dialogsPage.messages
        .map(m => (<Message key={m.id} message={m}/>))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>

                <div>
                    <textarea placeholder='Enter your message'
                              value={props.dialogsPage.newMessageText}
                              onChange={onMessageChange}/>
                    <button onClick={onAddMessage}>Add Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs