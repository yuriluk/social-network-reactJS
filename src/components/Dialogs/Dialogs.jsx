import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";


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
                <AddMessageFormRedux onSubmit={onSubmit}/>
            </div>
        </div>
    )
}


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newMessageBody' component='textarea' placeholder='Enter your message'/>
            </div>
            <div>
                <button>Add Message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    // a unique name for the form
    form: 'dialogAddMessageForm'
})(AddMessageForm)


export default Dialogs