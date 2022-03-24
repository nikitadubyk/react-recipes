import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IResponse, IRecipes } from '../../type'
import axios, { AxiosResponse } from 'axios'
import Card from '../../components/Card/Card'
import Category from '../../components/Category/Category'
import './Cuisine.css'

const Cuisine: React.FC = () => {
    const [cuisine, setCuisine] = useState<IRecipes[]>([])
    const { type } = useParams()

    const getCuisine = async () => {
        const res = await axios
            .get<IResponse[]>(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&cuisine=${type}}`
            )
            .then((res: AxiosResponse) => setCuisine(res.data.results))
            .catch(e => alert('Failed to upload data'))
    }

    useEffect(() => {
        getCuisine()
    }, [type])

    return (
        <>
            <Category />
            <h3 className='cuisine__title'>Cuisine {type}</h3>
            <div className='cuisine'>
                {cuisine &&
                    cuisine.map((item: IRecipes) => {
                        return (
                            <div className='cuisine__wrapper'>
                                <Card {...item} key={item.id} />
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

export default Cuisine
