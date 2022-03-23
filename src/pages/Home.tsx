import React from 'react'
import Category from '../components/Category/Category'
import Popular from '../components/Popular/Popular'
import Vegetarian from '../components/Vegetarian/Vegetarian'

const Home: React.FC = () => {
    return (
        <>
            <Category />
            <Popular />
            <Vegetarian />
        </>
    )
}

export default Home
