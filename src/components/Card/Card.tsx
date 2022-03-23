import React from 'react'
import { Link } from 'react-router-dom'
import { IRecipes } from '../../type'
import './Card.css'

const Card: React.FC<IRecipes> = ({ id, image, title }) => {
    return (
        <div className='card'>
            <Link to={`/recipe/${id}`}>
                <p className='card__title'>{title}</p>
                <img src={image} alt={title} className='card__img' />
            </Link>
        </div>
    )
}

export default Card
