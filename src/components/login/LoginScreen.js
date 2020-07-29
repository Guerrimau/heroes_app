import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = ({ history }) => {
    
    const handleLogin = () => {
        history.replace('/');
    }
    
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
