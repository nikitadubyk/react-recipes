import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Recipe.css'

const Recipe: React.FC = () => {
    const { id } = useParams()
    return <div>Recipe {id}</div>
}

export default Recipe
