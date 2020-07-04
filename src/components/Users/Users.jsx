import React from 'react'
import s from './Users.module.css'
import User from "./User";
import * as axios from 'axios'

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    }


    let users = props.users.map(user =>
        <User key={user.id} user={user}
              follow={props.follow}
              unfollow={props.unfollow}/>
    )
    return (

        <div className={s.users}>
            <button onClick={getUsers}>Get users</button>
            {users}
        </div>
    )
}

export default Users