import React, {Component} from 'react'
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../../redux/auth-reducer";


class HeaderContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data;
                    this.props.setUserData(id, email, login)
                }

            })
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

export default connect(mapStateToProps, {setUserData: setAuthUserData})(HeaderContainer)
