import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Cuisine from './pages/Cuisine'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Searched from './pages/Searched'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/recipe/:id' element={<Recipe />} />
                <Route path='/cuisine/:type' element={<Cuisine />} />
                <Route path='/searched/:name' element={<Searched />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<LogIn />} />
            </Routes>
        </>
    )
}

export default App
