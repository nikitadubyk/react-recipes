import React from 'react'
import Popular from '../components/Popular'
import Vegetarian from '../components/Vegetarian'
import Search from '../components/Search'
import Category from '../components/Category'

const Home: React.FC = () => {
    return (
        <>
            <Search />
            <Category />
            <Popular />
            <Vegetarian />
        </>
    )
}

export default Home
