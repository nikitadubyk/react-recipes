import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, darkTheme, lightTheme } from './styles/globalStyles'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Header from './components/Header'
import Cuisine from './pages/Cuisine'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Searched from './pages/Searched'
import LogIn from './pages/Login'
import SignUp from './pages/SingUp'
import Favorite from './pages/Favorite'

const App: React.FC = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme)
        localStorage.setItem('theme', JSON.stringify(!isDarkTheme))
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        savedTheme ? setIsDarkTheme(true) : setIsDarkTheme(false)
    }, [])

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Header changeTheme={changeTheme} isDarkTheme={isDarkTheme} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/recipe/:id' element={<Recipe />} />
                <Route path='/cuisine/:type' element={<Cuisine />} />
                <Route path='/searched/:name' element={<Searched />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<LogIn />} />
                <Route
                    path='/favorite'
                    element={
                        <PrivateRoute>
                            <Favorite />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </ThemeProvider>
    )
}

export default App
