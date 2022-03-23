import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cuisine from './pages/Cuisine/Cuisine'
import Home from './pages/Home'
import Recipe from './pages/Recipe/Recipe'

const App: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recipe/:id' element={<Recipe />} />
            <Route path='/cuisine/:type' element={<Cuisine />} />
        </Routes>
    )
}

export default App
