import React, {Component} from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../../redux/auth-reducer";


class HeaderContainer extends Component {

    componentDidMount() {

        this.props.getAuthUserData()
    }

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
        isFetching: state.auth.isFetching,
    }

}

export default connect(mapStateToProps, {getAuthUserData })(HeaderContainer)
