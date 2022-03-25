import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Category from './components/Category'
import Search from './components/Search'
import Cuisine from './pages/Cuisine'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Searched from './pages/Searched'

const App: React.FC = () => {
    return (
        <>
            <Search />
            <Category />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/recipe/:id' element={<Recipe />} />
                <Route path='/cuisine/:type' element={<Cuisine />} />
                <Route path='/searched/:name' element={<Searched />} />
            </Routes>
        </>
    )
}

export default App
