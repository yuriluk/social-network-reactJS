import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let addMessageElement = React.createRef()

    let addMessage = () => {
        let text = addMessageElement.current.value
        alert(text)
    }

    let dialogsElements = props.state.dialogs
        .map(d => (<DialogItem key={d.id} name={d.name}/>))

    let messageElements = props.state.messages
        .map(m => (<Message key={m.id} message={m}/>))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea ref={addMessageElement}></textarea>
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    )
}

export default Dialogs