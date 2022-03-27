import React, { useState } from 'react'
import { createUser } from '../../utils/auth'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'

const Signup: React.FC = () => {
    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')
    const [error, setError] = useState<string>('')

    const navigate = useNavigate()

    const handleSignUp = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        try {
            setError('')
            await createUser(emailValue, passwordValue)
            navigate('/')
        } catch (error) {
            setError('Failed to sign up, try again')
        }
    }

    return (
        <div className='signup'>
            <h2>Sign up</h2>
            {error && <div className='error'>{error}</div>}
            <form onSubmit={handleSignUp} className='signup__form'>
                <h4>Email</h4>
                <input
                    name='email'
                    type='email'
                    placeholder='Email'
                    onChange={e => setEmailValue(e.target.value)}
                    className='signup__input'
                    required
                />
                <h4>Password</h4>
                <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    onChange={e => setPasswordValue(e.target.value)}
                    className='signup__input'
                    required
                    minLength={6}
                />
                <button className='signup__button' type='submit'>
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default Signup
