import React from 'react'
import './Loader.css'

const Loader: React.FC = () => {
    return (
        <div className='loader-wrapper'>
            <div className='lds-ring'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader
