import React from 'react'

const Login = (props) => {
    return (
        <>
            <h1>LOGIN</h1>
            <label for="login">Login</label>
            <input id='login' type="login" value={props.login}/>

            <label for="login">Password</label>
            <input id='password' type="password" value={props.password}/>

            <button>LogIn</button>
        </>
    )
}

export default Login