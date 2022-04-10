import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Recipes } from '../type'
import { useRecipesService } from '../services/RecipesService'
import Layout from '../components/Layout'
import Loader from '../components/Loader'
import Card from '../components/Card'
import Search from '../components/Search'
import Category from '../components/Category'

const Searched: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipes[]>([])
    const { isLoading, getRecipesBySearched } = useRecipesService()
    const { name } = useParams()

    useEffect(() => {
        getRecipesBySearched(name).then(res => setRecipes(res.results))
    }, [name])

    return (
        <Layout title={`Searched: ${name}`}>
            <Search />
            <Category />
            <SearchedTitleStyled>Searched {name}</SearchedTitleStyled>
            {isLoading ? (
                <Loader />
            ) : (
                <SearchedStyled>
                    {recipes &&
                        recipes.map((item: Recipes) => {
                            return (
                                <div
                                    className='searched__wrapper'
                                    key={item.id}
                                >
                                    <Card {...item} />
                                </div>
                            )
                        })}
                </SearchedStyled>
            )}
        </Layout>
    )
}

const SearchedStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 5rem;
    justify-content: center;
    padding: 0 5rem;

    .searched__wrapper {
        margin: 0 auto;
        width: 20rem;
    }

    @media (max-width: 880px) {
        padding: 0 2rem;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));

        .searched__wrapper {
            width: 15rem;
        }
    }
`

const SearchedTitleStyled = styled.h3`
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
`

export default Searched
