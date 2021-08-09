import React from 'react'
import Login from 'components/login/Login'
import LoginNavbar from 'components/Navbar'

const LoginScreen = () => {
    return (
        <div className='loginScreen'>
            <div className='login-wrapper'>
                <div className='login'>
                    <h1>Welcome</h1>
                    <LoginNavbar />
                    <Login />   
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
