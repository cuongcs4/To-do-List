import React from 'react'
import LoginNavbar from 'components/Navbar'
import Signup from 'components/signup/Signup'


const SignupScreen = () => {
    return (
        <div className='signupScreen'>
            <div className='signup-wrapper'>
                <div className='signup'>
                    <h1>Welcome</h1>
                    <LoginNavbar />
                    <Signup />   
                </div>

            </div>
        </div>
    )
}

export default SignupScreen
