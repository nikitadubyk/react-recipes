import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IDetailRecipe, IIngredients } from '../../type'
import { useRecipesService } from '../../services/RecipesService'
import { useAuth } from '../../utils/auth'
import Loader from '../../components/Loader'
import Layout from '../../components/Layout'
import './Recipe.css'

const Recipe: React.FC = () => {
    const [detail, setDetail] = useState<IDetailRecipe>()
    const [buttonToggle, setButtonToggle] = useState<string>('instructions')
    const [isFavorite, setIsFavorite] = useState<boolean>(false)
    const { isLoading, getDetailRecipe } = useRecipesService()
    const { currentUser, isLoaded } = useAuth()
    const { id } = useParams()

    useEffect(() => {
        getDetailRecipe(id).then(res => setDetail(res))
        if (!localStorage.getItem('favorite')) {
            localStorage.setItem('favorite', JSON.stringify([]))
        }

        const recipes = JSON.parse(localStorage.getItem('favorite') || '')
        if (
            recipes.find(
                (recipe: IDetailRecipe) => Number(recipe.id) === Number(id)
            )
        ) {
            setIsFavorite(true)
        }
    }, [id])

    const toggleTagButton = (tag: string) => setButtonToggle(tag)

    const addToFavorite = () => {
        const obj = {
            id: detail?.id,
            title: detail?.title,
            image: detail?.image,
        }

        const recipes = JSON.parse(localStorage.getItem('favorite') || '')

        if (recipes.find((recipe: IDetailRecipe) => recipe.id === obj.id)) {
            setIsFavorite(false)
            const filter = recipes.filter(
                (recipe: IDetailRecipe) => Number(recipe.id) !== Number(obj.id)
            )
            localStorage.setItem('favorite', JSON.stringify(filter))
        } else {
            setIsFavorite(true)
            const newObj = [...recipes, obj]
            localStorage.setItem('favorite', JSON.stringify(newObj))
        }
    }

    return (
        <Layout title={`${detail?.title}`}>
            {isLoading ? (
                <Loader />
            ) : (
                detail && (
                    <div className='recipe'>
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
                                            (ingridient: IIngredients) => {
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
                    </div>
                )
            )}
        </Layout>
    )
}

export default Recipe
