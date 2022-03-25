import React from 'react'
import { Link } from 'react-router-dom'
import { IRecipes } from '../../type'
import './Card.css'

const Card: React.FC<IRecipes> = ({ id, image, title }) => {
    const defaultImage = image
        ? image
        : 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    return (
        <div className='card'>
            <Link to={`/recipe/${id}`}>
                <p className='card__title'>{title}</p>
                <img src={defaultImage} alt={title} className='card__img' />
                <div className='gradient'></div>
            </Link>
        </div>
    )
}

export default Card
