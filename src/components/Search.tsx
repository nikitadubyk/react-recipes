import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Search: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const navigate = useNavigate()

    const submitForm = (e: React.SyntheticEvent) => {
        e.preventDefault()
        navigate('/searched/' + inputValue.toLowerCase())
    }

    return (
        <SearchStyled>
            <form onSubmit={submitForm}>
                <label htmlFor='search'>
                    <svg
                        enableBackground='new 0 0 32 32'
                        width='30px'
                        height='30px'
                        id='Glyph'
                        version='1.1'
                        viewBox='0 0 32 32'
                        xmlSpace='preserve'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                    >
                        <path
                            d='M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z'
                            id='XMLID_223_'
                        />
                    </svg>
                </label>
                <input
                    type='text'
                    name='search'
                    id='search'
                    value={inputValue}
                    placeholder='Find recipes'
                    onChange={e => setInputValue(e.target.value)}
                />
            </form>
        </SearchStyled>
    )
}

const SearchStyled = styled.div`
    display: block;
    margin: 2rem auto;
    text-align: center;
    form {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input {
        padding: 0.5rem 1rem;
        border: 1px solid #000;
        border-radius: 2rem;
        font-size: 1rem;
        background-color: #000;
        color: #fff;
        width: 20rem;
    }

    svg {
        margin-right: 0.5rem;
        cursor: pointer;
    }

    input::placeholder {
        color: #fff;
    }

    @media (max-width: 400px) {
        width: 15rem;
        margin: 1.3rem auto;

        input {
            width: 100%;
        }
    }
`

export default Search
