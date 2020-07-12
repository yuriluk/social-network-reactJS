import React from 'react'

const Login = (props) => {
    return (
        <>
            <h1>LOGIN</h1>
            <label htmlFor="login">Login</label>
            <input id='login' type="login" value={props.login}/>

            <label htmlFor="login">Password</label>
            <input id='password' type="password" value={props.password}/>

            <button>LogIn</button>
        </>
    )
}

export default Login