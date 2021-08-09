import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../../components/Footer'
import FormInput from '../../components/FormInput'
import List from '../../components/List'
import './_homeScreen.scss'

const HomeScreen = () => {
    const history = useHistory()
    
    const [accessToken, setAccessToken] = useState(sessionStorage.getItem('tdl-token'))

    useEffect(() => {
        if (accessToken === '')
            history.push('/')
    }, [accessToken, history])

    const handleLogout = () => {
        sessionStorage.removeItem('tdl-token')
        setAccessToken('')
    }


    return (
        <div className='homescreen'>
            <h1>To do List</h1>
            <FormInput />
            <List />
            <Footer />
            <div className='row'>
                <button className="Logout" onClick={handleLogout}>
                    Log out
                </button>
            </div>
        </div>
    )
}

export default HomeScreen
