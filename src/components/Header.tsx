import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useAuth, logOut } from '../utils/auth'

const Header: React.FC = () => {
    const { currentUser } = useAuth()

    return (
        <HeaderStyled className='header'>
            <Link to='/' className='header__img'>
                <svg
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#fff'
                    width='25px'
                    height='25px'
                >
                    <g id='knife'>
                        <path d='M15.47,18.57l-1.31-1.24a2,2,0,0,1-.59-1.14L2.93,24.86a2.93,2.93,0,0,0,0,4.28A3.13,3.13,0,0,0,5.09,30a3.26,3.26,0,0,0,2.25-.9l9.08-10A2,2,0,0,1,15.47,18.57Z' />
                        <path d='M29,2.27a1,1,0,0,0-1.4,0L14.82,15.17a1,1,0,0,0,0,1.43l1.31,1.24a1,1,0,0,0,.69.27H17L23.78,17a1,1,0,0,0,.52-.26c2-1.9,5.7-7.78,5.7-11.66A3.68,3.68,0,0,0,29,2.27Z' />
                    </g>
                </svg>
            </Link>
            {currentUser ? (
                <div className='header__link'>
                    <Link to='/favorite'>Favorite</Link>
                    <button onClick={logOut}>Log Out</button>
                </div>
            ) : (
                <div className='header__link'>
                    <Link to='/signup'>Sign Up</Link>
                    <Link to='/login'>Log In</Link>
                </div>
            )}
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    padding: 1rem 10rem;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
        text-decoration: none;
        color: #fff;
        margin: 0 0.5rem;
        &:hover {
            text-decoration: underline;
        }
    }
    button {
        text-decoration: none;
        color: #000;
        padding: 0.3rem 1rem;
        margin-left: 1rem;
        background-color: rgb(212, 212, 212);
        border-radius: 2rem;
        border: none;
        cursor: pointer;
        transition: 0.3s all;
        &:hover {
            background-color: rgb(255, 255, 255);
        }
    }
    @media (max-width: 990px) {
        padding: 1rem 2rem;
    }
`

export default Header