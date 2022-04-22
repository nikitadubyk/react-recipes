import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useAuth, logOut } from '../utils/auth'

interface Props {
    changeTheme: () => void
    isDarkTheme: boolean
}

const Header: React.FC<Props> = ({ changeTheme, isDarkTheme }) => {
    const { currentUser } = useAuth()

    return (
        <HeaderStyled>
            <Link to='/'>
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
            <Wrapper>
                {currentUser ? (
                    <div>
                        <Link to='/favorite'>Favorite</Link>
                        <button onClick={logOut}>Log Out</button>
                    </div>
                ) : (
                    <div>
                        <Link to='/signup'>Sign Up</Link>
                        <Link to='/login'>Log In</Link>
                    </div>
                )}
                <ThemeIcon onClick={changeTheme}>
                    {isDarkTheme ? (
                        <svg
                            data-name='Layer 1'
                            viewBox='0 0 64 64'
                            xmlns='http://www.w3.org/2000/svg'
                            width={25}
                            height={25}
                        >
                            <title />
                            <path
                                d='M44.54 41.47a23 23 0 0 1-20.05-29.74A1 1 0 0 0 23 10.59 23 23 0 1 0 54.41 42a1 1 0 0 0-1.14-1.47 23.06 23.06 0 0 1-8.73.94Z'
                                style={{
                                    fill: '#efcc00',
                                }}
                            />
                        </svg>
                    ) : (
                        <svg
                            data-name='Layer 1'
                            id='Layer_1'
                            viewBox='0 0 64 64'
                            xmlns='http://www.w3.org/2000/svg'
                            width={25}
                            height={25}
                        >
                            <defs>
                                <style>
                                    {
                                        '.cls-2{fill:none;stroke:#efcc00;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px}'
                                    }
                                </style>
                            </defs>
                            <title />
                            <circle
                                cx={32}
                                cy={32}
                                r={17}
                                style={{
                                    fill: '#efcc00',
                                }}
                            />
                            <path
                                className='cls-2'
                                d='M32 5v6M32 53v6M59 32h-6M11 32H5M51.09 12.91l-4.24 4.24M17.15 46.85l-4.24 4.24M51.09 51.09l-4.24-4.24M17.15 17.15l-4.24-4.24'
                            />
                        </svg>
                    )}
                </ThemeIcon>
            </Wrapper>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    padding: 1rem 10rem;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    a {
        text-decoration: none;
        color: #fff;
        margin: 0 0.5rem;
        &:hover {
            text-decoration: underline;
        }
        svg {
            fill: #fff;
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

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const ThemeIcon = styled.div`
    margin: 0 0.5rem;
    cursor: pointer;
`

export default Header
