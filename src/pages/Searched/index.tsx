import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IRecipes } from '../../type'
import { useHttp } from '../../hook/http.hook'
import Loader from '../../components/Loader'
import './Searched.css'
import Card from '../../components/Card'

import './Searched.css'

const Searched: React.FC = () => {
    const [recipes, setRecipes] = useState<IRecipes[]>([])
    const { isLoading, request } = useHttp()
    const { name } = useParams()

    const getRecipesBySearched = () => {
        request(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
        ).then(res => setRecipes(res.results))
    }

    useEffect(() => {
        getRecipesBySearched()
    }, [name])

    return (
        <>
            <h3 className='searched__title'>Searched {name}</h3>
            {isLoading ? (
                <Loader />
            ) : (
                <div className='searched'>
                    {recipes &&
                        recipes.map((item: IRecipes) => {
                            return (
                                <div className='searched__wrapper'>
                                    <Card {...item} key={item.id} />
                                </div>
                            )
                        })}
                </div>
            )}
        </>
    )
}

export default Searched
