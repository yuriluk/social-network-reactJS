import React, {Component} from 'react'
import s from './Users.module.css'
import User from "./User";
import * as axios from 'axios'

class Users extends Component {

    constructor(props) {
        super(props);

        alert("Inside constructor. New Object")
    }

    componentDidMount() {
        alert("Inside componentDidMount. New Object in DOM")
        this.getUsers()
    }

    componentWillUnmount() {
        alert("Inside componentWillUnmount. Object will be unmount")
    }


    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }


    render() {

        let users = this.props.users.map(user =>
            <User key={user.id} user={user}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}/>
        )

        return (
            <div className={s.users}>
                {users}
            </div>
        )
    }
}

export default Users