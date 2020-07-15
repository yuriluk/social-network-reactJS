import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {

    const onSubmit = (formData) => {
        let {newMessageBody} = formData
        props.addMessage(newMessageBody)
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
                <AddMessageForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Dialogs