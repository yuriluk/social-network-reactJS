import React from 'react'
import s from './Message.module.css'


const Message = (props) => {
    return <div className={`${s.message} ${(props.message.id % 2 === 0) ? s.right : ''}`}>
        <img className={s.ava}
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWf1QWFlSk47yzmGR1kNU9wrfk-yTlV7BzDA&usqp=CAU"
             alt=""/>
        {props.message.message}
    </div>
}

export default Message