import React from 'react'
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {loginUser} from "../../redux/auth-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {createField, Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import s from "../common/FormControls/FormControl.module.css"

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
        let {email, password, rememberMe} = formData
        props.loginUser(email, password, rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, 'password')}
            {createField(null, 'rememberMe', [], Input, 'checkbox', 'remember me')}

            {error &&
            <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {loginUser}),
    withRouter
)(Login)
