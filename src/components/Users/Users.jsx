import React, {Component} from 'react'
import s from './Users.module.css'
import User from "./User";
import * as axios from 'axios'

class Users extends Component {

    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    // componentDidMount() {
    //     this.getUsers()
    // }
    //
    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //             .then(response => {
    //                 this.props.setUsers(response.data.items)
    //             })
    //     }
    // }


    render() {

        let users = this.props.users.map(user =>
            <User key={user.id} user={user}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}/>
        )

        return (
            <div className={s.users}>
                <button onClick={this.getUsers}>Get users</button>
                {users}
            </div>
        )
    }
}

export default Users