import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IDetailRecipe, IIngredients } from '../../type'
import { useHttp } from '../../hook/http.hook'
import Loader from '../../components/Loader'
import './Recipe.css'

const Recipe: React.FC = () => {
    const [detail, setDetail] = useState<IDetailRecipe>()
    const [buttonToggle, setButtonToggle] = useState<string>('instructions')
    const { isLoading, request } = useHttp()
    const { id } = useParams()

    useEffect(() => {
        getDetail()
    }, [id])

    const getDetail = async () => {
        request(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        ).then(res => setDetail(res))
    }

    const toggleTagButton = (tag: string) => setButtonToggle(tag)

    return (
        <>
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
                            <button
                                onClick={() => toggleTagButton('instructions')}
                                className='recipe__button'
                            >
                                Instructions
                            </button>
                            <button
                                onClick={() => toggleTagButton('ingridient')}
                                className='recipe__button'
                            >
                                Ingridient
                            </button>
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
        </>
    )
}

export default Recipe
