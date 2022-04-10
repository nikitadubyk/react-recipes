import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../utils/auth'

interface Props {
    children: any
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
    const { currentUser, isLoaded } = useAuth()

    return currentUser === null && isLoaded === true ? (
        <Navigate to='/login' />
    ) : (
        children
    )
}

export default PrivateRoute
