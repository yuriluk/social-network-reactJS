import React, {Component} from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../../redux/auth-reducer";
import {usersAPI} from "../../../api/api";


class HeaderContainer extends Component {

    componentDidMount() {
        usersAPI.authMe()
            .then(data => {
            if (data.resultCode === 0) {
                let {email, id, login} = data.data;
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
