import React, { useState, useEffect } from 'react'
import { Recipes } from '../../type'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import Card from '../Card'
import Loader from '../Loader'
import { useRecipesService } from '../../services/RecipesService'
import './Popular.css'

const Popular: React.FC = () => {
    const [populars, setPopulars] = useState<Recipes[]>([])
    const { isLoading, getPopularRecipes } = useRecipesService()

    useEffect(() => {
        checkPopularRecipes()
    }, [])

    async function checkPopularRecipes() {
        const checkRecipes = localStorage.getItem('popular')

        if (checkRecipes) {
            setPopulars(JSON.parse(checkRecipes))
        } else {
            getPopularRecipes().then(res => {
                localStorage.setItem('popular', JSON.stringify(res.recipes))
                setPopulars(res.recipes)
            })
        }
    }

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className='popular'>
                    <h3 className='popular__title'>Popular Recipes</h3>
                    <Splide
                        options={{
                            perPage: 4,
                            arrows: false,
                            pagination: false,
                            drag: 'free',
                            gap: '2rem',
                            breakpoints: {
                                1200: {
                                    perPage: 3,
                                },
                                640: {
                                    perPage: 2,
                                    pagination: true,
                                    arrows: true,
                                },
                                560: {
                                    perPage: 1,
                                },
                            },
                        }}
                    >
                        {populars &&
                            populars.map((item: Recipes) => {
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

export default Popular
