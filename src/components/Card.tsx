import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Recipes } from '../type'

const Card: React.FC<Recipes> = ({ id, image, title }) => {
    const defaultImage = image
        ? image
        : 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    return (
        <CardStyled>
            <Link to={`/recipe/${id}`}>
                <p>{title}</p>
                <img src={defaultImage} alt={title} />
                <Gradient />
            </Link>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    min-height: 20rem;
    width: 100%;
    position: relative;
    border-radius: 2rem;
    cursor: pointer;
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        border-radius: 2rem;
    }

    p {
        position: absolute;
        color: #fff;
        bottom: 10%;
        left: 0.5rem;
        z-index: 5;
        text-align: center;
    }
`
const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
`

export default Card
