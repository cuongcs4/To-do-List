import React, { useState, useEffect } from 'react'
import './_signup.scss'
import '../login/_login.scss'
import { signup } from 'service'
import Alert from 'react-bootstrap/Alert'
import { useHistory } from 'react-router-dom'

const Signup = () => {
    const [info, setInfo] = useState({
        email: '',
        password: '',
        name: '',
        age: ''

    })
    const [accessToken, setAccessToken] = useState(sessionStorage.getItem('tdl-token'))
    const [show, setShow] = useState(false);

    const history = useHistory()

    useEffect(() => {
        if (accessToken)
            history.push("/my-task")
    }, [accessToken, history])

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault()
        const data = await signup(info)
        if (data.status !== 201) {
            if (data.data.includes('duplicate')) {
                setShow(true)
            }
        }
        else {
            setAccessToken(sessionStorage.getItem("tdl-token"))
        }
        //console.log(response)
        //const isValid = response.json()
        // console.log(isValid)
        // if (isValid)
        //     alert('Email has been used!!')

        //await getToken(email, password)
        // const accessToken = sessionStorage.getItem("tdl-token")
        // try {
        //     if (accessToken)
        //         history.push("/my-task");
        // } catch (e) {
        //     alert(e.message);
        // }    
    }

    return (
        <div className='signup__form'>
            {show ?
                <Alert variant="warning" onClose={() => setShow(false)} dismissible>
                    <strong>Sorry!</strong> Your email has been used :(
                </Alert>
                : null
            }
            <form onSubmit={handleSubmit}>
                <input
                    classname='signup__form__email'
                    name='email'
                    type="email"
                    placeholder='Email'
                    value={info.email}
                    onChange={handleChange}
                    required />
                <input
                    className='signup__form__password'
                    name='password'
                    type="password"
                    placeholder='Password'
                    value={info.password}
                    onChange={handleChange}
                    minLength='7'
                    required />
                <input
                    className='signup__form__name'
                    name='name'
                    type="text"
                    placeholder='Name'
                    value={info.name}
                    onChange={handleChange}
                    required />
                <input
                    className='signup__form__age'
                    name='age'
                    type="number"
                    placeholder='Age'
                    value={info.age}    
                    min="1" max="100"
                    onChange={handleChange}
                    required />
                <button
                    className='signup__form__submit'
                    type='submit'
                    id='login-button'>
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default Signup
