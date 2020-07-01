import React from 'react'
import s from './Friends.module.css'
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {
    let friendsElements = props.friends
        .map(f => (<FriendItem key={f.id} friend={f}/>))
    return (

        <div className={s.friends}>
            {friendsElements}
        </div>
    )
}

export default Friends