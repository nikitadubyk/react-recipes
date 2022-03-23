import React, { useState, useEffect } from 'react'
import { IResponse, IRecipes } from '../../type'
import axios, { AxiosResponse } from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import Card from '../Card/Card'
import '../Popular/Popular.css'

const Vegetarian: React.FC = () => {
    const [vegetarians, setVegetarians] = useState<IRecipes[]>([])

    useEffect(() => {
        getVegetarianRecipes()
    }, [])

    async function getVegetarianRecipes() {
        const checkVegetarians = localStorage.getItem('vegetarians')

        if (checkVegetarians) {
            setVegetarians(JSON.parse(checkVegetarians))
        } else {
            const res = await axios
                .get<IResponse[]>(
                    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`
                )
                .then((res: AxiosResponse) => {
                    localStorage.setItem(
                        'vegetarians',
                        JSON.stringify(res.data.recipes)
                    )
                    setVegetarians(res.data.recipes)
                })
                .catch(e => alert('Failed to upload data'))
        }
    }

    return (
        <div className='popular'>
            <h3 className='popular__title'>Vegetarians Recipes</h3>
            <Splide
                options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem',
                }}
            >
                {vegetarians &&
                    vegetarians.map((item: IRecipes) => {
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

export default Vegetarian
