import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useRecipesService } from '../services/RecipesService'
import { Recipes } from '../type'
import Layout from '../components/Layout'
import Category from '../components/Category'
import Search from '../components/Search'
import Card from '../components/Card'
import Loader from '../components/Loader'

const Cuisine: React.FC = () => {
    const [cuisine, setCuisine] = useState<Recipes[]>([])
    const { isLoading, getCuisine } = useRecipesService()

    const { type } = useParams()

    useEffect(() => {
        getCuisine(type).then(res => setCuisine(res.results))
    }, [type])

    return (
        <Layout title={`Cuisine ${type}`}>
            <Search />
            <Category />
            <CuisineTitle>Cuisine {type}</CuisineTitle>
            {isLoading ? (
                <Loader />
            ) : (
                <CuisineStyled>
                    {cuisine &&
                        cuisine.map((item: Recipes) => {
                            return (
                                <div className='cuisine__wrapper' key={item.id}>
                                    <Card {...item} />
                                </div>
                            )
                        })}
                </CuisineStyled>
            )}
        </Layout>
    )
}

const CuisineStyled = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 5rem;
    padding: 0 15rem;

    .cuisine__wrapper {
        width: 20rem;
        margin: 0 auto;
    }

    @media (max-width: 1600px) {
        padding: 0 5rem;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    }

    @media (max-width: 1280px) {
        padding: 0 5rem;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        gap: 3rem;

        .cuisine__wrapper {
            width: 15rem;
        }
    }
`

const CuisineTitle = styled.h3`
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
`

export default Cuisine
