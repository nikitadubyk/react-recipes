import React, { useState, useEffect } from 'react'
import { IRecipes } from '../../type'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import Card from '../Card'
import Loader from '../Loader'
import { useHttp } from '../../hook/http.hook'
import '../Popular/Popular.css'

const Vegetarian: React.FC = () => {
    const [vegetarians, setVegetarians] = useState<IRecipes[]>([])
    const { isLoading, request } = useHttp()

    useEffect(() => {
        getVegetarianRecipes()
    }, [])

    async function getVegetarianRecipes() {
        const checkVegetarians = localStorage.getItem('vegetarians')

        if (checkVegetarians) {
            setVegetarians(JSON.parse(checkVegetarians))
        } else {
            request(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`
            ).then(res => {
                localStorage.setItem(
                    'vegetarians',
                    JSON.stringify(res.data.recipes)
                )
                setVegetarians(res.recipes)
            })
        }
    }

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className='vegetarian'>
                    <h3 className='vegetarian__title'>Vegetarians Recipes</h3>
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
            )}
        </>
    )
}

export default Vegetarian
