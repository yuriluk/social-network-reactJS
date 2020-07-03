import React from 'react'
import s from './User.module.css'

const User = (props) => {
    return (
        <div className={s.user}>

            <div className={s.photoBlock}>
                <div>
                    <img src={props.user.photoUrl}
                         alt={props.user.name}
                         className={s.userPhoto}/>
                </div>
                <div>
                    {props.user.followed
                        ? <button onClick={() => {
                            props.unfollow(props.user.id)
                        }}>Follow</button>
                        : <button onClick={() => {
                            props.follow(props.user.id)
                        }}>Unfollow</button>
                    }
                </div>
            </div>

            <div className={s.info}>
                <div className={s.nameBlock}>
                    <div>
                        {props.user.name}
                    </div>
                    <div>
                        {props.user.status}
                    </div>
                </div>

                <div className={s.countryBlock}>
                    <div>{props.user.location.country}</div>
                    <div> {props.user.location.city}</div>
                </div>
            </div>
        </div>
    )
}

export default User