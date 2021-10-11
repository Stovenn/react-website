import React from 'react'
import { useHistory} from 'react-router-dom'
const Login = (props) => {
    const history = useHistory()
    const auth = (e) => {
        e.preventDefault()
        props.login(true)
        history.push('/')
    }
    return (
        <form onSubmit={(e) => {auth(e)}}>
            <label htmlFor="username">username</label>
            <input type="text" name="username" id="username"/>
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password"/>
            <button>Login</button>
        </form>
    )
}

export default Login
