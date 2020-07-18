import React from 'react'
import s from './Users.module.css'
import User from "./User";
import Pagination from "../common/Pagination/Pagination";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChange, users, ...props}) => {

    const usersView = users.map(user => <User key={user.id} user={user}
                                              follow={props.follow}
                                              unfollow={props.unfollow}
                                              followingInProgress={props.followingInProgress}/>
    )

    return (
        <div className={s.users}>
            <Pagination totalUsersCount={totalUsersCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={onPageChange}/>

            {usersView}
        </div>
    )
}

export default Users
