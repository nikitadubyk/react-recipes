import React from 'react'
import styled from 'styled-components'

const Loader: React.FC = () => {
    return (
        <LoaderStyled>
            <div className='lds-ring'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </LoaderStyled>
    )
}

const LoaderStyled = styled.div`
    text-align: center;
    margin-top: 5rem;
    .lds-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 50px;
        height: 50px;
        margin: 8px;
        border: 6px solid rgb(0, 0, 0);
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${({ theme }) => theme.loader} transparent transparent
            transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export default Loader
