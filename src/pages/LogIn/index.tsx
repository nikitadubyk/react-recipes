import React, { useState } from 'react'
import { logIn } from '../../utils/auth'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout'
import './Login.css'

const LogIn: React.FC = () => {
    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')
    const [error, setError] = useState<string>('')
    const navigate = useNavigate()

    const onSubmitHandler = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        try {
            setError('')
            await logIn(emailValue, passwordValue)
            navigate('/')
        } catch (error) {
            setError('Wrong email or password')
        }
    }

    return (
        <Layout title='Log In'>
            <div className='login'>
                <h2>Log In</h2>
                {error && <div className='error'>{error}</div>}
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
        </Layout>
    )
}

export default LogIn
