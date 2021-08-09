import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LoginNavbar = () => {
    const [active, setActive] = useState('')
    useEffect(() => {
        let currentURL = window.location.href
        console.log(currentURL)

        if (currentURL.endsWith('/'))
            setActive('Login')
        else if (currentURL.endsWith('/sign-up'))
            setActive('Sign up')
    }, [active])

    return (
        <div className='headbar'>
            <div className='headbar__items'>
                <Link to='/'>
                    <div className={active === 'Login' ? "headbar__item active" : "headbar__item"}
                        onClick={() => setActive('Login')}>Login
                    </div>
                </Link>
                <Link to='/sign-up'>
                    <div className={active === 'Sign up' ? "headbar__item active" : "headbar__item"}
                        onClick={() => setActive('Sign up')}>Sign up
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default LoginNavbar
