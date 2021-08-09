import React, { useState, useEffect } from 'react'
import './_login.scss'
import { getToken } from 'service'

import { Redirect, useHistory } from 'react-router-dom'
import { Alert } from 'react-bootstrap'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const [show, setShow] = useState(false);
    const [accessToken, setAccessToken] = useState(sessionStorage.getItem("tdl-token"))


    useEffect(() => {
        console.log(accessToken)
        if (accessToken)
            history.push("/my-task")
    }, [accessToken, history])

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async e => {
        e.preventDefault()
        const data = await getToken(email, password)
        if (data.status !== 200) {
            if (data.data.includes('Unable to login')) {
                setShow(true)
            }
        }
        else {
            setAccessToken(sessionStorage.getItem("tdl-token"))
        }
    }



    return (

        <div className='login__form'>
            {show ?
                <Alert variant="warning" onClose={() => setShow(false)} dismissible>
                    <strong>Sorry!</strong> Your email or password is not correct
                </Alert>
                : null
            }
            <form onSubmit={handleSubmit}>
                <input
                    classname='login__form__email'
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={handleEmail} />
                <input
                    className='login__form__password'
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={handlePassword} />
                <button
                    className='login__form__submit'
                    type='submit'
                    id='login-button'>
                    Login
                </button>
            </form>
        </div>
    )
}
export default Login
