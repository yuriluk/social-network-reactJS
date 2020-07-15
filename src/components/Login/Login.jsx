import React from 'react'
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {loginUser, logoutUser} from "../../redux/auth-reducer";
import {withRouter} from "react-router-dom";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
        let {login, password, rememberMe} = formData
        props.loginUser({
            email: login,
            password: password,
            rememberMe: rememberMe
        })
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
            </div>
            <div>
                <button>LogIn</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, {loginUser, logoutUser}),
    withRouter
)(Login)