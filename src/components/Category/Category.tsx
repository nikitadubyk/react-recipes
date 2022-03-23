import React from 'react'
import { Link } from 'react-router-dom'
import './Category.css'

const Category: React.FC = () => {
    return (
        <>
            <div>Category</div>
            <Link to='/cuisine/italian'>Italian</Link>
            <Link to='/cuisine/mexican'>Mexican</Link>
            <Link to='/cuisine/american'>American</Link>
            <Link to='/cuisine/chinese'>Chinese</Link>
        </>
    )
}

export default Category
