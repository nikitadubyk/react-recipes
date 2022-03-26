import React, { useState } from 'react'
import { logIn } from '../../utils/auth'
import './Login.css'

const LogIn: React.FC = () => {
    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')

    const onSubmitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault()
        logIn(emailValue, passwordValue)
    }

    return (
        <div className='login'>
            <h2>Log In</h2>
            <form onSubmit={onSubmitHandler} className='login__form'>
                <h4>Email</h4>
                <input
                    type='email'
                    placeholder='Email'
                    onChange={e => setEmailValue(e.target.value)}
                    required
                    className='login__input'
                />
                <h4>Password</h4>
                <input
                    type='password'
                    placeholder='Password'
                    required
                    minLength={6}
                    onChange={e => setPasswordValue(e.target.value)}
                    className='login__input'
                />
                <button className='login__button'>Log In</button>
            </form>
        </div>
    )
}

export default LogIn
