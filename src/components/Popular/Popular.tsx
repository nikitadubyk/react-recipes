import React, { useState, useEffect } from 'react'
import { IResponse, IRecipes } from '../../type'
import axios, { AxiosResponse } from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import Card from '../Card/Card'
import './Popular.css'

const Popular: React.FC = () => {
    const [populars, setPopulars] = useState<IRecipes[]>([])

    useEffect(() => {
        getPopularRecipes()
    }, [])

    async function getPopularRecipes() {
        const checkRecipes = localStorage.getItem('popular')

        if (checkRecipes) {
            setPopulars(JSON.parse(checkRecipes))
        } else {
            const res = await axios
                .get<IResponse[]>(
                    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
                )
                .then((res: AxiosResponse) => {
                    localStorage.setItem(
                        'popular',
                        JSON.stringify(res.data.recipes)
                    )
                    setPopulars(res.data.recipes)
                })
                .catch(e => alert('Failed to upload data'))
        }
    }

    return (
        <div className='popular'>
            <h3 className='popular__title'>Popular Recipes</h3>
            <Splide
                options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem',
                }}
            >
                {populars &&
                    populars.map((item: IRecipes) => {
                        return (
                            <SplideSlide key={item.id}>
                                <Card {...item} />
                            </SplideSlide>
                        )
                    })}
            </Splide>
        </div>
    )
}

export default Popular
