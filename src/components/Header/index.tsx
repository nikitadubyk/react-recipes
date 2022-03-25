import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header: React.FC = () => {
    return (
        <header className='header'>
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
            <div className='header__link'>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
            </div>
        </header>
    )
}

export default Header
