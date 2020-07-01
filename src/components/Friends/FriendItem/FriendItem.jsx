import React from 'react'
import s from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <div className={s.friend}>
           <div className={s.circle}>

           </div>
            {props.friend.name}
        </div>
    )
}

export default FriendItem
