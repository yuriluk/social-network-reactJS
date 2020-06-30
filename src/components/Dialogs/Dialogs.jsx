import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.key}>{props.name}</NavLink>
        </div>
    )
}

const Message=(props)=>{
    return  <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem key='1' name='Dimych'/>
                <DialogItem key='2' name='Andrey'/>
                <DialogItem key='3' name='Sveta'/>
                <DialogItem key='4' name='Roma'/>
            </div>

            <div className={s.messages}>
               <Message message='Hi'/>
               <Message message='How are you'/>
               <Message message='Yo'/>
               <Message message='Ha-Ha'/>
               <Message message='Viu'/>
            </div>
        </div>
    )
}

export default Dialogs