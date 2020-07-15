import React, {Component} from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {logoutUser} from "../../../redux/auth-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class HeaderContainer extends Component {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export default compose(
    connect(mapStateToProps, {logoutUser}),
    withRouter
)(HeaderContainer)
