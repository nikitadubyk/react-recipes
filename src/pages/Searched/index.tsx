import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IRecipes } from '../../type'
import { useRecipesService } from '../../services/RecipesService'
import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import Card from '../../components/Card'
import Search from '../../components/Search'
import Category from '../../components/Category'
import './Searched.css'

const Searched: React.FC = () => {
    const [recipes, setRecipes] = useState<IRecipes[]>([])
    const { isLoading, getRecipesBySearched } = useRecipesService()
    const { name } = useParams()

    useEffect(() => {
        getRecipesBySearched(name).then(res => setRecipes(res.results))
    }, [name, getRecipesBySearched])

    return (
        <Layout title={`Searched: ${name}`}>
            <Search />
            <Category />
            <h3 className='searched__title'>Searched {name}</h3>
            {isLoading ? (
                <Loader />
            ) : (
                <div className='searched'>
                    {recipes &&
                        recipes.map((item: IRecipes) => {
                            return (
                                <div
                                    className='searched__wrapper'
                                    key={item.id}
                                >
                                    <Card {...item} />
                                </div>
                            )
                        })}
                </div>
            )}
        </Layout>
    )
}

export default Searched
