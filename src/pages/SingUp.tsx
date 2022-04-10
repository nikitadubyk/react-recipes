import React, { useState } from 'react'
import styled from 'styled-components'
import { createUser } from '../utils/auth'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

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
        <Layout title='Sign In'>
            <SignUpStyled>
                <h2>Sign up</h2>
                {error && <div className='error'>{error}</div>}
                <form onSubmit={handleSignUp}>
                    <h4>Email</h4>
                    <input
                        name='email'
                        type='email'
                        placeholder='Email'
                        onChange={e => setEmailValue(e.target.value)}
                        required
                    />
                    <h4>Password</h4>
                    <input
                        name='password'
                        type='password'
                        placeholder='Password'
                        onChange={e => setPasswordValue(e.target.value)}
                        required
                        minLength={6}
                    />
                    <button type='submit'>Sign Up</button>
                </form>
            </SignUpStyled>
        </Layout>
    )
}

const SignUpStyled = styled.div`
    padding: 2rem 15rem;

    h2 {
        text-align: center;
        font-size: 2rem;
    }

    form {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        margin-top: 1rem;
        padding: 2rem;
        width: 25rem;
        min-height: 15rem;
        background-color: rgb(57, 255, 189);
    }

    form h4 {
        margin: 0;
        font-size: 1.2rem;
    }

    input {
        margin: 1rem 0;
        width: 100%;
        padding: 1rem;
        border-radius: 2rem;
        border: none;
        font-size: 1.2rem;
        background-color: #fff;
    }

    button {
        font-size: 1.5rem;
        margin-top: 2rem;
        border-radius: 2rem;
        background-color: #fff;
        padding: 0.5rem 1rem;
        border: none;
        cursor: pointer;
        transition: 0.5s all;
        &:hover {
            background-color: #000;
            color: #fff;
        }
    }

    .error {
        text-align: center;
        padding: 2rem;
        font-size: 1.2rem;
        background-color: rgb(253, 104, 104);
        width: 20rem;
        margin: 2rem auto;
    }

    @media (max-width: 900px) {
        padding: 2rem;
    }

    @media (max-width: 500px) {
        form {
            width: 100%;
            padding: 1.5rem;
        }
        .error {
            width: 100%;
        }
    }
`

export default Signup
