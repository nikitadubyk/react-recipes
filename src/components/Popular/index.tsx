import React, { useState, useEffect } from 'react'
import { IRecipes } from '../../type'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import Card from '../Card'
import Loader from '../Loader'
import { useRecipesService } from '../../services/RecipesService'
import './Popular.css'

const Popular: React.FC = () => {
    const [populars, setPopulars] = useState<IRecipes[]>([])
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
            )}
        </>
    )
}

export default Popular
