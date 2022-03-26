import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRecipesService } from '../../services/RecipesService'
import { IRecipes } from '../../type'
import Category from '../../components/Category'
import Search from '../../components/Search'
import Card from '../../components/Card'
import Loader from '../../components/Loader'
import './Cuisine.css'

const Cuisine: React.FC = () => {
    const [cuisine, setCuisine] = useState<IRecipes[]>([])
    const { isLoading, getCuisine } = useRecipesService()

    const { type } = useParams()

    useEffect(() => {
        getCuisine(type).then(res => setCuisine(res.results))
    }, [type])

    return (
        <>
            <Search />
            <Category />
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
