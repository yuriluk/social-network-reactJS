import React from 'react'
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {loginUser} from "../../redux/auth-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {Input} from "../common/FormControls/FormControls";
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


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={'Password'} type='password' name={'password'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
            </div>

            {props.error &&
                <div className={s.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>LogIn</button>
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