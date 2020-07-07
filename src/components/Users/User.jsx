import React from 'react'
import s from './User.module.css'
import userAva from '../../assets/img/avaSmall.jpg'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

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
                        ? <button disabled={props.followingInProgress.some(i => i === props.user.id)} onClick={() => {

                            props.toggleFollowingProgress(true, props.user.id)
                            usersAPI.unFollow(props.user.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(props.user.id)
                                    }
                                    props.toggleFollowingProgress(false, props.user.id)
                                })

                        }}>Unfollow</button>

                        : <button disabled={props.followingInProgress.some(i => i === props.user.id)} onClick={() => {

                            props.toggleFollowingProgress(true, props.user.id)
                            usersAPI.follow(props.user.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(props.user.id)
                                    }
                                    props.toggleFollowingProgress(false, props.user.id)
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