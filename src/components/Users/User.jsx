import React from 'react'
import s from './User.module.css'
import userAva from '../../assets/img/avaSmall.jpg'
import {NavLink} from "react-router-dom";

const User = ({user, follow, unfollow, followingInProgress}) => {
    return (
        <div className={s.user}>

            <div className={s.photoBlock}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small ? user.photos.small : userAva}
                             alt={user.name}
                             className={s.userPhoto}/>
                    </NavLink>

                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(i => i === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>
                            Unfollow
                        </button>

                        : <button disabled={followingInProgress.some(i => i === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>
                            Follow
                        </button>
                    }
                </div>
            </div>

            <div className={s.info}>
                <div className={s.nameBlock}>
                    <div>
                        {user.name}
                    </div>
                    <div>
                        {user.status}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User