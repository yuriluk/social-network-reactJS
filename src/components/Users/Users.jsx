import React, {Component} from 'react'
import s from './Users.module.css'
import User from "./User";
import * as axios from 'axios'

class Users extends Component {

    state = {
        currentPage: this.props.currentPage
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let users = this.props.users.map(user =>
            <User key={user.id} user={user}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}/>
        )


        return (
            <div className={s.users}>
                <div>
                    {pages.map(page => {
                        return <span className={this.props.currentPage === page ? (s.page + ' ' + s.selected) : s.page}
                                     onClick={(e) => {
                                         this.onPageChange(page)
                                     }}>{page}</span>
                    })}
                </div>


                {users}
            </div>
        )
    }
}

export default Users