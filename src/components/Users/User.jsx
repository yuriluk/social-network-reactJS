import React from 'react'
import s from './User.module.css'
import userAva from '../../assets/img/avaSmall.jpg'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const User = (props) => {
    return (
        <div className={s.user}>

            <div className={s.photoBlock}>
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img src={props.user.photos.small ? props.user.photos.small : userAva}
                             alt={props.user.name}
                             className={s.userPhoto}/>
                    </NavLink>

                </div>
                <div>
                    {props.user.followed
                        ? <button onClick={() => {

                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "b1596819-273b-4180-99cf-faea78f5cd76"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(props.user.id)
                                    }
                                })

                        }}>Unfollow</button>

                        : <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {}, {
                                withCredentials: true,
                                headers:{
                                    "API-KEY": "b1596819-273b-4180-99cf-faea78f5cd76"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(props.user.id)
                                    }
                                })

                        }}>Follow</button>
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
                    <div>{"props.user.location.country"}</div>
                    <div> {"props.user.location.city"}</div>
                </div>
            </div>
        </div>
    )
}

export default User