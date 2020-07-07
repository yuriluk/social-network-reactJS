import React from 'react'
import s from './Users.module.css'
import User from "./User";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let users = props.users.map(user =>
        <User key={user.id} user={user}
              follow={props.follow}
              unfollow={props.unfollow}
              toggleFollowingProgress={props.toggleFollowingProgress}
              followingInProgress={props.followingInProgress}
        />
    )


    return (
        <div className={s.users}>
            <div>
                {pages.map(page => {
                    return <span key={page} className={props.currentPage === page ? (s.page + ' ' + s.selected) : s.page}
                                 onClick={(e) => {
                                     props.onPageChange(page)
                                 }}>{page}</span>
                })}
            </div>


            {users}
        </div>
    )
}

export default Users