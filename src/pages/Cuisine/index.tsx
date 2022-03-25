import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IRecipes } from '../../type'
import Card from '../../components/Card'
import Loader from '../../components/Loader'
import { useHttp } from '../../hook/http.hook'
import './Cuisine.css'

const Cuisine: React.FC = () => {
    const [cuisine, setCuisine] = useState<IRecipes[]>([])
    const { isLoading, request } = useHttp()

    const { type } = useParams()

    const getCuisine = async () => {
        request(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&cuisine=${type}}`
        ).then(res => {
            setCuisine(res.results)
        })
    }

    useEffect(() => {
        getCuisine()
    }, [type])

    return (
        <>
            <h3 className='cuisine__title'>Cuisine {type}</h3>
            {isLoading ? (
                <Loader />
            ) : (
                <div className='cuisine'>
                    {cuisine &&
                        cuisine.map((item: IRecipes) => {
                            return (
                                <div className='cuisine__wrapper' key={item.id}>
                                    <Card {...item} />
                                </div>
                            )
                        })}
                </div>
            )}
        </>
    )
}

export default Cuisine
