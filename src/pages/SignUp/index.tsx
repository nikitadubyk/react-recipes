import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../../components/Auth/firebase'
import './SignUp.css'

const Signup = () => {
    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')
    const navigate = useNavigate()

    const handleSignUp = (e: React.SyntheticEvent) => {
        e.preventDefault()
        try {
            createUser(emailValue, passwordValue).then(user =>
                console.log(user)
            )
            navigate('/')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            <h2>Sign up</h2>
            <form onSubmit={handleSignUp}>
                <label>
                    Email
                    <input
                        name='email'
                        type='email'
                        placeholder='Email'
                        onChange={e => setEmailValue(e.target.value)}
                    />
                </label>
                <label>
                    Password
                    <input
                        name='password'
                        type='password'
                        placeholder='Password'
                        onChange={e => setPasswordValue(e.target.value)}
                    />
                </label>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup
