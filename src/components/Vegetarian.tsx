import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Recipes } from '../type'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import Card from './Card'
import { useRecipesService } from '../services/RecipesService'

const Vegetarian: React.FC = () => {
    const [vegetarians, setVegetarians] = useState<Recipes[]>([])
    const { getVegetarianRecipes } = useRecipesService()

    useEffect(() => {
        checkVegetarianRecipes()
    }, [])

    async function checkVegetarianRecipes() {
        const checkVegetarians = localStorage.getItem('vegetarians')

        if (checkVegetarians) {
            setVegetarians(JSON.parse(checkVegetarians))
        } else {
            getVegetarianRecipes().then(res => {
                localStorage.setItem('vegetarians', JSON.stringify(res.recipes))
                setVegetarians(res.recipes)
            })
        }
    }

    return (
        <>
            <VegetarianStyled>
                <h3>Vegetarians Recipes</h3>
                <Splide
                    options={{
                        perPage: 3,
                        arrows: false,
                        pagination: false,
                        drag: 'free',
                        gap: '3rem',
                        breakpoints: {
                            900: {
                                perPage: 2,
                                pagination: true,
                                arrows: true,
                            },
                            500: {
                                perPage: 1,
                            },
                        },
                    }}
                >
                    {vegetarians &&
                        vegetarians.map((item: Recipes) => {
                            return (
                                <SplideSlide key={item.id}>
                                    <Card {...item} />
                                </SplideSlide>
                            )
                        })}
                </Splide>
            </VegetarianStyled>
        </>
    )
}

const VegetarianStyled = styled.div`
    padding: 2rem 15rem;
    h3 {
        font-size: 1.5rem;
    }
    @media (max-width: 1350px) {
        padding: 1rem 2rem;
    }

    @media (max-width: 640px) {
        text-align: center;
    }
`

export default Vegetarian
