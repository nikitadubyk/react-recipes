import React from 'react'
import Popular from '../components/Popular'
import Vegetarian from '../components/Vegetarian'
import Search from '../components/Search'
import Category from '../components/Category'
import Layout from '../components/Layout'

const Home: React.FC = () => {
    return (
        <Layout title='Recipes'>
            <Search />
            <Category />
            <Popular />
            <Vegetarian />
        </Layout>
    )
}

export default Home
