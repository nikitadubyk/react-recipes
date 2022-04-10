import React from 'react'
import { createGlobalStyle } from 'styled-components'
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

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        box-sizing: border-box;
    }

    p,
    h2 {
        margin: 0;
        padding: 0;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
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
        </>
    )
}

export default App
