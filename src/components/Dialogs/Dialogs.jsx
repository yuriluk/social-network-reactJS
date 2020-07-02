import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (event) => {
        let text = event.target.value
        props.store.dispatch(updateNewMessageActionCreator(text))
    }

    let newMessageText = state.newMessageText


    let dialogsElements = state.dialogs
        .map(d => (<DialogItem key={d.id} name={d.name}/>))

    let messageElements = state.messages
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
                              value={newMessageText}
                              onChange={onMessageChange}/>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs