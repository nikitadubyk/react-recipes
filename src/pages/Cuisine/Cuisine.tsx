import React from 'react'
import { useParams } from 'react-router-dom'
import './Cuisine.css'

const Cuisine: React.FC = () => {
    const { type } = useParams()
    return <div>Cuisine {type}</div>
}

export default Cuisine
