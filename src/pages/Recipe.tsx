import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { DetailRecipe, Ingredients, Favorite } from '../type'
import { useRecipesService } from '../services/RecipesService'
import { useAuth } from '../utils/auth'
import Loader from '../components/Loader'
import Layout from '../components/Layout'

const Recipe: React.FC = () => {
    const [detail, setDetail] = useState<DetailRecipe>()
    const [buttonToggle, setButtonToggle] = useState<string>('instructions')
    const [favorite, setFavorite] = useState<Favorite[]>([])
    const [isFavorite, setIsFavorite] = useState<boolean>(false)
    const { isLoading, getDetailRecipe } = useRecipesService()
    const { currentUser, isLoaded } = useAuth()
    const { id } = useParams()

    useEffect(() => {
        getDetailRecipe(id).then(res => setDetail(res))
        if (localStorage.getItem('favorite')) {
            //@ts-ignore
            const local = JSON.parse(localStorage.getItem('favorite'))
            setFavorite(local)
            if (
                local.find(
                    (recipe: Favorite) => Number(recipe.id) === Number(id)
                )
            ) {
                setIsFavorite(true)
            }
        }
    }, [id])

    const toggleTagButton = (tag: string) => setButtonToggle(tag)

    const addToFavorite = () => {
        const obj = {
            id: detail?.id,
            title: detail?.title,
            image: detail?.image,
        }

        if (favorite.find((recipe: Favorite) => recipe.id === obj.id)) {
            setIsFavorite(false)
            const filter = favorite.filter(
                (recipe: Favorite) => Number(recipe.id) !== Number(obj.id)
            )
            setFavorite([...filter])
            localStorage.setItem('favorite', JSON.stringify(filter))
        } else {
            const newObj = [...favorite, obj]
            setIsFavorite(true)
            setFavorite([...newObj])
            localStorage.setItem('favorite', JSON.stringify(newObj))
        }
    }

    return (
        <Layout title={`${detail?.title}`}>
            {isLoading ? (
                <Loader />
            ) : (
                detail && (
                    <RecipeStyled>
                        <div className='recipe__wrapper'>
                            <h3 className='recipe__title'>{detail.title}</h3>
                            <img
                                src={detail.image}
                                alt={detail.title}
                                className='recipe__img'
                            />
                        </div>
                        <div className='recipe__descr'>
                            <div className='recipe__wrapper__button'>
                                <button
                                    onClick={() =>
                                        toggleTagButton('instructions')
                                    }
                                    className={`recipe__button ${
                                        buttonToggle === 'instructions'
                                            ? 'recipe__button_active'
                                            : ''
                                    }`}
                                >
                                    Instructions
                                </button>
                                <button
                                    onClick={() =>
                                        toggleTagButton('ingridient')
                                    }
                                    className={`recipe__button ${
                                        buttonToggle === 'ingridient'
                                            ? 'recipe__button_active'
                                            : ''
                                    }`}
                                >
                                    Ingridient
                                </button>
                                {currentUser !== null && isLoaded ? (
                                    <button
                                        className={
                                            isFavorite
                                                ? 'recipe__star_active'
                                                : 'recipe__star'
                                        }
                                        onClick={addToFavorite}
                                    >
                                        <svg
                                            version='1.1'
                                            viewBox='0 0 20 21'
                                            height='21px'
                                            width='20px'
                                            xmlns='http://www.w3.org/2000/svg'
                                            xmlnsXlink='http://www.w3.org/1999/xlink'
                                        >
                                            <title />
                                            <desc />
                                            <defs />
                                            <g
                                                fill='none'
                                                fillRule='evenodd'
                                                id='Page-1'
                                                stroke='none'
                                                strokeWidth='1'
                                            >
                                                <g
                                                    fill='#000000'
                                                    id='Core'
                                                    transform='translate(-296.000000, -422.000000)'
                                                >
                                                    <g
                                                        id='star'
                                                        transform='translate(296.000000, 422.500000)'
                                                    >
                                                        <path
                                                            d='M10,15.273 L16.18,19 L14.545,11.971 L20,7.244 L12.809,6.627 L10,0 L7.191,6.627 L0,7.244 L5.455,11.971 L3.82,19 L10,15.273 Z'
                                                            id='Shape'
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                ) : (
                                    ''
                                )}
                            </div>
                            {buttonToggle === 'instructions' && (
                                <>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: detail.summary,
                                        }}
                                    ></p>
                                    <h3>Instructions</h3>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: detail.instructions,
                                        }}
                                    ></p>
                                </>
                            )}
                            {buttonToggle === 'ingridient' && (
                                <>
                                    <h3>Ingridient</h3>
                                    <ul>
                                        {detail.extendedIngredients.map(
                                            (ingridient: Ingredients) => {
                                                return (
                                                    <li key={ingridient.id}>
                                                        {ingridient.original}
                                                    </li>
                                                )
                                            }
                                        )}
                                    </ul>
                                </>
                            )}
                        </div>
                    </RecipeStyled>
                )
            )}
        </Layout>
    )
}

const RecipeStyled = styled.div`
    padding: 2rem;
    display: flex;
    margin-top: 2rem;
    justify-content: center;

    .recipe__wrapper {
        margin-right: 5rem;
    }

    .recipe__descr {
        width: 50rem;
    }

    .recipe__descr a {
        text-decoration: none;
        color: #000;
    }

    .recipe__descr a:hover {
        text-decoration: underline;
    }

    .recipe__wrapper__button {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }

    .recipe__button {
        margin: 0 1rem;
        border: 1px solid #000;
        background-color: #fff;
        padding: 1rem 2rem;
        cursor: pointer;
        transition: 0.5s all;
    }

    .recipe__star {
        padding: 0.5rem;
        border: 1px solid #000;
        border-radius: 0.5rem;
        background-color: #fff;
        cursor: pointer;
        transition: 0.5s all;
    }

    .recipe__star_active {
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: none;
        background-color: rgb(19, 163, 0);
        cursor: pointer;
        transition: 0.5s all;
    }

    .recipe__star:hover {
        border: none;
        background-color: rgb(19, 163, 0);
    }

    .recipe__star:hover svg g,
    .recipe__star_active svg g {
        fill: rgb(255, 255, 255);
        transition: 0.2s all;
    }

    .recipe__button:hover,
    .recipe__button_active {
        border: none;
        background-color: #000;
        color: #fff;
    }

    @media (max-width: 1200px) {
        flex-direction: column;
        margin-top: 0;

        .recipe__wrapper {
            margin: 0 auto;
        }

        .recipe__descr {
            width: 100%;
            margin: 2rem auto;
        }

        .recipe__wrapper__button {
            text-align: center;
        }

        img {
            width: 100%;
        }
    }

    @media (max-width: 400px) {
        .recipe__button {
            padding: 1rem;
            margin: 0 0.3rem;
        }
    }
`

export default Recipe
