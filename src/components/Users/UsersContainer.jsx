import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress, unFollow
} from "../../redux/users-reducer";
import React, {Component} from "react";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIComponent extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }


    onPageChange = (page) => {
        this.props.getUsers(page, this.props.pageSize)
        this.props.setCurrentPage(page)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unFollow}
                   onPageChange={this.onPageChange}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    setCurrentPage, follow, unFollow, getUsers
})(UsersAPIComponent)
